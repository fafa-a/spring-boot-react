import { useState, useEffect } from "react"
import "./App.css"
import { getAllStudents } from "./client"
import { Avatar, Spin, Table } from "antd"
import { FontSizeOutlined, LoadingOutlined } from "@ant-design/icons"

import Container from "./Container"

function App() {
  const [students, setStudents] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = () => {
    setIsFetching(true)
    getAllStudents()
      .then(res => res.json())
      .then(students => {
        setStudents(students)
        setIsFetching(false)
      })
  }

  if (isFetching) {
    return (
      <Container>
        <LoadingOutlined style={{ fontSize: 24 }} />
      </Container>
    )
  }
  if (students?.length) {
    return students.map((student, id) => {
      const columns = [
        {
          title: "",
          key: "Avatar",
          render: (text, student) => (
            <Avatar size="large">
              {`${student.firstName.charAt(0).toUpperCase()}
                ${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          ),
        },
        { title: "Student ID", dataIndex: "studentID", key: "studentID" },
        { title: "First Name", dataIndex: "firstName", key: "firstName" },
        { title: "Last Name", dataIndex: "lastName", key: "lastName" },
        { title: "email", dataIndex: "email", key: "email" },
        { title: "Gender", dataIndex: "gender", key: "gender" },
      ]
      return (
        <Container key={id}>
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
