import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>Strong Foundation for Classes 9–12</h1>
        <p>Small batches. Personal attention. Proven results.</p>
        <Link to="/apply" className="btn">Apply Now</Link>
      </section>

      {/* QUOTE / TRUST LINE */}
      <section style={{ marginTop: "40px", textAlign: "center" }}>
        <p style={{ fontStyle: "italic", color: "#475569" }}>
          "Success in exams is not luck — it’s the result of consistent guidance and effort."
        </p>
      </section>

      {/* OVERVIEW */}
      <section style={{ marginTop: "40px" }}>
        <h2>About Sharda Tutorial</h2>
        <p style={{ marginTop: "12px", maxWidth: "700px" }}>
          Sharda Tutorial, located in Bijwasam New Delhi, focuses on
          building strong academic foundations for students of Classes 9 to 12.
          With small batch sizes and dedicated attention to each student, we
          ensure conceptual clarity and consistent performance improvement.
        </p>
      </section>

      {/* TEACHERS */}
      <section style={{ marginTop: "40px" }}>
        <h2>Our Teachers</h2>

        <div className="grid">
          <div className="card">
            <img src="/teachers/sandeep.jpg" width="100%" />
            <h3>Sandeep Sir</h3>
            <p>Mathematics & Science</p>
            <p style={{ fontSize: "20px", color: "#1200b6" }}>
              Focused on building strong concepts and problem-solving skills.
            </p>
          </div>

          <div className="card">
            <img src="/teachers/sonu.jpg" width="100%" />
            <h3>Sonu Sir</h3>
            <p>Social Science (SST)</p>
            <p style={{ fontSize: "20px", color: "#1200b6" }}>
              Simplifies complex topics and helps students retain concepts easily.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ marginTop: "40px" }}>
        <h2>Find Us</h2>

        <iframe
          src="https://maps.google.com/maps?q=28.5339631,77.0507041&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, marginTop: "16px" }}
        ></iframe>
      </section>
    </div>
  );
}