import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

function TakeoffDrone() {
    fetch('http://localhost:8081/takeoff', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function TakeoffButton() {    

    return (
        
            
            <Button id="takeoff" variant="dark"
                onClick={() => TakeoffDrone()}> <FontAwesomeIcon icon={faPlaneDeparture} color="white"/></Button>
      
    )
}

export default TakeoffButton
