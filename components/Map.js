import { getCenter } from "geolib";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

function Maps({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResult.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/rohit009/cl9ef8116001n14o071b1bkwk/draft"
      onMove={(e) => setViewport(e.viewport)}
    ></Map>
  );
}

export default Maps;
