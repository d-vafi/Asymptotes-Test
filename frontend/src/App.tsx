
import './App.css'
import UserLocation from './components/UserLocation';
import MapComponent from './MapComponent';
import { LocationProvider } from './components/LocationContext';
import MapWrapper from './MapWrapper';


function App() {
 

  return (
    //<div className="p-4 bg-gradient-to-r from-blue-500 to-gray-700 text-white">
  <LocationProvider>
   <MapWrapper />
   <UserLocation />
   </LocationProvider>
  
  );
}

export default App
