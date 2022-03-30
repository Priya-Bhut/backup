import React, { useEffect, useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Modal, Button } from 'react-bootstrap';
import workFlow from '../../images/workflow.png';

function SelectSequenceModal(props) {
  const { openSequence } = props;
  const [percentage, setPercentage] = useState([0]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [percentageTotal, setPercentageTotal] = useState([]);
  const [addMilestones, setAddMileStones] = useState([
    {
      id: '1',
      milestoneName: '',
    },
  ]);
  useEffect(() => {
    handleSum();
  }, [percentage]);

  const [data, setData] = useState(addMilestones);
  const reorder = (data, startIndex, endIndex) => {
    const result = Array.from(data);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setData(result);
  };

  const onEnd = (result) => {
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
      let deleteTotal = [...percentageTotal];
      let deletePercentage = [...percentage];
      let index = deleteData.findIndex((item) => item.id === id);
      deleteTotal.splice(index, 1);
      deletePercentage.splice(index, 1);
      deleteData.splice(index, 1);
      setPercentage(deletePercentage);
      setPercentageTotal(deleteTotal);
      setAddMileStones(deleteData);
    }
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    let changeData = [...addMilestones];
    let percentData = [...percentage];
    let index = changeData.findIndex((item) => item.id === id);
    name === 'Milestone-name'
      ? (changeData[index].milestoneName = value)
      : (percentData[index] = value < 101 && value > 0 && value);
    setAddMileStones(changeData);
    setPercentage(percentData);
  };

  const handleSum = () => {
    const Total = [...percentageTotal];
    for (let j = 0; j < percentage.length; j++) {
      let total = 0;
      for (let i = 0; i <= j; i++) {
        total += parseInt(percentage[i]);
      }
      Total[j] = total;
      total >= 100 ? setButtonDisable(true) : setButtonDisable(false);
    }
    setPercentageTotal(Total);
  };
  const sequenceSet = (e) => {
    props?.setSequenceName(e.target.value);
  };

  const handleData = () => {
    let percentageData = [...addMilestones];
    percentageData.push(percentageTotal);
    props?.setSequence(percentageData);
    props?.setOpenSequence(!openSequence);
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
              <input
                type='text'
                name='sequencename'
                placeholder='Sequence Name'
                onChange={(e) => sequenceSet(e)}
                required
              ></input>
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

          <div>
            <DragDropContext onDragEnd={onEnd}>
              <Droppable droppableId='droppable'>
                {(provided) => (
                  <div ref={provided.innerRef}>
                    {addMilestones?.map((item, index) => (
                      <Draggable draggableId={item.id} key={item.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className='milestone'>
                              <img src={workFlow} alt='images' className='workflowimg'></img>
                              <i className='fas fa-ellipsis-v'></i>
                              <input
                                type='text'
                                name='Milestone-name'
                                placeholder='Milestone Name'
                                onChange={(e) => handleChange(e, item.id)}
                              ></input>
                              <div className='milestone2-box'>
                                <input
                                  type='number'
                                  name='current-percentage'
                                  onBlur={handleSum}
                                  onChange={(e) => handleChange(e, item.id)}
                                  disabled={`${index === 0 ? 'percentageinput' : ''}`}
                                  value={`${index === 0 ? '0' : percentage[index]}`}
                                ></input>
                                <i className='fas fa-percentage unit'></i>
                              </div>
                              <div className='milestone2-box'>
                                <input
                                  type='number'
                                  name='sum-percentage'
                                  value={`${index === 0 ? '0' : percentageTotal[index]}`}
                                  disabled
                                ></input>
                                <i className='fas fa-percentage unit'></i>
                              </div>
                              <i
                                onClick={() => deleteMileStoneSequence(item.id)}
                                className={`fa fa-times fa-lg  ${
                                  index === 0 ? 'nodeletemilestone' : 'deletemilestone'
                                }`}
                              ></i>
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
          </div>
          {buttonDisable && (
            <div className='milestoneerrormsg'>
              <i className='fa fa-exclamation-triangle'></i>
              <span> Cumulative % reached 100%. Reduce it to add milestones. </span>
            </div>
          )}
          {buttonDisable ? (
            <i className='fas fa-plus-circle fa-2x addMilestone'></i>
          ) : (
            <i
              className='fas fa-plus-circle fa-2x addMilestone'
              onClick={addMileStoneSequence}
              disabled={buttonDisable}
            ></i>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleData}>
            Add
          </Button>
          <Button variant='secondary' onClick={() => props?.setSelectSequence(!selectSequence)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectSequenceModal;
