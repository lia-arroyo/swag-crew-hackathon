import React, { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

const FindDistance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

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
    <>
      <Button onClick={openModal}>Add a new Journey</Button>
      {isOpen && (
        <div
          className="modal"
          style={{ zIndex: 10, position: "absolute", top: "50%", left: "50%" }}
        >
          <Box sx={style}>
            <Button onClick={closeModal}>X</Button>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Starting Location
            </Typography>

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
            <br />
            <br />
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Ending Location
            </Typography>

            <br />
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
            <h1>
              {dist.distance !== undefined
                ? (dist.distance.toString() / 1000).toFixed(2)
                : "0"}
              KM
            </h1>
          </Box>
        </div>
      )}
    </>
  );
};
export default FindDistance;
