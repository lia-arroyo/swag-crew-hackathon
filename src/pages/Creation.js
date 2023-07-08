import CasinoIcon from "@mui/icons-material/Casino";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import pet1 from "../images/pets/1.png";
import { Fab, TextField } from "@mui/material";
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
    <div className="creation">
      <h1>SELECT YOUR PET</h1>
      <TextField id="pet-name" label="Name your pet" variant="outlined" />
      <img alt="Pet avatar" className="avatar" src={petAvatar} />
      <Fab
        color="primary"
        id="random-btn"
        onClick={getNewPet}
        variant="extended"
      >
        <CasinoIcon />
        Randomise
      </Fab>
      <Fab color="primary" id="select-btn" variant="extended">
        Select
        <ArrowForwardIosIcon />
      </Fab>
    </div>
  );
};

export default Creation;
