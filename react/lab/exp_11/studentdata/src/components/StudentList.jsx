function StudentList({ students }) {
  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Student List</h2>

      <p style={{ color: "white" }}>DEBUG: Component Loaded</p>

      {students.length === 0 ? (
        <p style={{ color: "white" }}>No students added</p>
      ) : (
        <div className="student-list">
          {students.map((s, index) => (
            <div className="student-card" key={index}>
              <h3>{s.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}