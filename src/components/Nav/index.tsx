import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Nav.module.scss";

const Nav = () => {
  const auth = useContext(AuthContext);

  const handleLogOut = () => {
    if (auth.user) {
      const { email } = auth.user;
      auth.signout(email!);
    }
  };

  return (
    <header>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/private"> Private</Link>

        {auth.user ? (
          <a href="#!" onClick={handleLogOut}>
            Sair
          </a>
        ) : null}
      </nav>
    </header>
  );
};

export default Nav;
