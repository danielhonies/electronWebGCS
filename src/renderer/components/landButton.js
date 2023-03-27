import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


function LandDrone() {
    fetch('http://localhost:8081/land', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function LandButton() {    

    return (
        
            <Button variant="dark"
                onClick={() => LandDrone()}><FontAwesomeIcon icon={faPlaneArrival} color="white"/></Button>
        
    )
}

export default LandButton
