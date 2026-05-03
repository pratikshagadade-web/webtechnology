import { useState } from "react";

function BookingForm({ doctor, slot, onBook }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name) {
      alert("Enter patient name");
      return;
    }

    onBook({
      patient: name,
      doctor: doctor.name,
      slot: slot
    });

    setName("");
  };

  return (
    <div className="booking-box">
      <h2>Book Appointment</h2>

      <p>
        <strong>{doctor.name}</strong> — {slot}
      </p>

      <div>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}

export default BookingForm;