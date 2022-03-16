import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import workFlow from '../../images/workflow.png';

function SelectSequenceModal(props) {
  const [addMilestones, setAddMileStones] = useState([]);

  const AddMileStoneSequence = () => {
    let AddData = [...addMilestones];
    AddData.push([]);
    setAddMileStones(AddData);
  };
  const DeleteMileStoneSequence = () => {
    let DeleteData = [...addMilestones];
    DeleteData.pop();
    setAddMileStones(DeleteData);
  };
  return (
    <>
      <Modal size='xl' show={props?.selectSequence} onHide={() => props?.setSelectSequence(!props?.selectSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Select Sequence</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='sequence-main'>
            <div className='sequence'>
              <input type='text' name='sequence_name' placeholder='Sequence Name'></input>
            </div>
            <div className='switch-icon'>
              <div>
                <label className='switch'>
                  <input type='checkbox' value='switch-toggle' defaultChecked />
                  <span className='slider round'> </span>
                </label>
                <span className='switch-label'> Save as a Template</span>
              </div>

              <div>
                <label className='switch'>
                  <input type='checkbox' value='switch-toggle' />
                  <span className='slider round'> </span>
                </label>
                <span className='switch-label'>Share Template</span>
              </div>
              <div>
                <label className='switch'>
                  <input type='checkbox' value='switch-toggle' />
                  <span className='slider round'> </span>
                </label>
                <span className='switch-label'> Save in settings</span>
              </div>
            </div>
          </div>
          <br></br>
          <h5>Milestones</h5>
          <hr></hr>
          <div className='milestone'>
            <img src={workFlow} alt='images' className='workflowImg'></img>
            <i className='fas fa-ellipsis-v'></i>
            <input type='text' name='Milestone-name' placeholder='Milestone Name'></input>
            <div className='milestone2-box'>
              <input type='number' name='' value='0' disabled></input>
              <i className='fas fa-percentage unit'></i>
            </div>
            <div className='milestone2-box'>
              <input type='number' name='' value='0' disabled></input>
              <div className='unit'>
                <i className='fas fa-percentage'></i>
              </div>
            </div>
            <i className='fa fa-times fa-lg noDeleteMilestone'></i>
          </div>
          {addMilestones.map((items) => (
            <>
              <div className='milestone' key={items}>
                <img src={workFlow} alt='images' className='workflowImg'></img>
                <i className='fas fa-ellipsis-v'></i>
                <input type='text' name='Milestone-name' placeholder='Milestone Name'></input>
                <div className='milestone2-box'>
                  <input type='number' name=''></input>
                  <i className='fas fa-percentage unit'></i>
                </div>
                <div className='milestone2-box'>
                  <input type='number' name=''></input>
                  <i className='fas fa-percentage unit'></i>
                </div>
                <i onClick={() => DeleteMileStoneSequence()} className='fa fa-times fa-lg deleteMilestone'></i>
              </div>
            </>
          ))}
          <i className='fas fa-plus-circle fa-2x addMilestone' onClick={() => AddMileStoneSequence()}></i>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => props?.setSelectSequence(!props?.selectSequence)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectSequenceModal;
