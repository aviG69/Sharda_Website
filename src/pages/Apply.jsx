import { useState } from "react";

const initialForm = {
  fullName: "",
  classLevel: "",
  studentPhone: "",
  parentPhone: "",
  subjectInterest: "",
  message: "",
};

export default function Apply() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="apply-page">
      <div className="apply-container">
        <h1 className="apply-title">Apply Now</h1>
        <p className="apply-subtitle">
          Fill the form and we’ll contact you shortly.
        </p>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Student name"
                required
              />
            </div>

            <div className="form-group">
              <label>Class *</label>
              <select
                name="classLevel"
                value={form.classLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Student Phone *</label>
              <input
                type="tel"
                name="studentPhone"
                value={form.studentPhone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Parent Phone *</label>
              <input
                type="tel"
                name="parentPhone"
                value={form.parentPhone}
                onChange={handleChange}
                placeholder="Parent number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Subject Interest *</label>
            <select
              name="subjectInterest"
              value={form.subjectInterest}
              onChange={handleChange}
              required
            >
              <option value="">Select subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="Social Science">Social Science</option>
              <option value="English">English</option>
              <option value="All Subjects">All Subjects</option>
            </select>
          </div>

          <div className="form-group">
            <label>Optional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any additional info..."
              rows="4"
            />
          </div>

          {status === "success" && (
            <p className="success-msg">Application submitted successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong. Try again.</p>
          )}

          <button className="btn primary-btn full-width" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </main>
  );
}