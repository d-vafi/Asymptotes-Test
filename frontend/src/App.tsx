import './App.css';
import UserLocation from './components/UserLocation';
import { LocationProvider } from './components/LocationContext';
import MapWrapper from './MapWrapper';
import BottomNavBar from './Components/BottomNavBar';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import SGWCampus from './pages/SGWCampus';
import LOYCampus from './pages/LOYCampus';

// Auth Pages
import WelcomePage from './pages/WelcomePage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import { Outlet, useLocation } from 'react-router-dom';


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

      <Routes>
        {/* Auth Routes */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/role-selection" element={<RoleSelectionPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
          </>
        ) : (
          // Campus Routes (show these only after login)
          <><LocationProvider>
          <MapWrapper />
          <UserLocation />
          
            <Route path="/LOYcampus" element={<LOYCampus />} />
            <Route path="/SGWcampus" element={<SGWCampus />} />
            </LocationProvider>
          </>
        )}
        
        {/* 404 Routes */}
        <Route path="/shuttle" element={<div>404 Not Found</div>} />
        <Route path="/directions" element={<div>404 Not Found</div>} />
        <Route path="/schedule" element={<div>404 Not Found</div>} />
      </Routes>

        </Routes>
        <div className='fixed bottom-0 w-full'>
          <BottomNavBar />
        </div>

      </>
 
      {isAuthenticated && <BottomNavBar />} {/* Only show BottomNavBar after authentication */}
    </div>
  );
}

export default App;
