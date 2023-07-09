import { useNavigate } from "react-router";
import MapButton from "../components/MapButton";
import "../styles/Map.css"

const Map = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/closeup");
    }

    const slides1 =[
        {
            heading: "Fountain",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ullamcorper mauris. Etiam tincidunt porttitor est, vitae mattis justo mollis sit amet. Morbi maximus laoreet ornare. Aliquam consectetur ultrices dictum. Cras ornare mattis purus, ut luctus mi suscipit ac."
        },
        {
            heading: "People",
            content: <ul className="people-list">
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
                    </ul>
        }
    ];

    const slides2 =[
        {
            heading: "Frozen Wilds",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ullamcorper mauris. Etiam tincidunt porttitor est, vitae mattis justo mollis sit amet. Morbi maximus laoreet ornare. Aliquam consectetur ultrices dictum. Cras ornare mattis purus, ut luctus mi suscipit ac."
        },
        {
            heading: "People",
            content: <ul className="people-list">
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
                    </ul>
        }
    ];

    const slides3 =[
        {
            heading: "Mountains",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ullamcorper mauris. Etiam tincidunt porttitor est, vitae mattis justo mollis sit amet. Morbi maximus laoreet ornare. Aliquam consectetur ultrices dictum. Cras ornare mattis purus, ut luctus mi suscipit ac."
        },
        {
            heading: "People",
            content: <ul className="people-list">
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
                    </ul>
        }
    ];

    const slides4 =[
        {
            heading: "Desert",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ullamcorper mauris. Etiam tincidunt porttitor est, vitae mattis justo mollis sit amet. Morbi maximus laoreet ornare. Aliquam consectetur ultrices dictum. Cras ornare mattis purus, ut luctus mi suscipit ac."
        },
        {
            heading: "People",
            content: <ul className="people-list">
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
                    </ul>
        }
    ];

    const slides5 =[
        {
            heading: "Burning Shores",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ullamcorper mauris. Etiam tincidunt porttitor est, vitae mattis justo mollis sit amet. Morbi maximus laoreet ornare. Aliquam consectetur ultrices dictum. Cras ornare mattis purus, ut luctus mi suscipit ac."
        },
        {
            heading: "People",
            content: <ul className="people-list">
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
                    </ul>
        }
    ];

    return (
        <div id="background">
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