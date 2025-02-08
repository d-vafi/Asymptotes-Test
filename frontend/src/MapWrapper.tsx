// MapWrapper.tsx
import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapComponent from "./MapComponent"; // See below

function MapWrapper() {
  return (
    <APIProvider 
    apiKey={"AIzaSyAlwcko-mshwhZCheZpMjEJCwVBZ8Hhb-Q"}
    libraries={["geometry"]}
    >
      <MapComponent />
    </APIProvider>
  );
}

export default MapWrapper;
