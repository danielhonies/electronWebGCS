import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function DisarmDrone() {
    fetch('http://localhost:8081/disarm', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function DisarmButton() {    

    return (
      
            <Button variant="dark"
                onClick={() => DisarmDrone()}><FontAwesomeIcon icon={faStop} color="white"/></Button>
     
    )
}

export default DisarmButton
