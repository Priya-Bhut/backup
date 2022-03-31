import React, { Component } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import workFlow from '../../images/workflow.png';
import { addSequenceData, updateSequenceData } from './Action';
import withRouter from '../WrapperComponents/withRouter';
import { size, trim } from 'lodash';

class SelectSequenceModal extends Component {
  constructor(props) {
    super(props);
    const { updateData } = this?.props;
    this.state = {
      buttonDisable: false,
      addSequence: {
        id: updateData?.id || 0,
        name: updateData?.name || '',
        isSaveInTemp: updateData?.isSaveInTemp || false,
        isShareTemp: updateData?.isShareTemp || false,
        isSaveInSetting: updateData?.isSaveInSetting || false,
        milestones: updateData?.milestones || [
          {
            mileId: 1,
            name: '',
            carryPercentage: 0,
            overAllPercentage: 0,
          },
        ],
      },
    };
    this.data = this?.state?.addSequence;
  }

  reorder = (data, startIndex, endIndex) => {
    if (endIndex !== 0 && startIndex !== 0) {
      const result = data?.milestones;
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      this.setState({ data: result });
      this.handleSum();
    }
  };

  onEnd = (result) => {
    this.reorder(this?.state?.addSequence, result.source.index, result.destination.index);
  };

  addMileStoneSequence = () => {
    let addData = [...this?.state?.addSequence?.milestones];
    let lastID = parseInt(addData[addData.length - 1].mileId);
    addData.push({
      mileId: `${lastID + 1}`,
      name: '',
      carryPercentage: 0,
      overAllPercentage: addData[addData.length - 1].overAllPercentage,
    });
    this.setState({ addSequence: { ...this?.state?.addSequence, milestones: addData } });
  };

  deleteMileStoneSequence = (id) => {
    if (this?.state?.addSequence.milestones.length > 1) {
      let deleteData = [...this?.state?.addSequence.milestones];
      let index = deleteData.findIndex((item) => item.mileId === id);
      deleteData.splice(index, 1);
      this.setState({ addSequence: { ...this?.state?.addSequence, milestones: deleteData } }, () => this.handleSum());

      //  this.handleSum();
    }
  };

  handleMilestone = (e, id) => {
    const { name, value } = e?.target;
    let changeData = [...this.state.addSequence.milestones];
    let index = changeData.findIndex((item) => item.mileId === id);

    name === 'name'
      ? (changeData[index].name = value)
      : (changeData[index].carryPercentage = value < 101 && value > 0 && value);

    switch (name) {
      case 'name':
        changeData[index].name = value;
        break;

      case 'carryPercentage':
        changeData[index].carryPercentage = value;
        this?.setState({ addSequence: { milestones: changeData } }, this?.handleSum(index));
        break;

      default:
        break;
    }
    this?.setState({ addSequence: { ...this.state.addSequence, milestones: changeData } });
  };

  handleChaneData = (e) => {
    const { name, value, checked } = e?.target;
    name == 'name'
      ? this?.setState({ addSequence: { ...this?.state?.addSequence, [name]: value } })
      : this?.setState({ addSequence: { ...this?.state?.addSequence, [name]: checked } });
  };

  handleSum = () => {
    let milestoneData = [...this?.state?.addSequence?.milestones];
    const Total = milestoneData?.map((percentage) => percentage.carryPercentage);
    let total = 0;
    for (let j = 0; j < Total.length; j++) {
      total = parseInt(total) + parseInt(Total[j]);
      milestoneData[j].overAllPercentage = total;
    }
    total >= 100 ? this.setState({ buttonDisable: true }) : this.setState({ buttonDisable: false });
    this.setState({
      addSequence: {
        ...this.state.addSequence,
        milestones: milestoneData,
      },
    });
  };

  validation = () => {
    const { addSequence } = this.state;
    const { milestones } = addSequence;
    if (trim(addSequence.name) === '') {
      this?.props?.handleAlert('Please Enter Sequence Name', 'error');
      return false;
    } else if (size(milestones)) {
      for (let index = 0; index < milestones.length; index++) {
        if (trim(milestones[index].name) === '') {
          this?.props?.handleAlert('Please Enter All Milestone Names', 'error');
          return false;
        }
        if (index === milestones.length - 1) {
          if (milestones[index].overAllPercentage > 100) {
            this?.props?.handleAlert('OverAll percentage should be maximum 100% only', 'error');
            return false;
          } else if (milestones[index].overAllPercentage < 100) {
            this?.props?.handleAlert('OverAll percentage must be 100% only', 'error');
            return false;
          }
        }
      }
    }
    return true;
  };

