import CasinoIcon from "@mui/icons-material/Casino";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import defaultPet from "../images/pets/1/avatar1.png";
import petHoverImg from "../images/pets/1/avatar2.png";
import titleImg from "../images/title/PPB_title.png";
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
      <img alt="Pet, Path & Beyond" class="titleImg" src={titleImg}/>
      <div className="title">
          <h3>SELECT YOUR PET</h3>
      </div>
      <div className="textfields">
        <TextField
          id="user-name"
          label="Your Name"
          variant="filled"
          color="success"
          sx={{
            backgroundColor: "#b98849",
            color: "#553b30",
            borderRadius: "5px 5px 0 0",
            boxShadow: "5px 5px #533c1e8f",
            "& label.Mui-focused": {
              color: "#553b30",
            },
          }}
        />
        <TextField
          id="pet-name"
          color="success"
          label="Your Pet's Name"
          variant="filled"
          sx={{
            backgroundColor: "#b98849",
            color: "#553b30",
            borderRadius: "5px 5px 0 0",
            boxShadow: "5px 5px #533c1e8f",
            "& label.Mui-focused": {
              color: "#553b30",
            },
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
          color: "#553b30",
          "&:hover": {
            backgroundColor: "#d6be5e",
          },
          boxShadow: "5px 5px #533c1e8f",
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
          color: "#553b30",
          "&:hover": {
            backgroundColor: "#d6be5e",
          },
          boxShadow: "5px 5px #533c1e8f",
        }}
      >
        Select
        <ArrowForwardIosIcon />
      </Fab>
    </div>
  );
};

export default Creation;
