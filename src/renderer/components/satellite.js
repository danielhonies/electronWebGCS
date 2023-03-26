import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';

    

function GPSInfo() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
        GPS Count: 10
        <br />
        GPS Lock: RTK Float
        </Tooltip>
      );
    return (
        <OverlayTrigger
      placement="bottom"
      delay={{ show: 0, hide: 400 }}
      overlay={renderTooltip} 
      >
        <Button variant='dark'>
        <FontAwesomeIcon icon={faSatellite} color="white"/>
          </Button>
          </OverlayTrigger>
    )
}

export default GPSInfo