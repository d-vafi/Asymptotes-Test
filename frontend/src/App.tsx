import './App.css'
import MapComponent from './MapComponent';
//might need to correct this to SGWcampus (vscode causes problems with the file name)
import SGWCampus from './pages/SGWCampus';
import LOYCampus from './pages/LOYCampus';

import BottomNavBar from './BottomNavBar';
import NavBar from './NavBar';



function App() {
  return (
    <div className="flex flex-col top-0 left-0 w-screen h-screen">
      <NavBar />
      {/* // The div needs a constant height and width to display the map*/}
      <div style={{ height: '86vh', width: '100vw' }}>
        
      <SGWCampus/>
      <LOYCampus/>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default App