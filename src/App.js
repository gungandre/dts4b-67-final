import "./App.css";
import Login from "./components/Login";

import { Container } from "@mui/material";
import image from "./cover.jpg";
import { Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import PrivateComponent from "./components/PrivateComponent";
import { Provider } from "react-redux";
import Home from "./components/Home";

function App() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
    },
  };

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
