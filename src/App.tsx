import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home, Private, Register } from "./pages";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <hr />
      <Routes>
        {/* Rotas Publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas Privadas */}
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
