import React from "react";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* First Name */}
      <label htmlFor="firstName">Primeiro Nome</label>
      <input
        id="first-name"
        name="first-name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      {/* Last Name */}
      <label htmlFor="lastName">Sobrenome</label>
      <input
        id="last-name"
        name="last-name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      {/* User Name */}
      <label htmlFor="user-name">User Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />

      {/* Email */}
      <label htmlFor="user-name">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      {/* Password */}
      <label htmlFor="password">Senha</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
