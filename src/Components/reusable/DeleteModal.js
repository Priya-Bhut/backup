import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal(props) {
  const { isOpenDelete, modalName } = props;
  return (
    <Modal show={isOpenDelete} onHide={() => props?.setIsOpenDelete(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{`Delete ${modalName}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Are you sure you want to delete this ${modalName?.toLowerCase()}?`}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => props?.setIsOpenDelete(false)}>
          Cancel
        </Button>
        <Button variant='primary' className='brilCrmButton' onClick={props?.deleteDataById}>
          Yup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
