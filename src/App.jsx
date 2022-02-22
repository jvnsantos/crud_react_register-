import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Signup, Login } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Home />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
