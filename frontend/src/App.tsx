import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar';
import BottomNavBar from './Components/BottomNavBar';

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

