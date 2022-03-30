import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import SelectSequenceModal from './SelectSequenceModal';

function SearchSelectSequence(props) {
  const { openSequence } = props;
  const [selectSequence, setSelectSequence] = useState(false);
  return (
    <>
      <Modal size='xl' show={openSequence} onHide={() => props?.setOpenSequence(!openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Select Sequence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequencelabel'>
            <span>Creating a new sequence</span>
            <span onClick={() => setSelectSequence(!selectSequence)}>Create new</span>
          </div>
          <hr></hr>
          <div className='sequencecard'>
            <Card className='sequencecardsdesign'>
              <Card.Header>
                <div className='cardtitle'>
                  <Card.Subtitle>Sequence Name</Card.Subtitle>
                  <i className='fa fa-solid fa-trash fa-2x btntrash'></i>
                </div>
              </Card.Header>
              <Card.Body></Card.Body>
              <Card.Footer>
                <Button className='primary'>select</Button>
              </Card.Footer>
            </Card>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => props?.setOpenSequence(!openSequence)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => props?.setOpenSequence(!openSequence)}>
            Add
          </Button>

          <div>
            {selectSequence && (
              <SelectSequenceModal
                setSelectSequence={setSelectSequence}
                selectSequence={selectSequence}
                setSequenceName={props?.setSequenceName}
                setOpenSequence={props?.setOpenSequence}
                openSequence={openSequence}
              />
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchSelectSequence;