  addSequenceData = () => {
    const { params, updateData } = this.props || {};
    const { organisationUrl } = params || {};
    const validate = this.validation();
    if (validate) {
      !(size(updateData) > 0)
        ? this?.props
            ?.addSequenceData(this?.state?.addSequence, organisationUrl)
            .then((response) => {
              if (response && !response?.errorMessage && !response?.error) {
                this?.props?.handleAlert('Sequence Added', 'success');
                this?.props?.handleAddSequenceModal();
                this?.props?.getSequenceData();
                // this?.props?.setOpenSequence(!this?.props?.openSequence);
              } else {
                this?.props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
              }
              // this?.props?.setOpenSequence(!this?.props?.openSequence);
            })
            .catch((error) => {
              this?.props?.handleAlert(error?.message || 'Something went wrong', 'error');
            })
        : this?.props
            ?.updateSequenceData(this?.state?.addSequence, organisationUrl)
            .then((response) => {
              if (response && !response?.errorMessage && !response?.error) {
                this?.props?.handleAlert('Sequence Updated', 'success');
                this?.props?.handleAddSequenceModal();
                this?.props?.getSequenceData();
                // this?.props?.setOpenSequence(!this?.props?.openSequence);
              } else {
                this?.props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
              }
              // this?.props?.setOpenSequence(!this?.props?.openSequence);
            })
            .catch((error) => {
              this?.props?.handleAlert(error?.message || 'Something went wrong', 'error');
            });
    }
  };
  render() {
    return (
      <>
        <Modal size='xl' show={this?.props?.selectSequence} onHide={() => this?.props?.handleAddSequenceModal()}>
          <Modal.Header closeButton>
            <Modal.Title> Select Sequence</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='sequence-main'>
              <div className='sequence'>
                <input
                  type='text'
                  name='name'
                  placeholder='Sequence Name'
                  onChange={this.handleChaneData}
                  value={this?.state?.addSequence?.name || ''}
                  required
                ></input>
              </div>
              <div className='switch-icon'>
                <div>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      name='isSaveInTemp'
                      onChange={this.handleChaneData}
                      value={this?.state?.addSequence?.isSaveInTemp || true}
                      checked={this?.state?.addSequence?.isSaveInTemp}
                    />
                    <span className='slider round'> </span>
                  </label>
                  <span className='switch-label'> Save as a Template</span>
                </div>
                <div>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      name='isShareTemp'
                      onChange={this.handleChaneData}
                      value={this?.state?.addSequence?.isShareTemp || false}
                      checked={this?.state?.addSequence?.isShareTemp}
                    />
                    <span className='slider round'> </span>
                  </label>
                  <span className='switch-label'>Share Template</span>
                </div>
                <div>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      name='isSaveInSetting'
                      onChange={this.handleChaneData}
                      value={this?.state?.addSequence?.isSaveInSetting || false}
                      checked={this?.state?.addSequence?.isSaveInSetting}
                    />
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
              <DragDropContext onDragEnd={this.onEnd}>
                <Droppable droppableId='droppable'>
                  {(provided) => (
                    <div ref={provided.innerRef}>
                      {this?.state?.addSequence?.milestones?.map((item, index) => (
                        <Draggable draggableId={`${item?.mileId}`} key={item?.mileId} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className='milestone'>
                                <img src={workFlow} alt='images' className='workflowimg'></img>
                                <i className='fas fa-ellipsis-v'></i>
                                <input
                                  type='text'
                                  name='name'
                                  placeholder='Milestone Name'
                                  onChange={(e) => this?.handleMilestone(e, item.mileId)}
                                  value={item?.name || ''}
                                ></input>
                                <div className='milestone2-box'>
                                  <input
                                    type='number'
                                    name='carryPercentage'
                                    onChange={(e) => this?.handleMilestone(e, item.mileId)}
                                    disabled={`${index === 0 ? 'percentageinput' : ''}`}
                                    value={item?.carryPercentage}
                                  ></input>
                                  <i className='fas fa-percentage unit'></i>
                                </div>
                                <div className='milestone2-box'>
                                  <input
                                    type='number'
                                    name='overAllPercentage'
                                    value={item?.overAllPercentage}
                                    disabled
                                  ></input>
                                  <i className='fas fa-percentage unit'></i>
                                </div>
                                <i
                                  onClick={() => this?.deleteMileStoneSequence(item.mileId)}
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
            {this?.state?.buttonDisable && (
              <div className='milestoneerrormsg'>
                <i className='fa fa-exclamation-triangle'></i>
                <span> Cumulative % reached 100%. Reduce it to add milestones. </span>
              </div>
            )}
            {this?.state?.buttonDisable ? (
              <i className='fas fa-plus-circle fa-2x addMilestone'></i>
            ) : (
              <i
                className='fas fa-plus-circle fa-2x addMilestone'
                onClick={this?.addMileStoneSequence}
                disabled={this?.state?.buttonDisable}
              ></i>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={this?.addSequenceData}>
              {!size(this?.props?.updateData) > 0 ? 'Add' : 'Update'}
            </Button>
            <Button variant='secondary' onClick={this?.props?.handleAddSequenceModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapDispatchToProps = {
  addSequenceData,
  updateSequenceData,
};

export default connect(null, mapDispatchToProps)(withRouter(SelectSequenceModal));
