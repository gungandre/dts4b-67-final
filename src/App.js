import "./App.css";
import Login from "./components/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import PrivateComponent from "./components/PrivateComponent";

import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateComponent>
              <Home />
            </PrivateComponent>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
