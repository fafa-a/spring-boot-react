import { useState, useEffect } from "react"
import "./App.css"
import { getAllStudents } from "./client"

function App() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    fetchStudents()
  })
  const fetchStudents = () => {
    getAllStudents()
      .then(res => res.json())
      .then(students => {
        setStudents(students)
      })
  }

  if (students?.length) {
    return students.map((student, id) => {
      return (
        <div key={id}>
          <h2>{student.studentId}</h2>
          <h2>{student.firstName}</h2>
          <h2>{student.lastName}</h2>
          <h2>{student.gender}</h2>
          <h2>{student.email}</h2>
        </div>
      )
    })
  }
  return <h1>No students found</h1>
}

export default App
