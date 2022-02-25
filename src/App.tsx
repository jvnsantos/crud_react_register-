import "./App.css";
import logo from "./logo.svg";
import { Home, Private } from "./pages";
import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <header>
        <h1> CRUD With Auth</h1>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/private"> Private</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
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
