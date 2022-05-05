import React from "react"
import { Formik } from "formik"
import { Button, Input, Tag } from "antd"
import { addNewStudents } from "../client"
const inputBottomMargin = { marginBottom: "10px" }
const tagStyle = {
  backgroundColor: "#f50",
  color: "white",
  ...inputBottomMargin,
}

const AddStudentForm = props => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", gender: "" }}
      validate={values => {
        const errors = {}

        if (!values.firstname) {
          errors.firstname = "Firstname Required"
        }

        if (!values.lastname) {
          errors.lastname = "Lastname Required"
        }

        if (!values.email) {
          errors.email = "Email Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }

        if (!values.gender) {
          errors.gender = "Gender Required"
        } else if (
          !["MALE", "male", "FEMALE", "female"].includes(values.gender)
        ) {
          errors.gender = "Gender must be ( MALE, male, FEMALE, female) "
        }
        return errors
      }}
      onSubmit={(student, { setSubmitting }) => {
        addNewStudents(student).then(() => {
          alert(JSON.stringify(student))
          setSubmitting(false)
        })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        submitForm,
        isValid,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            style={inputBottomMargin}
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
            placeholder="First Name E.g John"
          />
          {errors.firstname && touched.firstname && (
            <Tag style={tagStyle}>{errors.firstname}</Tag>
          )}
          <Input
            style={inputBottomMargin}
            name="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
            placeholder="Last Name E.g Doe"
          />
          {errors.lastname && touched.lastname && (
            <Tag style={tagStyle}>{errors.lastname}</Tag>
          )}
          <Input
            style={inputBottomMargin}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email. E.g example@gmail.com"
          />
          {errors.email && touched.email && (
            <Tag style={tagStyle}>{errors.email}</Tag>
          )}
          <Input
            style={inputBottomMargin}
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
            placeholder="Gender. E.g Male or Female"
          />
          {errors.gender && touched.gender && (
            <Tag style={tagStyle}>{errors.gender}</Tag>
          )}
          <Button
            onClick={() => submitForm()}
            type="submit"
            disabled={isSubmitting | (touched && !isValid)}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  )
}
export default AddStudentForm
