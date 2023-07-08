import { Button, IconButton } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import "../styles/MapButton.css"

export default function MapButton() {
    return(
        <div>
            <IconButton id="checkpointButton" variant="contained" color="primary"><PlaceIcon /></IconButton>
        </div>
    )
}

