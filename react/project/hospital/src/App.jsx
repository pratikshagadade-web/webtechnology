import { useState } from "react";
import DoctorList from "./components/DoctorList";
import BookingForm from "./components/BookingForm";
import AppointmentList from "./components/AppointmentList";
import "./App.css";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const handleSelectDoctor = (doctor, slot) => {
    setSelectedDoctor(doctor);
    setSelectedSlot(slot);
  };

  const handleBooking = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
    setSelectedDoctor(null); // close popup
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="container">
      <h1>🏥 Hospital Management System</h1>

      {/* Centered Doctor List */}
      <DoctorList onSelectDoctor={handleSelectDoctor} />

      {/* Appointments */}
      <div className="appointments-section">
        <AppointmentList appointments={appointments} />
      </div>

      {/* POPUP MODAL */}
      {selectedDoctor && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>

            <BookingForm
              doctor={selectedDoctor}
              slot={selectedSlot}
              onBook={handleBooking}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;