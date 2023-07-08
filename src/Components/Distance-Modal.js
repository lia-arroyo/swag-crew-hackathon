import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";

function FindDistance() {
  const [data, setData] = useState([]);
  const [startLoc, setStartLoc] = useState("");
  const [endLoc, setEndLoc] = useState("");
  const [dist, setDist] = useState(0);

  //   const getLatAndLon = (location) => {
  //     return fetch(
  //       `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&access_token=pk.eyJ1IjoibWFuYXZsYWw1IiwiYSI6ImNsanRnejg5MTB2enEzZ282aGUzaW5sc2QifQ.4ityPQihWBgLs2DG4LMUGQ`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => ({
  //         lat: data[0].features[0].center[0],
  //         long: data[0].features[0].center[1],
  //       }));
  //   };

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
    setDist(getDistance(startCoords, endCoords));
    console.log(dist);
  };

  return (
    <div>
      <Card variant="outlined">
        <input
          type="text"
          id="message"
          name="message"
          onChange={(event) => {
            setStartLoc(event.target.value);
          }}
          value={startLoc}
        />
        <input
          type="text"
          onChange={(event) => {
            setEndLoc(event.target.value);
          }}
          value={endLoc}
        />
        <button
          onClick={() => {
            handleSearch();
          }}
        >
          search
        </button>
      </Card>
    </div>
  );
}
export default FindDistance;
