import fetch from "unfetch"

export const getAllStudents = () => fetch("/students")
export const addNewStudents = student =>
  fetch("/students", {
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify(student),
  })