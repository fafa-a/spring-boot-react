import React from "react"
import { Formik } from "formik"
import { Button, Input } from "antd"

const inputBottomMargin = { marginBottom: "10px" }

const AddStudentForm = props => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
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
          {errors.firstname && touched.firstname && errors.firstname}
          <Input
            style={inputBottomMargin}
            name="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
            placeholder="Last Name E.g Doe"
          />
          {errors.lastname && touched.lastname && errors.lastname}
          <Input
            style={inputBottomMargin}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email. E.g example@gmail.com"
          />
          {errors.email && touched.email && errors.email}
          <Input
            style={inputBottomMargin}
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
            placeholder="Gender. E.g Male or Female"
          />
          {errors.gender && touched.gender && errors.gender}
          <Input
            style={inputBottomMargin}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  )
}
export default AddStudentForm
