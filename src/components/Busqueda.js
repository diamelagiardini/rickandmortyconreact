import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Busqueda = ({ handleChange, handleClick }) => {
  return (
    <div className="busqueda">
      <TextField
        onChange={handleChange}
        label="Buscar Personaje"
        variant="standard"
      ></TextField>
      <Button onClick={handleClick} sx={{ mr: 2 }} variant="text">
        <SearchIcon></SearchIcon>
      </Button>
    </div>
  );
};

export default Busqueda;
