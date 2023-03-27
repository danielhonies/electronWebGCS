import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ArmButton from './components/armButton';
import DisarmButton from './components/disarmButton';
import TakeoffButton from './components/takeoffButton';
import LandButton from './components/landButton';
import GpsCoords from './components/gpsCoords';
import Indicators from './components/indicators';
import Hud from './components/hud';
import NavBar from './components/navBar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function FlightView() {
  return (
    <div>
      <div className="FlightView" >
        <NavBar/>
        <GpsCoords/>
        <ButtonGroup vertical id='buttons' >
          <ArmButton />
          <DisarmButton/>
          <TakeoffButton/>
          <LandButton/>
        </ButtonGroup>
       
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
