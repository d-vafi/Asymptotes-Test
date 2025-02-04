import './App.css'
import MapComponent from './MapComponent';
import BottomNavBar from './BottomNavBar';
import NavBar from './NavBar';



function App() {
  return (
    <div className="flex flex-col top-0 left-0 w-screen h-screen">
      <NavBar />
      {/* // The div needs a constant height and width to display the map*/}
      <div style={{ height: '86vh', width: '100vw' }}>
        <MapComponent />
      </div>

      <BottomNavBar />
    </div>
  );
}

export default App