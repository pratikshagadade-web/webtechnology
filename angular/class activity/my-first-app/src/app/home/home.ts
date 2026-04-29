import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  fname: string = "pratiksha";

  myRoll: number = 101;

  imageurl: string = "https://via.placeholder.com/150";

  showbutton() {
    alert("Button clicked!");
  }

  // ✅ Add students here (inside SAME class)
  students = [
    { name: "pratiksha", id: 30, email: "pratiksha@gmail.com" },
    { name: "shweta", id: 32, email: "shweta@gmail.com" }
  ];
}