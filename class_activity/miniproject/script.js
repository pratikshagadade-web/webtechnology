let courses = [];

// Add Course Event
document.getElementById("addCourseBtn").addEventListener("click", function () {

  let courseInput = document.getElementById("courseName");
  let courseName = courseInput.value;

  if (courseName === "") {
    alert("Please enter course name");
    return;
  }

  courses.push({
    name: courseName,
    students: []
  });

  courseInput.value = "";
  displayCourses();
});

// Display Courses Function
function displayCourses() {

  let courseList = document.getElementById("courseList");
  courseList.innerHTML = "";

  courses.forEach(function (course, index) {

    let div = document.createElement("div");
    div.className = "course-box";

    div.innerHTML = `
      <h3>${course.name}</h3>
      
      <input type="text" id="student-${index}" placeholder="Student Name">
      <button onclick="registerStudent(${index})">Register</button>
      <button onclick="deleteCourse(${index})" style="background:red;color:white;">Delete Course</button>
      
      <p><strong>Students:</strong> ${course.students.join(", ")}</p>
    `;

    courseList.appendChild(div);
  });
}

// Register Student Function
function registerStudent(index) {

  let studentInput = document.getElementById("student-" + index);
  let studentName = studentInput.value;

  if (studentName === "") {
    alert("Enter student name");
    return;
  }

  courses[index].students.push(studentName);
  studentInput.value = "";

  displayCourses();
}
function deleteCourse(index) {

  let confirmDelete = confirm("Are you sure you want to delete this course?");

  if (confirmDelete) {
    courses.splice(index, 1);
    displayCourses();
  }
}