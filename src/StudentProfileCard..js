import "./StudentProfileCard.css";

function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Student ID:</strong> {studentId}</p>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>GPA:</strong> {gpa}</p>
    </div>
  );
}

export default StudentProfileCard;