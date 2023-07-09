import CasinoIcon from "@mui/icons-material/Casino";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import defaultPet from "../images/pets/1/avatar1.png";
import petHoverImg from "../images/pets/1/avatar2.png";
import { Fab, TextField } from "@mui/material";
import "../styles/creation.css";

const Creation = () => {
  const [pet, setPet] = useState(1);
  const [petAvatar, setPetAvatar] = useState(defaultPet);
  const [hoverImage, setHoverImage] = useState(petHoverImg);

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
    import(`../images/pets/${newPet}/avatar1.png`).then((image) =>
      setPetAvatar(image.default)
    );
    import(`../images/pets/${newPet}/avatar2.png`).then((image) =>
      setHoverImage(image.default)
    );
  };

  return (
    <div className="creation">
      <h1 className="title">SELECT YOUR PET</h1>
      <div className="textfields">
        <TextField
          id="user-name"
          label="Your Name"
          variant="filled"
          sx={{
            backgroundColor: "#b98849",
            color: "black",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="pet-name"
          label="Your Pet's Name"
          variant="filled"
          sx={{
            backgroundColor: "#b98849",
            color: "black",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="avatar">
        <img alt="Pet avatar" className="normalAvatar" src={petAvatar} />
        <img
          alt="Pet avatar doing a pose"
          className="hoverAvatar"
          src={hoverImage}
        />
      </div>
      <Fab
        color="primary"
        id="random-btn"
        onClick={getNewPet}
        variant="extended"
        sx={{
          backgroundColor: "#b98849",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <CasinoIcon />
        Randomise
      </Fab>
      <Fab
        color="primary"
        id="select-btn"
        variant="extended"
        sx={{
          backgroundColor: "#b98849",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        Select
        <ArrowForwardIosIcon />
      </Fab>
    </div>
  );
};

export default Creation;
