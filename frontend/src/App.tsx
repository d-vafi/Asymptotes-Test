import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar';
import BottomNavBar from './Components/BottomNavBar';

import './App.css'
import UserLocation from './components/UserLocation';
import MapComponent from './MapComponent';
import { LocationProvider } from './components/LocationContext';
import MapWrapper from './MapWrapper';


function App() {
  const location = useLocation();

  //list of routes where you don’t want the NavBar/BottomNavBar
  const hideNavbarPaths = [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/verify-email',
  ];
  const isAuthRoute = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="flex flex-col top-0 left-0 w-screen h-screen">
      {!isAuthRoute && <NavBar />}
      
      <Outlet />

      {!isAuthRoute && <BottomNavBar />}
    </div>
  );
}

export default App;
    //<div className="p-4 bg-gradient-to-r from-blue-500 to-gray-700 text-white">
  <LocationProvider>
   <MapWrapper />
   <UserLocation />
   </LocationProvider>
  
  );
}

export default App
