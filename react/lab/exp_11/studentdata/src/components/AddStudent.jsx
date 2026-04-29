import { useState } from "react";   // ✅ FIX

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("")

  const addStudent = () => {
    if (name === "") {
      alert("Enter name")
      return
    }

    setStudents([...students, { name }])
    setName("")
  }

  return (
    <div className="container">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <button onClick={addStudent}>Add</button>
    </div>
  )
}

export default AddStudent;   // ✅ also ensure this is present