import * as React from "react";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import "../styles/navbutton.css";

export default function NavButton({ icon, page }) {
  const navigate = useNavigate();

  const handleClick = (page) => () => {
    navigate("/" + page);
  }

  return (
    <div>
      <IconButton onClick={handleClick(page)} id="IconButton">{icon}</IconButton>
    </div>
  );
}
