import Button from "@mui/material/Button";
import CasinoIcon from "@mui/icons-material/Casino";
import { useState } from "react";
import pet1 from "../images/pets/1.png";

const Creation = () => {
  const [pet, setPet] = useState(1);
  const [petAvatar, setPetAvatar] = useState(pet1);

  const getRandomNum = () => {
    const NUM_OF_PETS = 6;
    return Math.floor(Math.random() * NUM_OF_PETS) + 1;
  };

  const getNewPet = () => {
    let newPet = getRandomNum();
    while (newPet === pet) {
      newPet = getRandomNum();
    }

    setPet(newPet);
    import(`../images/pets/${newPet}.png`).then((image) =>
      setPetAvatar(image.default)
    );
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
      <img src={petAvatar} alt="Pet avatar" />
    </div>
  );
};

export default Creation;
