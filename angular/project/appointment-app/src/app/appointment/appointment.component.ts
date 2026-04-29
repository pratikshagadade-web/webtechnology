import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule],   // ✅ ONLY THIS
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  name = "";
  date = "";
  time = "";
  appointments: any[] = [];

  addAppointment() {
    if (!this.name || !this.date || !this.time) {
      alert("Fill all fields");
      return;
    }

    this.appointments.push({
      name: this.name,
      date: this.date,
      time: this.time
    });

    this.name = "";
    this.date = "";
    this.time = "";
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}