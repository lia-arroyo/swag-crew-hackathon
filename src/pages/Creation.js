import CasinoIcon from "@mui/icons-material/Casino";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import pet1 from "../images/pets/1.png";
import { Fab } from "@mui/material";
import "../styles/creation.css";

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
      <h1>CHOOSE YOUR PET:</h1>
      <Fab
        color="primary"
        id="random-btn"
        onClick={getNewPet}
        variant="extended"
      >
        <CasinoIcon />
        Randomise
      </Fab>
      <img src={petAvatar} alt="Pet avatar" />
      <Fab color="primary" id="select-btn" variant="extended">
        Select
        <ArrowForwardIosIcon />
      </Fab>
    </div>
  );
};

export default Creation;
