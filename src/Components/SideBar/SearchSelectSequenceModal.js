import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SelectSequenceModal from './SelectSequenceModal';

function SearchSelectSequence(props) {
  const { openSequence } = props;
  const [selectSequence, setSelectSequence] = useState(false);
  return (
    <>
      <Modal show={openSequence} onHide={() => props?.setOpenSequence(!openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Select Sequence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequencelabel'>
            <span>Creating a new sequence</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => props?.setOpenSequence(!openSequence)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => setSelectSequence(!selectSequence)}>
            Create new
          </Button>
          <div>
            {selectSequence && (
              <SelectSequenceModal
                setSelectSequence={setSelectSequence}
                selectSequence={selectSequence}
                setSequenceName={props?.setSequenceName}
                setOpenSequence={props?.setOpenSequence}
                openSequence={openSequence}
                setSequence={props?.setSequence}
              />
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchSelectSequence;
