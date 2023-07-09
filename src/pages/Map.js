import { useNavigate } from "react-router";
import MapButton from "../components/MapButton";
import FindDistance from "../Components/Distance-Modal";
import "../styles/Map.css"

const Map = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/closeup");
    }

    return (
        <div id="background">
           <FindDistance></FindDistance>
            <div id="landmark1">
                <MapButton />
            </div>
            <div id="landmark2">
                <MapButton />
            </div>
            <div id="landmark3">
                <MapButton />
            </div>
            <div id="landmark4">
                <MapButton />
            </div>
            <div id="landmark5">
                <MapButton />
            </div>
            <button id="character" onClick={handleClick}></button>
        </div>
    );
};

export default Map;
