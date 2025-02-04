import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import SGWCampus from './pages/SGWCampus';
import LOYCampus from './pages/LOYCampus';
import BottomNavBar from './BottomNavBar';

function Routing() {
    return (
        <>
            <Route path="/SGWCampus"
                element={
                    <div style={{ height: '86vh', width: '100vw' }}>
                        <SGWCampus />
                    </div>
                }
            />
            <Route path="/LOYCampus"
                element={
                    <div style={{ height: '86vh', width: '100vw' }}>
                        <LOYCampus />
                    </div>
                }
            />
        </>
    )
}

export default Routing;