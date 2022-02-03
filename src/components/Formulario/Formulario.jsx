import { Container } from "./styles";

const Formulario = () => {
  return (
    <Container>
      <form>
        <label>Primeiro Nome</label>
        <input type="text" />
        <label>Sobrenome</label>
        <input type="text" />
        <label>Nome de usuário</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Senha</label>
        <input type="password" />

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log("Enviar");
          }}
        >
          ENVIAR
        </button>
      </form>
    </Container>
  );
};

export default Formulario;
