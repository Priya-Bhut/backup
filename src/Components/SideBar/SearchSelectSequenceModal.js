import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SelectSequenceModal from './SelectSequenceModal';
//import 'bootstrap/dist/css/bootstrap.min.css';

function SearchSelectSequence(props) {
  const { openSequence, setOpenSequence } = props;
  const [selectSequence, setSelectSequence] = useState(false);
  // console.log(props);
  return (
    <>
      <Modal show={openSequence} onHide={() => setOpenSequence(!openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Search & Select Sequence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequence'>
            <span> Creating a New open Sequence</span>
          </div>
          <Button variant='primary' onClick={() => setSelectSequence(!selectSequence)}>
            Create
          </Button>
          <div>
            {selectSequence && (
              <SelectSequenceModal setSelectSequence={setSelectSequence} selectSequence={selectSequence} />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setOpenSequence(!openSequence)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchSelectSequence;
