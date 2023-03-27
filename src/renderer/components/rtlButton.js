import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function RTLDrone() {
    fetch('http://localhost:8081/returnToLaunch', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function RTLButton() {    

    return (
        
            <Button variant="dark"
                onClick={() => RTLDrone()}><FontAwesomeIcon icon={faHelicopterSymbol} color="white"/></Button>
        
    )
}

export default RTLButton
