import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
    

function RSSIInfo() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
        RSSI: RC Data unavailable
        </Tooltip>
      );
    return (
        <OverlayTrigger
      placement="bottom"
      delay={{ show: 0, hide: 400 }}
      overlay={renderTooltip} 
      >
        <Button variant='dark'  >
        <FontAwesomeIcon icon={faGamepad} color="white"/>
        <FontAwesomeIcon icon={faSignal} color="white"/>
          </Button>
          </OverlayTrigger>
    )
}

export default RSSIInfo