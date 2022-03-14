import { Modal, Button } from 'bootstrap';
import React from 'react';

function SelectSequenceModal(props) {
  const { selectSequence, setSelectSequence } = props;

  return (
    <>
      <Modal show={selectSequence} onHide={() => setSelectSequence(!selectSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Search & Select Sequence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequence'>
            <span> Creating a New open Sequence</span>
          </div>
          <Button variant='primary'>Create New</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setSelectSequence(!selectSequence)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectSequenceModal;
