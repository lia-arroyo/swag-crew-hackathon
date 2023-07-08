import React from "react";
import { Container, IconButton, Popover } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../styles/MapButton.css";

export default function MapButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const popoverOpen = Boolean(anchorEl);
    const id = popoverOpen ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const slides = [
        {
            heading: "Location Name",
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

    return(
        <div>
            <IconButton aria-describedby={id} id="checkpointButton" variant="contained" onClick={handleClick}><PlaceIcon /></IconButton>
            <Popover
                id={id}
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{width: "25%"}}
            >
                <Slide id="slideshow" autoplay={false} transitionDuration={500}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <Container id={"checkpointContainer" + index} className="slide-container" maxWidth="sm">
                                <h1>{slide.heading}</h1>
                                <section>{slide.content}</section>
                            </Container>
                        </div>
                    ))}
                </Slide>
            </Popover>
        </div>
    )
}

