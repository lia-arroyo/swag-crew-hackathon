import Button from "@mui/material/Button";
import CasinoIcon from "@mui/icons-material/Casino";
import { useState } from "react";

const Creation = () => {
  const [pet, setPet] = useState(1);

  const getNewPet = () => {
    const newPet = getRandomNum();
    setPet(newPet === pet ? getRandomNum() : newPet);
  };

  const getRandomNum = () => {
    const NUM_OF_PETS = 6;
    return Math.floor(Math.random() * NUM_OF_PETS) + 1;
  };

  return (
    <div>
      <Button
        onClick={getNewPet}
        startIcon={<CasinoIcon />}
        variant="contained"
      >
        Randomise
      </Button>
      <h1>Current pet: {pet}</h1>
    </div>
  );
};

export default Creation;
