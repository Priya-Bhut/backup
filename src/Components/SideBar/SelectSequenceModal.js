import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Modal, Button } from 'react-bootstrap';

import workFlow from '../../images/workflow.png';

function SelectSequenceModal(props) {
  const [addMilestones, setAddMileStones] = useState([
    {
      id: '1',
      milestoneName: '',
      percentage: '',
    },
  ]);
  // const addmile = [
  //   {
  //     id: '1',
  //     milestoneName: '',
  //   },
  // ];
  const [data, setData] = useState(addMilestones);
  const reorder = (data, startIndex, endIndex) => {
    const result = Array.from(data);
    console.log(result);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setData(result);
  };

  const onEnd = (result) => {
    console.log(result);
    reorder(data, result.source.index, result.destination.index);
  };

  const { selectSequence } = props;
  const addMileStoneSequence = () => {
    let addData = [...addMilestones];
    let lastID = parseInt(addData[addData.length - 1].id);
    addData.push({ id: `${lastID + 1}`, milestoneName: '', percentage: '' });
    setAddMileStones(addData);
  };
  const deleteMileStoneSequence = (id) => {
    if (addMilestones.length > 1) {
      let deleteData = [...addMilestones];
      let index = deleteData.findIndex((item) => item.id === id);
      deleteData.splice(index, 1);
      setAddMileStones(deleteData);
    }
  };
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    let changeData = [...addMilestones];
    let index = changeData.findIndex((item) => item.id === id);
    name === 'Milestone-name'
      ? (changeData[index].milestoneName = value)
      : (changeData[index].percentage = value < 101 && value > 0 && value);
    setAddMileStones(changeData);
  };

  return (
    <>
      <Modal size='xl' show={selectSequence} onHide={() => props?.setSelectSequence(!selectSequence)}>
        <Modal.Header closeButton>
          <Modal.Title> Select Sequence</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='sequence-main'>
            <div className='sequence'>
              <input type='text' name='name' placeholder='Sequence Name'></input>
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

          {addMilestones?.map((index123, abc) => (
            <div key={index123.id}>
              <div className='milestone'>
                <DragDropContext onDragEnd={onEnd}>
                  <Droppable droppableId='droppable'>
                    {(provided) => (
                      <div ref={provided.innerRef}>
                        {addMilestones.map((item, index) => (
                          <Draggable draggableId={item.id} key={item.id} index={index}>
                            {(provided) => (
                              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <div>
                                  <img src={workFlow} alt='images' className='workflowimg'></img>
                                  <i className='fas fa-ellipsis-v'></i>
                                  <input
                                    type='text'
                                    name='Milestone-name'
                                    placeholder='Milestone Name'
                                    onChange={(e) => handleChange(e, index123.id)}
                                  ></input>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>

                <div className='milestone2-box'>
                  <input
                    type='number'
                    name='current-percentage'
                    onChange={(e) => handleChange(e, index123.id)}
                    disabled={`${abc === 0 ? 'percentageinput' : ''}`}
                    value={`${abc === 0 ? '0' : index123.percentage}`}
                  ></input>
                  <i className='fas fa-percentage unit'></i>
                </div>
                <div className='milestone2-box'>
                  <input type='number' name='' value={`${abc === 0 ? '0' : ''}`} disabled></input>
                  <i className='fas fa-percentage unit'></i>
                </div>
                <i
                  onClick={() => deleteMileStoneSequence(index123.id)}
                  className={`fa fa-times fa-lg  ${abc === 0 ? 'nodeletemilestone' : 'deletemilestone'}`}
                ></i>
              </div>
            </div>
          ))}
          <i className='fas fa-plus-circle fa-2x addMilestone' onClick={addMileStoneSequence}></i>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => props?.setSelectSequence(!selectSequence)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectSequenceModal;
