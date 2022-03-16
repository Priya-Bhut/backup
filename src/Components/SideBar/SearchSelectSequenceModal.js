import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SelectSequenceModal from './SelectSequenceModal';

function SearchSelectSequence(props) {
  const [selectSequence, setSelectSequence] = useState(false);
  return (
    <>
      <Modal show={props?.openSequence} onHide={() => props?.setOpenSequence(!props?.openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Select Sequence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequenceLabel'>
            <span>Creating a New Sequence</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => props?.setOpenSequence(!props?.openSequence)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => setSelectSequence(!selectSequence)}>
            Create New
          </Button>
          <div>
            {selectSequence && (
              <SelectSequenceModal setSelectSequence={setSelectSequence} selectSequence={selectSequence} />
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchSelectSequence;
