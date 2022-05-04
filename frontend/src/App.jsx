import { useState, useEffect } from "react"
import "./App.css"
import { getAllStudents } from "./client"
import { Avatar, Modal, Table } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

import Container from "./Container"
import Footer from "./Footer"
import AddStudentForm from "./forms/AddStudentForm"

function App() {
  const [students, setStudents] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = () => {
    setIsFetching(true)
    getAllStudents()
      .then(res => res.json())
      .then(data => {
        setStudents(data)
        setIsFetching(false)
      })
  }

  const openAddStudentModal = () => {
    setIsModalVisible(true)
  }

  const closeAddStudentModal = () => {
    setIsModalVisible(false)
  }

  if (isFetching) {
    return (
      <Container>
        <LoadingOutlined style={{ fontSize: 24 }} />
      </Container>
    )
  }
  if (students?.length) {
    return students.map((_student, id) => {
      const columns = [
        {
          title: "",
          key: "Avatar",
          render: (_text, student) => (
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
          <Modal
            title="Add new student"
            visible={isModalVisible}
            onOk={closeAddStudentModal}
            onCancel={closeAddStudentModal}
            width={1000}
          >
            <h1>Hello modal</h1>
            <AddStudentForm />
          </Modal>
          <Footer
            handleAddStudentClickEvent={openAddStudentModal}
            numberOfStudents={students.length}
          />
        </Container>
      )
    })
  }
  return <h1>No students found</h1>
}

export default App
