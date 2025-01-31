import '../App.css'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';


export default function LOYcampus() {

    return (
    
          <APIProvider apiKey={'AIzaSyAPgHpIwr-Vnr275tWrE40Mfiu7mXxpc8s'} onLoad={() => console.log('LOY Maps API has loaded.')}>
          <Map
          defaultZoom={17}
          // 45.45813875411042, -73.6390888797903
          defaultCenter={ { lat: 45.45813875411042, lng: -73.6390888797903 } }
          onCameraChanged={ (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
          </Map>
          </APIProvider>
    
        
      ); 
}