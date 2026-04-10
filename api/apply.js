import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    const {
      fullName,
      classLevel,
      studentPhone,
      parentPhone,
      subjectInterest,
      message,
    } = body;

    if (
      !fullName ||
      !classLevel ||
      !studentPhone ||
      !parentPhone ||
      !subjectInterest
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "RESEND_API_KEY is missing.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const teacherEmails = [
      "hellotakumi73@gmail.com",
      "helloavi2301@gmail.com",
    ];

    const emailText = `
New Student Application

Full Name: ${fullName}
Class: ${classLevel}
Student Phone: ${studentPhone}
Parent Phone: ${parentPhone}
Subject Interest: ${subjectInterest}
Message: ${message || "N/A"}
    `.trim();

    const { error } = await resend.emails.send({
      from: "Sharda Tutorial <onboarding@resend.dev>",
      to: teacherEmails,
      subject: `New Application - ${fullName}`,
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err) {
    console.error("Apply API error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
}