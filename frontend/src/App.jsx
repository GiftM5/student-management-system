import { useState, useEffect } from "react";
import API from "./services/api";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or update student
  const handleSubmit = async (studentData) => {
    try {
      if (selectedStudent) {
        await API.put(`/students/${selectedStudent._id}`, studentData);
        setSelectedStudent(null);
      } else {
        await API.post("/students", studentData);
      }
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert("Error saving student");
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await API.delete(`/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Management System</h1>
      <StudentForm
        selectedStudent={selectedStudent}
        onSubmit={handleSubmit}
        clearSelection={() => setSelectedStudent(null)}
      />
      <StudentList
        students={students}
        onEdit={setSelectedStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
