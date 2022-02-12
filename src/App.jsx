import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<>HOME</>} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
