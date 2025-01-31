import '../App.css'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';


export default function SGWCampus() {

    return (
    
          <APIProvider apiKey={'AIzaSyAPgHpIwr-Vnr275tWrE40Mfiu7mXxpc8s'} onLoad={() => console.log('SGW Maps API has loaded.')}>
          <Map
          defaultZoom={17}
          defaultCenter={ { lat: 45.494899791875476, lng: -73.577922853963 } }
          onCameraChanged={ (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
          </Map>
          </APIProvider>
    
        
      ); 
}