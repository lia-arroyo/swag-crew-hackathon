import * as React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import NavButton from "../components/NavButton";
import "../styles/landmark.css";
import petOne from "../images/pets/1/avatar2.png";
import petTwo from "../images/pets/4/avatar2.png";
import petThree from "../images/pets/5/avatar2.png";
import petFour from "../images/pets/6/avatar2.png";
import HeartMeter from "../components/HeartMeter";

const Landmark = (distanceInKm) => {
  // dist = distanceInKm > 10 ? dist = 10 : dist = distanceInKm
  // dist = distanceInKm < 0 ? dist = 0 : dist = distanceInKm
  const dist = 10;
  return (
    <div>
      <div className="vert-container">
        <div className="btn-container">
          <NavButton icon={<MapOutlinedIcon fontSize="large" />}></NavButton>
          <p>LANDMARK: Fountain </p>
        </div>

        <div className="mid-container">
          <img className="pet1" src={petOne}></img>
          <img className="pet2" src={petTwo}></img>
          <img className="pet3" src={petThree}></img>
          <img className="pet4" src={petFour}></img>
        </div>
        <div className="status-bar">
          <div className="left">
            <img src={petOne} alt="pet" className="pet-icon"></img>
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
      <div className="container"></div>
    </div>
  );
};

export default Landmark;
