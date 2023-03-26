import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BatteryDisplay from './batteryDisplay'
import GPSInfo from './satellite';
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">GCS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Flight Mode" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Stabilized</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Altitude
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" active>Position</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Mission
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <GPSInfo />
        <BatteryDisplay />
      </Container>
    </Navbar>
  );
}

export default NavBar;