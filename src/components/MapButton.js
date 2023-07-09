import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, IconButton, Popover } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../styles/MapButton.css";

export default function MapButton({ slides }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const popoverOpen = Boolean(anchorEl);
    const id = popoverOpen ? 'simple-popover' : undefined;
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleVisitClick = () => {
        navigate("/landmark");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                sx={{width: "20%"}}
            >
                <Slide id="slideshow" autoplay={false} transitionDuration={500}>
                    {slides.map((slide, index) => (
                        <div key={index} id="slideDiv">
                            <Container id={"checkpointContainer" + index} className="slide-container" maxWidth="sm">
                                <div id="slideHeader">
                                    <h1>{slide.heading}</h1>
                                    {index === 0 ? <Button className="visit-landmark-button" variant="contained" onClick={handleVisitClick}>Visit</Button> : null}
                                </div>
                                <section>{slide.content}</section>
                            </Container>
                        </div>
                    ))}
                </Slide>
            </Popover>
        </div>
    )
}

