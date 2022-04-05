import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ChromePicker } from 'react-color';

function AddTagModal(props) {
  const { isAddTagOpen } = props;
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [color, setColor] = useState('#fff');
  const openColorBox = () => {
    setIsColorPicker(!isColorPicker);
  };

  return (
    <Modal className='setmodal' show={isAddTagOpen} onHide={() => props?.setAddTagOpen()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span>Add Tag</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='tagmodal-body'>
        <div className='displaycolor'>
          <span>Color</span>
          <div className='input-group'>
            <input type='color'></input>
            <input type='text' id='tag' onClick={() => openColorBox()} value={color}></input>
          </div>
        </div>
        <div className='tagcolor'>
          <span>Tag Color</span>
          <input type='text' id='tag' placeholder='Tag Name'></input>
        </div>

        {/* <ChromePicker /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={() => props?.handleAddSequenceModal()}>
          Add
        </Button>
        <Button variant='secondary' onClick={() => props?.setAddTagOpen()}>
          Cancel
        </Button>
      </Modal.Footer>
      {isColorPicker && (
        <ChromePicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} className='chromepicker' />
      )}
    </Modal>
  );
}

export default AddTagModal;
