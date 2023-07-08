import * as React from "react";
import "../styles/heart_meter.css";
import heart from "../images/pixel_heart_red.png";
import heart_empty from "../images/pixel_heart_empty.png";

export default function HeartMeter({ kilometres }) {
  const happiness = 100 - kilometres * 10;

  return (
    <div
      id="heart-container"
      style={{ height: happiness, minHeight: 0, maxHeight: 100 }}
    >
      {/* "https://www.flaticon.com/free-icons/heart" Pixel Heart icons created by frelayasia - Flaticon */}
      <img id="red-heart" src={heart} alt="red heart"></img>
      <img id="empty-heart" src={heart_empty} alt="black heart"></img>
    </div>
  );
}
