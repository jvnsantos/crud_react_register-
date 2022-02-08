import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<>HOME</>} path="/" />
          <Route element={<Login />} path="/signup" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
