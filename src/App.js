import StudentProfileCard from "./StudentProfileCard";

const students = [
  { id: 1, name: "Aale Aaditi", studentId: "202537195", major: "Computer Engineering", year: 2, gpa: 4.3 },
  { id: 2, name: "Shrestha Puja", studentId: "202537250", major: "Computer Engineering", year: 1, gpa: 4.3 },
  { id: 3, name: "Sunar Roshni", studentId: "202537197", major: "Computer Engineering", year: 3, gpa: 4.3 },
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
