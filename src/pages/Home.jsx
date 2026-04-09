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
        <p style={{ fontStyle: "italic", color: "#1224c7" }}>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56083.064041450314!2d76.9786063216797!3d28.5339631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf279798b7b%3A0xaafaa438a8ce6e76!2sSharda%20Tutorial!5e0!3m2!1sen!2sin!4v1775760324307!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, marginTop: "16px" }}
        ></iframe>
      </section>
    </div>
  );
}