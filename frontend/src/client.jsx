import fetch from "unfetch"

export const getAllStudents = () => fetch("/students")
export const addNewStudents = student =>
  fetch("/students", {
    header: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(student),
  })