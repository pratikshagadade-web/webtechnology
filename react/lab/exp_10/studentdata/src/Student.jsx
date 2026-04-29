function Student(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student;