import Student from "./Student";

function App() {
  const students = [
    { name: "pratiksha", age: 22, course: "AI-ML" },
    { name: "priyanka", age: 21, course: "cs" },
    { name: "shweta", age: 23, course: "cse" }
  ];

  return (
    <>
      <h1>Student List</h1>

      {students.map((s, index) => (
        <Student
          key={index}
          name={s.name}
          age={s.age}
          course={s.course}
        />
      ))}
    </>
  );
}

export default App;