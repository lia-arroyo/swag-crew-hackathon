import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

function FindDistance() {
  const [data, setData] = useState([]);
  const [startLoc, setStartLoc] = useState("");
  const [endLoc, setEndLoc] = useState("");
  const [dist, setDist] = useState(0);

  const style = {
    position: "absolute",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const getLatAndLon = (location) => {
    return fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&access_token=pk.eyJ1IjoibWFuYXZsYWw1IiwiYSI6ImNsanRnejg5MTB2enEzZ282aGUzaW5sc2QifQ.4ityPQihWBgLs2DG4LMUGQ`
    )
      .then((res) => res.json())
      .then((data) => ({
        lat: data.features[0].bbox[0],
        long: data.features[0].bbox[1],
      }));
  };

  const getDistance = (startCoords, endCoords) => {
    return fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/${startCoords[0]},${startCoords[1]}; ${endCoords[0]},${endCoords[1]}?&access_token=pk.eyJ1IjoibWFuYXZsYWw1IiwiYSI6ImNsanRnejg5MTB2enEzZ282aGUzaW5sc2QifQ.4ityPQihWBgLs2DG4LMUGQ`
    )
      .then((res) => res.json())
      .then((data) => ({ distance: data.routes[0].distance }));
  };

  useEffect(() => {
    console.log(dist);
  }, [dist]);

  const handleSearch = async () => {
    const { lat: startLat, long: startLong } = await getLatAndLon(startLoc);
    const startCoords = [startLat, startLong];
    const { lat: endLat, long: endLong } = await getLatAndLon(endLoc);
    const endCoords = [endLat, endLong];
    setDist(await getDistance(startCoords, endCoords));
    console.log(dist);
  };

  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Starting Location
        </Typography>

        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Start Location"
          variant="outlined"
          onChange={(event) => {
            setStartLoc(event.target.value);
          }}
          value={startLoc}
          style={{ width: "20em" }}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Ending Location
        </Typography>
        <TextField
          id="outlined-basic"
          label="End Location"
          variant="outlined"
          onChange={(event) => {
            setEndLoc(event.target.value);
          }}
          value={endLoc}
          style={{ width: "20em" }}
        />
        <br />
        <br />

        <Button
          variant="outlined"
          onClick={() => {
            handleSearch();
          }}
        >
          Find Distance
        </Button>
        <br />
        <br />

        <Divider />
        <ListItemText primary="Distance" />
        <h1>{(dist.distance.toString() / 1000).toFixed(2)} KM</h1>
      </Box>
    </div>
  );
}
export default FindDistance;
