import "./App.css";
import { useState } from "react";
import * as React from "react";
import Nav from "./components/Nav";
import SeccionPrincipal from "./components/SeccionPrincipal";
import Busqueda from "./components/Busqueda";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(valorDelInput);
  };
  return (
    <Box>
      <Nav />
      <Busqueda
        handleChange={handleChange}
        handleClick={handleClick}
      ></Busqueda>
      <SeccionPrincipal busqueda={busqueda} />
      <Footer />
    </Box>
  );
};

export default App;
