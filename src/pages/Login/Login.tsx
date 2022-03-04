import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (password) {
      const isLogged = await auth.signin(email, password);
      console.log(isLogged);
      if (isLogged) {
        navigate("/");
      } else {
        console.log("falha ao logar");
        alert("fail");
      }
    }
  };

  return (
    <div>
      <h2>Restrict Area</h2>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <button onClick={handleLogin}>Logar</button>
    </div>
  );
};
