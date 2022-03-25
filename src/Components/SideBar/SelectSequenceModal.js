import React, { Component } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import workFlow from '../../images/workflow.png';
import { addSequencedata } from './Action';
import withRouter from '../WrapperComponents/withRouter';

class SelectSequenceModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: [0],
      buttonDisable: false,
      percentageTotal: [],
      addSequence: {
        id: 0,
        name: '',
        isSaveInTemp: true,
        isShareTemp: false,
        isSaveInSetting: false,
        milestones: [
          {
            id: 0,
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
    const result = Array.from(data);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.setState({ data: result });
  };

  onEnd = (result) => {
    this.reorder(this?.data, result.source.index, result.destination.index);
  };

  addMileStoneSequence = () => {
    let addData = [...this?.state?.addSequence?.milestones];
    let lastID = parseInt(addData[addData.length - 1].id);
    addData.push({ id: `${lastID + 1}`, name: '', carryPercentage: '', overAllPercentage: '' });
    this.setState({ addSequence: { ...this?.state?.addSequence, milestones: addData } });
  };
  deleteMileStoneSequence = (id) => {
    if (this?.state?.addSequence.milestones.length > 1) {
      let deleteData = [...this?.state?.addSequence.milestones];
      let deleteTotal = [...this?.state?.percentageTotal];
      let deletePercentage = [...this?.state?.percentage];
      let index = deleteData.findIndex((item) => item.id === id);
      deleteTotal.splice(index, 1);
      deletePercentage.splice(index, 1);
      deleteData.splice(index, 1);
      this.setState({ percentage: deletePercentage });
      this.setState({ percentageTotal: deleteTotal });
      this.setState({ addSequence: { milestones: deleteData } });
    }
  };

  handleMilestone = (e, id) => {
    const { name, value } = e?.target;
    let changeData = [...this.state.addSequence.milestones];
    let percentData = [...this.state.percentage];
    let index = changeData.findIndex((item) => item.id === id);
    name === 'name' ? (changeData[index].name = value) : (percentData[index] = value < 101 && value > 0 && value);
    switch (name) {
      case 'name':
        changeData[index].name = value;
        break;
      case 'carryPercentage':
        changeData[index].carryPercentage = value;
        this?.setState(
          { addSequence: { milestones: changeData } },
          () => (changeData[index].overAllPercentage = this?.handleSum()),
        );

        break;
      default:
        break;
    }
    this?.setState({ addSequence: { ...this.state.addSequence, milestones: changeData } });
    this?.setState({ percentage: percentData });
  };

  handleSequence = (e) => {
    const { name, value } = e?.target;
    this?.setState({ addSequence: { ...this?.state?.addSequence, [name]: value } });
    this?.props?.setSequenceName(e?.target?.value);
  };

  handleIsSaveInTemp = () => {
    this?.setState({
      addSequence: { ...this?.state?.addSequence, isSaveInTemp: !this?.state?.addSequence?.isSaveInTemp },
    });
  };

  handleIsShareTemp = () => {
    this?.setState({
      addSequence: { ...this?.state?.addSequence, isShareTemp: !this?.state?.addSequence?.isShareTemp },
    });
  };
  handleIsSaveInSetting = () => {
    this?.setState({
      addSequence: { ...this?.state?.addSequence, isSaveInSetting: !this?.state?.addSequence?.isSaveInSetting },
    });
  };

  handleSum = () => {
    const Total = [...this?.state?.percentageTotal];
    let finalTotal = 0;
    for (let j = 0; j < this?.state?.percentage?.length; j++) {
      let total = 0;
      for (let i = 0; i <= j; i++) {
        total += parseInt(this?.state?.percentage[i]);
      }
      finalTotal = total;
      Total[j] = total;
      total >= 100 ? this.setState({ buttonDisable: true }) : this.setState({ buttonDisable: false });
    }
    this?.setState({ percentageTotal: Total });
    return finalTotal;
  };

  addSequencedata = () => {
    const { params } = this.props || {};
    const { organisationUrl } = params || {};
    let percentageData = [...this?.state?.addSequence?.milestones];
    percentageData.push(this?.state?.percentageTotal);
    // this?.props?.setSequence(percentageData); //!important
    this?.props?.setOpenSequence(!this?.openSequence);
    this?.props
      ?.addSequencedata(this?.state?.addSequence, organisationUrl)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          this?.props?.handleAlert('Sequence Added', 'success');
          this?.props?.getSequenceData;
        } else {
          this?.props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
        this?.props?.setSelectSequence(!this?.props?.selectSequence);
        this?.props?.setOpenSequence(!this?.props?.openSequence);
      })
      .catch((error) => {
        this?.props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };
  render() {
    return (
      <>
        <Modal
          size='xl'
          show={this?.props?.selectSequence}
          onHide={() => this?.props?.setSelectSequence(!this?.props?.selectSequence)}
        >
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
                  onChange={(e) => this?.handleSequence(e)}
                  value={this?.state?.addSequence?.name}
                  required
                ></input>
              </div>
              <div className='switch-icon'>
                <div>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      name='isSaveInTemp'
                      onChange={(e) => this?.handleIsSaveInTemp(e)}
                      value={this?.state?.addSequence?.isSaveInTemp}
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
                      onChange={(e) => this?.handleIsShareTemp(e)}
                      value={this?.state?.addSequence?.isShareTemp}
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
                      onChange={(e) => this?.handleIsSaveInSetting(e)}
                      value={this?.state?.addSequence?.isSaveInSetting}
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
                        <Draggable draggableId={item.id} key={item.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className='milestone'>
                                <img src={workFlow} alt='images' className='workflowimg'></img>
                                <i className='fas fa-ellipsis-v'></i>
                                <input
                                  type='text'
                                  name='name'
                                  placeholder='Milestone Name'
                                  onChange={(e) => this?.handleMilestone(e, item.id)}
                                  value={this?.state?.addSequence?.milestones?.name}
                                ></input>
                                <div className='milestone2-box'>
                                  <input
                                    type='number'
                                    name='carryPercentage'
                                    onBlur={this?.handleSum}
                                    onChange={(e) => this?.handleMilestone(e, item.id)}
                                    disabled={`${index === 0 ? 'percentageinput' : ''}`}
                                    value={`${index === 0 ? '0' : this?.state?.percentage[index]}`}
                                  ></input>
                                  <i className='fas fa-percentage unit'></i>
                                </div>
                                <div className='milestone2-box'>
                                  <input
                                    type='number'
                                    name='overAllPercentage'
                                    value={`${index === 0 ? '0' : this?.state?.percentageTotal[index]}`}
                                    disabled
                                  ></input>
                                  <i className='fas fa-percentage unit'></i>
                                </div>
                                <i
                                  onClick={() => this?.deleteMileStoneSequence(item.id)}
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
            <Button variant='primary' onClick={this?.addSequencedata}>
              Add
            </Button>
            <Button variant='secondary' onClick={() => this?.props?.setSelectSequence(!this?.props?.selectSequence)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapDispatchToProps = {
  addSequencedata,
};

export default connect(null, mapDispatchToProps)(withRouter(SelectSequenceModal));
