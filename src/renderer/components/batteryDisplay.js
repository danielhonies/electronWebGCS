import BatteryGauge from 'react-battery-gauge'
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



    

function BatteryDisplay() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
        Cell Voltage 1: 3.7V
        <br />
        Cell Voltage 2: 3.7V
        </Tooltip>
      );
    return (
        <OverlayTrigger
      placement="bottom"
      delay={{ show: 0, hide: 400 }}
      overlay={renderTooltip} 
      >
        <Button variant='dark'>
        <BatteryGauge value={40} size={70} animated={true} customization={{ batteryMeter: {
            noOfCells: 10
          }, readingText: {darkContrastColor:'#111', fontSize: 16},
        batteryBody: {
            strokeColor: 'silver',
            fill: 'silver'
        },
        batteryCap: {
            capToBodyRatio: 0.4,
            cornerRadius: 3,
            fill: 'silver',
            strokeColor: 'silver'
          },}} />
          </Button>
          </OverlayTrigger>
    )
}

export default BatteryDisplay