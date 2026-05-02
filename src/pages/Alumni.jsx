import React from "react";
import "./Alumni.css";

const alumniData = [
  {
    name: "Purnima",
    image: "/alumni/purnima.jpg",
    exam: "CBSE BOARD RESULT 2026",
    class: "Class X",
    results: [
      { subject: "Maths", marks: "88.00" },
      { subject: "Science", marks: "86.00" },
      { subject: "SST", marks: "88.00" },
    ],
  },
  {
    name: "Sakshi",
    image: "/alumni/sakshi.jpg",
    exam: "CBSE BOARD RESULT 2026",
    class: "Class X",
    results: [
      { subject: "Maths", marks: "97.00" },
      { subject: "Science", marks: "83.00" },
      { subject: "SST", marks: "89.00" },
    ],
  },
  {
    name: "Vaishali",
    image: "/alumni/vaishali.jpg",
    exam: "CBSE BOARD RESULT 2026",
    class: "Class X",
    results: [
      { subject: "Maths", marks: "91.00" },
      { subject: "Science", marks: "89.00" },
      { subject: "SST", marks: "92.00" },
    ],
  },
  {
    name: "Yashika",
    image: "/alumni/yashika.jpg",
    exam: "CBSE BOARD RESULT 2026",
    class: "Class X",
    results: [
      { subject: "Maths", marks: "80.00" },
      { subject: "English", marks: "94.00" },
      { subject: "SST", marks: "85.00" },
    ],
  },
  {
    name: "Yogya",
    image: "/alumni/yogya.jpg",
    exam: "CBSE BOARD RESULT 2026",
    class: "Class X",
    results: [
      { subject: "Maths", marks: "81.00" },
      { subject: "Science", marks: "84.00" },
      { subject: "SST", marks: "93.00" },
    ],
  },
];

const AlumniCard = ({ alumni }) => {
  return (
    <div className="alumni-card">
      <div className="alumni-left">
        <img src={alumni.image} alt={alumni.name} />
        <h2>{alumni.name}</h2>
      </div>

      <div className="alumni-right">
        <h3>{alumni.exam}</h3>
        <h4>{alumni.class}</h4>

        <div className="results">
          {alumni.results.map((item, index) => (
            <div key={index} className="result-row">
              <span className="subject">{item.subject}</span>
              <span className="marks">{item.marks}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Alumni = () => {
  return (
    <div className="alumni-page">
      <h1>Our Alumni</h1>
      <p className="subtitle">
        Proud results of our students from Sharda Tutorial
      </p>

      <div className="alumni-container">
        {alumniData.map((alumni, index) => (
          <AlumniCard key={index} alumni={alumni} />
        ))}
      </div>
    </div>
  );
};

export default Alumni;