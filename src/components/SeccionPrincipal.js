import { Box } from "@mui/material";import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import * as React from "react";

const SeccionPrincipal = ({busqueda}) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPersonajes(data.results);
      });
  }, [busqueda]);

  return (
    <Box sx={{display:'flex', flexWrap:'wrap'}}>
      {personajes.map((personaje) => (
        <Card sx={{margin:2, padding:5}}>
            <h3>{personaje.name}</h3>
            <p>{personaje.status} <span>{personaje.species}</span></p>
            <img src={personaje.image} alt=""></img>
        </Card>
      ))}
    </Box>
  );
};

export default SeccionPrincipal;
