import { useState, useEffect } from "react";

function StudentForm({ selectedStudent, onSubmit, clearSelection }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  // Load selected student into form when editing
  useEffect(() => {
    if (selectedStudent) {
      setFullName(selectedStudent.fullName);
      setEmail(selectedStudent.email);
      setCourse(selectedStudent.course);
    } else {
      setFullName("");
      setEmail("");
      setCourse("");
    }
  }, [selectedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !course) {
      alert("All fields are required!");
      return;
    }

    onSubmit({ fullName, email, course });
    setFullName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{selectedStudent ? "Edit Student" : "Add Student"}</h2>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <button type="submit">{selectedStudent ? "Update" : "Add"}</button>
      {selectedStudent && (
        <button type="button" onClick={clearSelection}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default StudentForm;
