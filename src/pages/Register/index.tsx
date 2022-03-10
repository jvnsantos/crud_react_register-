import { useFormik } from "formik";
import "./Register.module.scss";

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
    <section>
      <form onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <label htmlFor="firstName">Primeiro nome</label>
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
        <label htmlFor="user-name">Nome de usuário</label>
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

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Register;
