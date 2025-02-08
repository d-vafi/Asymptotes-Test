import './App.css';

import BottomNavBar from './Components/BottomNavBar';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import MapComponent from './Components/MapComponent';

function App() {
  return (
    <div className="flex flex-col top-0 left-0 w-screen h-screen">
      <>
        <NavBar />
        <Routes>

          <Route path="/map"
            element={
              // <div style={{ height: '86vh', width: '100vw' }}>
              <MapComponent />}
          // </div>}
          />
          <Route path="/shuttle" element={<div className='flex justify-center items-center h-full'>404 Not Found</div>} />
          <Route path="/directions" element={<div className='flex justify-center items-center h-full'>404 Not Found</div>} />
          <Route path="/schedule" element={<div className='flex justify-center items-center h-full'>404 Not Found</div>} />

        </Routes>
        <div className='fixed bottom-0 w-full'>
          <BottomNavBar />
        </div>

      </>
    </div>
  );
}
export default App