import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseConfirm = () => {
    ArmDrone();
    setShow(false);
  }
  const handleShow = () => setShow(true);

    return (
<>            <Button variant="dark"
                onClick={handleShow}><FontAwesomeIcon icon={faPlay} color="white"/>
            </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Arm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm to arm Drone. Motors will start spinning!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleCloseConfirm}>
            Arm!
          </Button>
        </Modal.Footer>
      </Modal>
      </>

    )
}

export default ArmButton
