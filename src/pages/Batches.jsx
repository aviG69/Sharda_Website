export default function Batches() {
  const batches = [
    { grade: 8, batchName: "Batch A", time: "4:00 PM - 5:30 PM", capacity: "52 students" },
    { grade: 8, batchName: "Batch B", time: "5:45 PM - 7:15 PM", capacity: "47 students" },
    { grade: 9, batchName: "Batch A", time: "3:00 PM - 4:30 PM", capacity: "54 students" },
    { grade: 9, batchName: "Batch B", time: "5:45 PM - 7:15 PM", capacity: "49 students" },
    { grade: 10, batchName: "Batch A", time: "3:30 PM - 5:00 PM", capacity: "51 students" },
    { grade: 10, batchName: "Batch B", time: "5:15 PM - 6:45 PM", capacity: "55 students" },
    { grade: 11, batchName: "Batch A", time: "2:00 PM - 3:30 PM", capacity: "53 students" },
    { grade: 11, batchName: "Batch B", time: "4:00 PM - 5:30 PM", capacity: "48 students" },
    { grade: 12, batchName: "Batch A", time: "2:30 PM - 4:00 PM", capacity: "50 students" },
    { grade: 12, batchName: "Batch B", time: "5:00 PM - 6:30 PM", capacity: "40 students" },
  ];

  return (
    <div>
      <h1>Our Batches</h1>
      <p style={{ marginTop: "12px", maxWidth: "700px", marginBottom: "30px" }}>
        Explore our carefully organized batches for different grade levels. Each batch is designed to provide focused attention and optimal learning outcomes.
      </p>

      <div className="grid">
        {batches.map((batch, index) => (
          index < 8 && (
            <div key={index} className="card">
              <h3 style={{ color: "#1224c7" }}>Grade {batch.grade}</h3>
              <h4 style={{ marginTop: "10px" }}>{batch.batchName}</h4>
              <p style={{ marginTop: "12px" }}>
                <strong>Time:</strong> {batch.time}
              </p>
              <p>
                <strong>Capacity:</strong> {batch.capacity}
              </p>
            </div>
          )
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
        {batches.map((batch, index) => (
          index >= 8 && (
            <div key={index} className="card" style={{ width: "calc(50% - 10px)", maxWidth: "400px" }}>
              <h3 style={{ color: "#1224c7" }}>Grade {batch.grade}</h3>
              <h4 style={{ marginTop: "10px" }}>{batch.batchName}</h4>
              <p style={{ marginTop: "12px" }}>
                <strong>Time:</strong> {batch.time}
              </p>
              <p>
                <strong>Capacity:</strong> {batch.capacity}
              </p>
            </div>
          )
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="learn-more-btn">
          Learn More
        </button>
      </div>
    </div>
  );
}