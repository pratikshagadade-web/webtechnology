import doctors from "../data/doctors";

function DoctorList({ onSelectDoctor }) {
  return (
    <div className="doctor-list">
      <h2>Available Doctors</h2>

      {doctors.map((doc) => (
        <div key={doc.id} className="doctor-card">
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>

          <div className="slots">
            {doc.slots.map((slot, index) => (
              <button
                key={index}
                onClick={() => onSelectDoctor(doc, slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;