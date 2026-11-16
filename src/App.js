import StudentProfileCard from "./StudentProfileCard";

const students = [
  { id: 1, name: "Student One", studentId: "1001", major: "Web Programming", year: 2, gpa: 3.8 },
  { id: 2, name: "Student Two", studentId: "1002", major: "Computer Science", year: 1, gpa: 3.5 },
  { id: 3, name: "Student Three", studentId: "1003", major: "Design", year: 3, gpa: 3.9 },
];

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Directory</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {students.map((student) => (
          <StudentProfileCard
            key={student.id}
            name={student.name}
            studentId={student.studentId}
            major={student.major}
            year={student.year}
            gpa={student.gpa}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
