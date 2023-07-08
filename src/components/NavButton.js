import * as React from "react";
import IconButton from "@mui/material/IconButton";
import "../styles/navbutton.css";

export default function NavButton({ icon }) {
  return (
    <div>
      <IconButton id="IconButton">{icon}</IconButton>
    </div>
  );
}
