import { useNavigate } from "react-router";
import MapButton from "../components/MapButton";
import "../styles/Map.css";
import FindDistance from "../components/Distance-Modal";

const Map = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/closeup");
  };

  const slides1 = [
    {
      heading: "Fountain",
      content:
        "A bountiful fountain, surprisingly still runs water?? Legend says if you drink from the fountain you will have a really bad tummy ache...",
    },
    {
      heading: "People",
      content: (
        <ul className="people-list">
          <li>Eugene</li>
          <li>Atharva</li>
          <li>Billy Bob James</li>
        </ul>
      ),
    },
  ];

  const slides2 = [
    {
      heading: "Frozen Wilds",
      content:
        "Apparently the wilds are frozen here... or so I've heard. Make sure to bring a top hat!",
    },
    {
      heading: "People",
      content: (
        <ul className="people-list">
          <li>Leeyurr</li>
          <li>Sagar Indian Restaurnant</li>
        </ul>
      ),
    },
  ];

  const slides3 = [
    {
      heading: "Mountains",
      content: "Dont go in the lake...",
    },
    {
      heading: "People",
      content: (
        <ul className="people-list">
          <li>Mao</li>
        </ul>
      ),
    },
  ];

  const slides4 = [
    {
      heading: "Desert",
      content: "Where did all this sand come from????? What????? Nooooo",
    },
    {
      heading: "People",
      content: (
        <ul className="people-list">
          <li>Grimace</li>
          <li>Freddy</li>
        </ul>
      ),
    },
  ];

  const slides5 = [
    {
      heading: "???",
      content:
        "The Final Boss. Reach all the previous landmarks first to unlock this area.",
    },
    {
      heading: "People",
      content: (
        <ul className="people-list">
          <li>Mysterious Cat</li>
        </ul>
      ),
    },
  ];

  return (
    <div id="background">
      <FindDistance></FindDistance>
      <div id="landmark1">
        <MapButton slides={slides1} />
      </div>
      <div id="landmark2">
        <MapButton slides={slides2} />
      </div>
      <div id="landmark3">
        <MapButton slides={slides3} />
      </div>
      <div id="landmark4">
        <MapButton slides={slides4} />
      </div>
      <div id="landmark5">
        <MapButton slides={slides5} />
      </div>
      <button id="character" onClick={handleClick}></button>
    </div>
  );
};

export default Map;
