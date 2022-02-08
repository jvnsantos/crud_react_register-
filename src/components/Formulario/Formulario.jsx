import axios from "axios";

const Formulario = () => {
  const URL = "localhost:8080/api/users/new";

  let formData = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };

  async function submitForm(data) {
    const response = await axios.post(URL, data);

    if (response.status == 200) {
      alert("Usuario cadastrado");
    } else {
      alert("Error ao cadastrar");
    }
  }

  return (
    <form>

      <label>Primeiro Nome</label>
      <input
        onBlur={(e) => (formData.firstName = e.target.value)}
        type="text"
      />

      <label>Sobrenome</label>
      <input onBlur={(e) => (formData.lastName = e.target.value)} type="text" />
     
      <label>Nome de usuário</label>
      <input onBlur={(e) => (formData.userName = e.target.value)} type="text" />
      
      <label>Email</label>
      <input onBlur={(e) => (formData.email = e.target.value)} type="email" />
      
      <label>Senha</label>
      <input
        onBlur={(e) => (formData.password = e.target.value)}
        type="password"
      />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          // console.log(formData);
          submitForm(formData);
          console.log("Enviar");
        }}
      >
        ENVIAR
      </button>
    </form>
  );
};

export default Formulario;
