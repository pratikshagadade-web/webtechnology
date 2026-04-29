import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: any[] = [];

  addStudent(student: any) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}