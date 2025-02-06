import './App.css';
import { useState } from 'react'; // import useState for managing authentication
import SGWCampus from './pages/SGWCampus';
import LOYCampus from './pages/LOYCampus';

// Auth Pages
import WelcomePage from './pages/WelcomePage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import BottomNavBar from './Components/BottomNavBar';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Simulate authentication state (replace with real logic later)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="flex flex-col top-0 left-0 w-screen h-screen">
      {isAuthenticated && <NavBar />}

      <Routes>
        {/* Auth Routes */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/role-selection" element={<RoleSelectionPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        ) : (
          // Campus Routes (show these only after login)
          <>
            <Route path="/LOYcampus" element={<LOYCampus />} />
            <Route path="/SGWcampus" element={<SGWCampus />} />
          </>
        )}
        
        {/* 404 Routes */}
        <Route path="/shuttle" element={<div>404 Not Found</div>} />
        <Route path="/directions" element={<div>404 Not Found</div>} />
        <Route path="/schedule" element={<div>404 Not Found</div>} />
      </Routes>

      {isAuthenticated && <BottomNavBar />} {/* Only show BottomNavBar after authentication */}
    </div>
  );
}

export default App;
