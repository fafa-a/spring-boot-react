import { useState, useEffect } from "react"
import "./App.css"
import { getAllStudents } from "./client"
import { Table } from "antd"
import Container from "./Container"

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = () => {
    getAllStudents()
      .then(res => res.json())
      .then(students => {
        setStudents(students)
      })
  }

  if (students?.length) {
    return students.map((student, id) => {
      const columns = [
        { title: "Student ID", dataIndex: "studentID", key: "studentID" },
        { title: "First Name", dataIndex: "firstName", key: "firstName" },
        { title: "Last Name", dataIndex: "lastName", key: "lastName" },
        { title: "email", dataIndex: "email", key: "email" },
        { title: "Gender", dataIndex: "gender", key: "gender" },
      ]
      return (
        <Container>
          <Table
            dataSource={students}
            columns={columns}
            pagination={false}
            rowKey="studentID"
          />
        </Container>
      )
    })
  }
  return <h1>No students found</h1>
}

export default App
