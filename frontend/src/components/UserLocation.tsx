import React, { useEffect, useState } from "react";

interface Location {
  lat: number;
  lng: number;
}

function UserLocation() {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        const success = (position: GeolocationPosition) => {
            const { latitude, longitude, accuracy } = position.coords;

            console.log(`New Location Fetched: Lat: ${latitude}, Lng: ${longitude}, Accuracy: ${accuracy} meters`);

            if (accuracy > 50) {
                console.warn("Skipping inaccurate data.");
                return;
            }

            setLocation({
                lat: latitude,
                lng: longitude,
            });
            setError(null);
        };

        const error = (err: GeolocationPositionError) => {
            setError("Failed to get location. Please allow access and try later.");
            console.error(err);
        };

      
        const id = navigator.geolocation.watchPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
        });

        return () => {
            navigator.geolocation.clearWatch(id);
            console.log("Stopped watching location.");
        };
    }, []);

    return (
        <div>
            <h2>Your Location</h2>
            {error ? (
                <p>{error}</p>
            ) : location ? (
                <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
            ) : (
                <p>Fetching your location</p>
            )}
        </div>
    );
}

export default UserLocation;

