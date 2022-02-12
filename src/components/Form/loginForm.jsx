import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const URL_AUTH = "http://localhost:8080/api/register";

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    dataForm[event.target.name] = event.target.value;
    setDataForm(dataForm);
  }

  async function handleFormSubmit(data) {
    try {
      const response = await axios.post(URL_AUTH, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form id="form-signup">
      <label>Email</label>
      <input onChange={handleInputChange} name="email" type="email" />

      <label>Senha</label>
      <input onChange={handleInputChange} name="password" type="password" />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleFormSubmit(dataForm);
        }}
      >
        ENTRAR
      </button>
    </form>
  );
};

export default LoginForm;
