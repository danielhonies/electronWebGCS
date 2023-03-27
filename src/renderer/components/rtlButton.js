import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';



function RTLButton() {    

    return (
        
            <Button variant="dark"
                onClick={() => LandDrone()}><FontAwesomeIcon icon={faHelicopterSymbol} color="white"/></Button>
        
    )
}

export default RTLButton
