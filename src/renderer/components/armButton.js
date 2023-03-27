import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function ArmDrone() {
    fetch('http://localhost:8081/arm', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function ArmButton() {

    return (
     
            <Button variant="dark"
                onClick={() => ArmDrone()}><FontAwesomeIcon icon={faPlay} color="white"/></Button>
        
    )
}

export default ArmButton
