import * as React from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import NavButton from "../components/NavButton";
import HeartMeter from "../components/HeartMeter";
import "../styles/closeup.css";
import pet from "../images/tan_pet0.png";

const Closeup = () => {
  return (
    <div className="vert-container">
      <div className="button-container">
        <NavButton icon={<MapOutlinedIcon fontSize="large" />}></NavButton>
        <NavButton icon={<CheckroomIcon fontSize="large" />}></NavButton>
      </div>
      <div className="status-bar">
        <div className="left">
          <img src={pet} alt="pet" className="pet-icon"></img>
          <div className="name-container">
            <h3>FLUFFY</h3>
            <p>Lia's Path Pet</p>
          </div>
        </div>

        <div className="right">
          <p>HAPPINESS</p>
          <HeartMeter kilometres={6} />
          <p>60%</p>
        </div>
      </div>
    </div>
  );
};

export default Closeup;
