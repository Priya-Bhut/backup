import React, { /* useEffect, */ useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SelectSequenceModal from './SelectSequenceModal';

function SearchSelectSequence(props) {
  const { openSequence } = props;
  const [selectSequence, setSelectSequence] = useState(false);

  return (
    <>
      <Modal show={openSequence} onHide={() => props?.setOpenSequence(!openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Select Sequence</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequencelabel'>
            <span>Creating a new sequence</span>
            <Button variant='primary' onClick={() => setSelectSequence(!selectSequence)}>
              {props?.sequenceName}
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setSelectSequence(!selectSequence)}>
            Create new
          </Button>
          <Button variant='secondary' onClick={() => props?.setOpenSequence(!openSequence)}>
            Cancel
          </Button>
          <div>
            {selectSequence && (
              <SelectSequenceModal
                handleAlert={props?.handleAlert}
                setSelectSequence={setSelectSequence}
                selectSequence={selectSequence}
                setSequenceName={props?.setSequenceName}
                setOpenSequence={props?.setOpenSequence}
                openSequence={openSequence}
                setSequence={props?.setSequence}
                getSequenceData={props?.getSequenceData}
              />
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchSelectSequence;
