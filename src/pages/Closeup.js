import * as React from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import NavButton from "../components/NavButton";
import HeartMeter from "../components/HeartMeter";
import "../styles/closeup.css";

const Closeup = () => {
  return (
    <div>
      <div className="vert-container">
        <div className="button-container">
          <NavButton icon={<MapOutlinedIcon fontSize="large" />}></NavButton>
          <NavButton icon={<CheckroomIcon fontSize="large" />}></NavButton>
        </div>
        <HeartMeter kilometres={6} />
      </div>
    </div>
  );
};

export default Closeup;
