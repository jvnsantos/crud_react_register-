import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home, Private, Register } from "./pages";

function App() {
  const auth = useContext(AuthContext);

  const handleLogOut = () => {
    if (auth.user) {
      const { email } = auth.user;
      auth.signout(email!);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> CRUD With Auth</h1>
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
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
