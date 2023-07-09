import * as React from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import NavButton from "../components/NavButton";
import HeartMeter from "../components/HeartMeter";
import "../styles/closeup.css";
import pet from "../images/tan_pet0.png";
import petWalking from "../images/tan_pet_walking.gif";

const Closeup = ({ distanceInKm }) => {
  // dist = distanceInKm > 10 ? dist = 10 : dist = distanceInKm
  // dist = distanceInKm < 0 ? dist = 0 : dist = distanceInKm
  const dist = 10;
  return (
    <div>
      <div className="vert-container">
        <div className="button-container">
          <NavButton icon={<MapOutlinedIcon fontSize="large" />}></NavButton>
          <NavButton icon={<CheckroomIcon fontSize="large" />}></NavButton>
        </div>

        <div className="middle-container">
          <div style={{ width: 100 }}></div>
          <img src={petWalking} className="pet-walking" alt="pet walking"></img>
          <div className="arrow">
            <p>{100}km left until next checkpoint!</p>
          </div>
        </div>
        <div className="status-bar">
          <div className="left">
            <img src={pet} alt="pet" className="pet-icon"></img>
            <div className="name-container">
              <h3>FLUFFY</h3>
              <p>Lia's Path Pet</p>
            </div>
          </div>

          <div className="section">
            {/* SHOULD USE INPUT DIST */}
            <p>DISTANCE WALKED: {100} KM</p>
          </div>
          <div className="section">
            <p>HAPPINESS</p>
            {/* SHOULD USE CALCULATED DIST */}
            <HeartMeter kilometres={dist} />
            <p>{dist * 10}%</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default Closeup;
