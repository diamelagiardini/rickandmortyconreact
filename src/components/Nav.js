import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

const Nav = () => {
  return (
    <div className="navegacion">
      <Box>
        <img
          src="https://admiring-keller-046d5a.netlify.app/static/media/logo.9baa90dc.png"
          alt=""
        ></img>
      </Box>
      <Box sx={{ display: "flex" }}>
      <Button variant="outlined" sx={{m:1}}>PERSONAJES</Button>
      <Button variant="outlined" sx={{m:1}}>EPISODIOS</Button>
      <Button variant="outlined" sx={{m:1}}>UBICACIONES</Button>
      </Box>
    </div>
  );
};

export default Nav;
