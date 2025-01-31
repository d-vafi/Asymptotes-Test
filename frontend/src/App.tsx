import './App.css'
import MapComponent from './MapComponent';
//might need to correct this to SGWcampus (vscode causes problems with the file name)
import SGWCampus from './pages/SGWCampus';
import LOYCampus from './pages/LOYCampus';




function App() {
 

  return (
        // The div needs a constant height and width to display the map
      <div style={{height: '85vh', width: '75vw'}}>
        
      <SGWCampus/>
      <LOYCampus/>
      </div>
  );
}

export default App