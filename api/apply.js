import { Resend } from "resend";

export default async function handler(req, res) {
  console.log("API HIT");

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Only POST allowed" });
  }

  try {
    const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    console.log("Received data:", data);

    const {
      fullName,
      classLevel,
      studentPhone,
      parentPhone,
      subjectInterest,
      message,
    } = data;

    // ✅ Check required fields
    if (!fullName || !classLevel || !studentPhone || !parentPhone || !subjectInterest) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // ✅ Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("API KEY MISSING");
      return res.status(500).json({
        success: false,
        message: "API key not found",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailText = `
New Application

Name: ${fullName}
Class: ${classLevel}
Student Phone: ${studentPhone}
Parent Phone: ${parentPhone}
Subject: ${subjectInterest}
Message: ${message || "N/A"}
`;

    console.log("Sending email...");

    const response = await resend.emails.send({
      from: "Sharda Tutorial <onboarding@resend.dev>",
      to: ["hellotakumi73@gmail.com"], // CHANGE THIS
      subject: "New Student Application",
      text: emailText,
    });

    console.log("Resend response:", response);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error("FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server crashed",
    });
  }
}