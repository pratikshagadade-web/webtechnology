function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments yet</p>
      ) : (
        appointments.map((a, index) => (
          <div key={index} className="appointment-box">
            <strong>{a.patient}</strong> → {a.doctor} at {a.slot}
          </div>
        ))
      )}
    </div>
  );
}

export default AppointmentList;