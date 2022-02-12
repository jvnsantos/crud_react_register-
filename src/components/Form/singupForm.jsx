import axios from "axios";
import { useState } from "react";

const SignupForm = () => {
  const URL_POST = "http://localhost:8080/api/register";

  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    dataForm[event.target.name] = event.target.value;
    setDataForm(dataForm);
  }

  async function handleClearInputData() {
    //Clear State
    setDataForm({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });

    //Clear INPUT DOM
    let inputs = document.querySelectorAll("#form-signup input");
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  async function handleFormSubmit(data) {
    try {
      const response = await axios.post(URL_POST, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form id="form-signup">
      <label>Primeiro Nome</label>
      <input onChange={handleInputChange} name="firstName" type="text" />

      <label>Sobrenome</label>
      <input onChange={handleInputChange} name="lastName" type="text" />

      <label>Nome de usuário</label>
      <input onChange={handleInputChange} name="userName" type="text" />

      <label>Email</label>
      <input onChange={handleInputChange} name="email" type="email" />

      <label>Senha</label>
      <input onChange={handleInputChange} name="password" type="password" />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleFormSubmit(dataForm);
          handleClearInputData();
        }}
      >
        ENVIAR
      </button>
    </form>
  );
};

export default SignupForm;
