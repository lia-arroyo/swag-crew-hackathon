import React from "react";
import { Container, IconButton, Popover } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import "../styles/MapButton.css"

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
            >
                <Container id="checkpointContainer" maxWidth="sm">
                    <h1>Location Name</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ullamcorper mauris. Etiam tincidunt porttitor est, vitae mattis justo 
                        mollis sit amet. Morbi maximus laoreet ornare. Aliquam consectetur ultrices dictum. Cras ornare mattis purus, ut luctus mi suscipit ac. 
                        In quis ultricies felis. Curabitur vulputate ante at mattis vestibulum. Nunc auctor maximus aliquet. Mauris urna arcu, auctor convallis 
                        fermentum eget, aliquet at purus. Nunc elit magna, varius ac mi ut, feugiat iaculis tortor.
                    </p>
                </Container>
            </Popover>
        </div>
    )
}

