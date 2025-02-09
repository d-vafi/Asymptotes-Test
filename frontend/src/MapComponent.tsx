// MapComponentInner.tsx
import React, { useContext, useEffect, useState } from "react";
import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { LocationContext } from "./components/LocationContext";

function MapComponent() {
  const { location } = useContext(LocationContext);
  const map = useMap();
  const [highlightedBuilding, setHighlightedBuilding] = useState<string | null>(null);
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  // Fetch GeoJSON data from the file
  useEffect(() => {
    fetch("/Building.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGeoJsonData(data);
      })
      .catch((error) => {
        console.error("Error loading GeoJSON data:", error);
      });
  }, []);
  

  // Load GeoJSON data onto the map and check user location
  useEffect(() => {
    if (map && location && geoJsonData) {
      const dataLayer = new google.maps.Data();
      dataLayer.addGeoJson(geoJsonData);

      dataLayer.setStyle({
        fillColor: "blue",
        strokeWeight: 2,
        strokeColor: "white",
        fillOpacity: 0.5,
      });

      const userLocation = new google.maps.LatLng(location.lat, location.lng);

      dataLayer.forEach((feature) => {
        const geometry = feature.getGeometry();
        if (geometry && geometry.getType() === "Polygon") {
          // Cast geometry to google.maps.Data.Polygon to access getArray()
          const polygonData = geometry as google.maps.Data.Polygon;
          const paths = polygonData.getArray().map((path) => path.getArray());
          const polygon = new google.maps.Polygon({ paths });

          if (google.maps.geometry.poly.containsLocation(userLocation, polygon)) {
            const buildingName = feature.getProperty("name") as string;
            setHighlightedBuilding(buildingName);
            dataLayer.overrideStyle(feature, {
              fillColor: "red",
              fillOpacity: 0.8,
            });
          } else {
            dataLayer.overrideStyle(feature, {
              fillColor: "blue",
              fillOpacity: 0.5,
            });
          }
        }
      });

      dataLayer.setMap(map);
    }
  }, [map, location, geoJsonData]);

  return (
    <div>
      <h2>Live Location on Map</h2>
      {location ? (
        <div style={{ height: "600px", width: "100%" }}>
          <Map
            defaultZoom={15}
            defaultCenter={{ lat: location.lat, lng: location.lng }}
          >
            <Marker position={{ lat: location.lat, lng: location.lng }} />
          </Map>
        </div>
      ) : (
        <p>Waiting for location data...</p>
      )}
      {highlightedBuilding && <p>You are inside: {highlightedBuilding}</p>}
    </div>
  );
}

export default MapComponent;
