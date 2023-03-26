import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ArmButton from './components/armButton';
import DisarmButton from './components/disarmButton';
import TakeoffButton from './components/takeoffButton';
import LandButton from './components/landButton';
import GpsCoords from './components/gpsCoords';
import Indicators from './components/indicators';
import Hud from './components/hud';




function FlightView() {
  return (
    <div>
      <div className="FlightView">
        <GpsCoords/>
        <div id='buttons'>
        <ArmButton />
        <DisarmButton/>
        <TakeoffButton/>
        <LandButton/>
        </div>
        <Indicators/>
        {/* <Hud/> */}

      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightView />} />
      </Routes>
    </Router>
  );
}
