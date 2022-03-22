import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function LogOut(props) {
  const { isOpen } = props;
  return (
    <Modal show={isOpen} onHide={() => props?.setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to logout?</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => props?.setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant='primary' className='brilCrmButton' onClick={props?.handleLogout}>
          Yup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogOut;
