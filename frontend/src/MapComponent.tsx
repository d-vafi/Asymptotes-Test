import './App.css'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';



function MapComponent() {
 

  return (

      <APIProvider apiKey={'AIzaSyAlwcko-mshwhZCheZpMjEJCwVBZ8Hhb-Q'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
      defaultZoom={17}
      //defaultCenter={ { lat: -33.860664, lng: 151.208138 } } 45.494899791875476, -73.577922853963
      defaultCenter={ { lat: 45.494899791875476, lng: -73.577922853963 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
      </Map>
      </APIProvider>

    
  );
}

export default MapComponent