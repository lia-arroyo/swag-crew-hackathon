import "../styles/dressingroom.css";
import petAvatar from "../images/pets/1/avatar1.png";
import petAccessory from "../images/pets/1/accessories/6.png";
import acc1 from "../images/accessories/1.png";
import acc2 from "../images/accessories/2.png";
import acc3 from "../images/accessories/3.png";
import acc4 from "../images/accessories/4.png";
import acc5 from "../images/accessories/5.png";
import acc6 from "../images/accessories/6.png";
import { useState } from "react";

const DressingRoom = () => {
  const [currentAccessory, setCurrentAccessory] = useState(petAccessory);

  const setAccessory = (accessoryId) => {
    // TODO: NEED TO CHANGE THE 1 TO THE CURRENT PET!!!!!!!!!!!!!!
    import(`../images/pets/1/accessories/${accessoryId}.png`).then((image) =>
      setCurrentAccessory(image.default)
    );
  };

  return (
    <div className="dressing-room">
      <h1 className="dressing-room-title">Dressing Room</h1>
      <div className="accessory-buttons">
        <button className="acc-button" onClick={() => setAccessory(1)}>
          <img src={acc1} alt="Accessory 1" className="acc-button-img" />
        </button>
        <button className="acc-button" onClick={() => setAccessory(2)}>
          <img src={acc2} alt="Accessory 2" className="acc-button-img" />
        </button>
        <button className="acc-button" onClick={() => setAccessory(3)}>
          <img src={acc3} alt="Accessory 3" className="acc-button-img" />
        </button>
        <button className="acc-button" onClick={() => setAccessory(4)}>
          <img src={acc4} alt="Accessory 4" className="acc-button-img" />
        </button>
        <button className="acc-button" onClick={() => setAccessory(5)}>
          <img src={acc5} alt="Accessory 5" className="acc-button-img" />
        </button>
        <button className="acc-button" onClick={() => setAccessory(6)}>
          <img src={acc6} alt="Accessory 6" className="acc-button-img" />
        </button>
      </div>
      <div className="avatar">
        <img alt="Pet avatar" id="dressing-room-avatar" src={petAvatar} />
        <img
          alt="Pet avatar accessory"
          id="dressing-room-avatar"
          src={currentAccessory}
        />
      </div>
    </div>
  );
};

export default DressingRoom;
