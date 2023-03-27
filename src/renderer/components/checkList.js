import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { Button, ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function CheckList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseConfirm = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

    return (
<>            <Button variant="dark"
                onClick={handleShow}><FontAwesomeIcon icon={faListCheck} color="white"/>
            </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Check List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
            <Form>
            <ListGroup.Item><Form.Check type="checkbox" label="Hardware: Props mounted correctly and secured?" /></ListGroup.Item>
            <ListGroup.Item><Form.Check type="checkbox" label="Battery: Connector firmly plugged in/locked?" /></ListGroup.Item>
            <ListGroup.Item><Form.Check type="checkbox" label="Wind and Weather: Within Flight Envelope?" /></ListGroup.Item>
            <ListGroup.Item><Form.Check type="checkbox" label="Flight Area: Clear of People and Obstacles?" /></ListGroup.Item>
            </Form>
        </ListGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>

    )
}

export default CheckList