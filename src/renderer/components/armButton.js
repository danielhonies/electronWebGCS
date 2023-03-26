import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const Button = styled.button`
  color: darkred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

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
        <div>
            <Button
                onClick={() => ArmDrone()}><FontAwesomeIcon icon={faPlay} color="black"/></Button>
        </div>
    )
}

export default ArmButton
