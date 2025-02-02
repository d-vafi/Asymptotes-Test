import './App.css'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
const googleKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;



function MapComponent() {

  return (

      <APIProvider apiKey={googleKey} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
      defaultZoom={17}
      defaultCenter={ { lat: 45.497213, lng: -73.578616 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
      </Map>
      </APIProvider>

  );
}

export default MapComponent