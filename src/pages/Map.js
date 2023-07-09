import MapButton from "../components/MapButton";
import "../styles/Map.css"

const Map = () => {
    return (
        <div id="background">
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
        </div>
    );
};

export default Map;