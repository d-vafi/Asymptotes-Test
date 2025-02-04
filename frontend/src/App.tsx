import './App.css';
//might need to correct this to SGWcampus (vscode causes problems with the file name)
import SGWCampus from './pages/SGWCampus';
import LOYCampus from './pages/LOYCampus';

import BottomNavBar from './BottomNavBar';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="flex flex-col top-0 left-0 w-screen h-screen">
      <>
        <NavBar />
        <Routes>
          <Route path="/LOYcampus"
            element={
              <div style={{ height: '86vh', width: '100vw' }}>
                <LOYCampus />
              </div>}
          />

          <Route path="/"
            element={
              <div style={{ height: '86vh', width: '100vw' }}>
                <SGWCampus />
              </div>}
          />
          <Route path="/shuttle" element={<div>404 Not Found</div>} />
          <Route path="/directions" element={<div>404 Not Found</div>} />
          <Route path="/schedule" element={<div>404 Not Found</div>} />

        </Routes>
        <BottomNavBar />
      </>
    </div>
  );
}
export default App