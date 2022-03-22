import React, { Component } from 'react';
// import IndividualOKRmain from './IndividualOKRmain';
import IndividualORKchild from './IndividualORKchild';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css';
import SecondHeader from './SecondHeader';
import CreateOKR from './CreateOKR';
import { getObjective } from './Action';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import SideBarToggle from '../SideBar/SideBarToggle';
import CreateKeyResult from './CreateKeyResult';

class IndividualOKR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newChild: [],
      id: 0,
      startDate: new Date(),
      endDate: new Date(),
      isActive: false,
      isNewOkr: false,
      okrs: [],
    };
  }
  addNewOkr = () => {
    this.setState({ isNewOkr: true });
  };
  closeNewOkr = () => {
    this.setState({ isNewOkr: false });
  };
  addNewChild = (id) => {
    const { newChild } = this.state;
    // const addChild = <IndividualOKRmain id={this.state.id} subChild={this.subChild} />;
    const addChild = <CreateKeyResult handleAlert={this.props?.handleAlert} id={id} />;
    this.setState({
      newChild: newChild.concat({ main: addChild, child: [] }),
      id: this.state.id + 1,
    });
  };
  subChild = (index) => {
    const { newChild } = this.state;
    const addSubChild = <IndividualORKchild />;
    newChild[index] = {
      ...newChild[index],
      child: [...newChild[index].child, addSubChild],
    };
    this.setState({
      newChild: newChild,
    });
  };
  handleCalender = (id) => {
    this.setState({ isActive: id });
  };
  handleEndDate = (date) => {
    this.setState({ endDate: date });
  };
  handleStartDate = (date) => {
    this.setState({ startDate: date });
  };

  getObjective = () => {
    this.props
      ?.getObjective()
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          this.setState({ okrs: response });
        } else {
          this.props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        this.props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };

  handleRange = (startDate, endDate) => {
    this.setState({ startDate: new Date(startDate), endDate: new Date(endDate) });
  };

  componentDidMount = () => {
    this.getObjective();
  };
  render() {
    const { isNewOkr, startDate, endDate, okrs } = this.state;

    return (
      <>
        <SecondHeader addNewOkr={this.addNewOkr} />
        <div className='main'>
          {isNewOkr && (
            <CreateOKR
              closeNewOkr={this.closeNewOkr}
              handleAlert={this.props.handleAlert}
              getObjective={this.getObjective}
            />
          )}
          {okrs?.map((okr) => {
            return (
              <div className='mainOKR' key={okr?.id}>
                <div className='parent'>
                  <div className='all-content'>
                    <div className='name-tree'>
                      <i className='fa fa-dot-circle-o treeConnectorDot'></i> <span>{okr.name}</span>
                      <div className='addChild-btn'>
                        <i className='fa fa-plus-circle' onClick={() => this.addNewChild(okr?.id)}>
                          Add New Key Result
                        </i>
                      </div>
                      <div className='note-alignment'>
                        <div className='notes'>
                          <i className='fa fa-sticky-note'></i>
                        </div>
                        <div className='alignment'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='white'
                            width='20'
                            height='20'
                          >
                            <path
                              d='M1.5,12.9H5.7m14,0h4.2m-13,0h3.5M8.5,7h0a2.3,2.3,0,0,1,2.3,2.3v7.5a2.3,2.3,0,0,1-2.3,2.3h0a2.3,2.3,0,0,1-2.3-2.3V9.3A2.3,2.3,0,0,1,8.5,7ZM17,1h0a2.3,2.3,0,0,1,2.3,2.3V21.5A2.3,2.3,0,0,1,17,23.8h0a2.3,2.3,0,0,1-2.3-2.3V3.3A2.3,2.3,0,0,1,17,1Z '
                              transform='translate(-0.5) '
                              fill='none '
                              stroke='currentcolor'
                              strokeLinecap='round '
                              strokeMiterlimit='10 '
                              strokeWidth='1.5'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className='date-time'>
                      <div className='calender'>
                        <i className='fa fa-calendar-alt' onClick={() => this.handleCalender(okr?.id)}></i>
                        {this.state.isActive === okr.id && (
                          <Calendar
                            handleRange={this.handleRange}
                            handleCalender={this.handleCalender}
                            handleEndDate={this.handleEndDate}
                            handleStartDate={this.handleStartDate}
                            startDate={startDate}
                            endDate={endDate}
                          />
                        )}
                      </div>
                      &nbsp;
                      <div className='user'>
                        <i className='fa fa-user-circle'></i>
                      </div>
                    </div>
                    <div className='trackSelect'></div>
                    <div className='progressBar'>
                      <div
                        className='range-slider'
                        style={{
                          min: 0,
                          max: 100,
                          step: 5,
                          value: 50,
                          textValue: '50',
                        }}
                      >
                        <input type='range' min='0' max='100' step='10' defaultValue='0' />
                        <output></output>
                      </div>
                      <span className='showRange'> 100% </span>
                      <div className='update'>
                        <i data-toggle='tooltip' title='Update' className='fa fa-pencil i-pencil' />
                        <i className='fa fa-ellipsis-h other' aria-hidden='true'></i>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.newChild.map((addChild, index) => {
                  console.log(addChild);
                  return (
                    <div className='mainSub' key={index}>
                      {addChild.main}
                      {addChild.child.map((subChild, index) => (
                        <div className='subChild' key={index}>
                          {subChild}
                        </div>
                      ))}
                    </div>
                  );
                })}
                {okr.keyResult?.map((addChild, index) => {
                  return (
                    <div key={index}>
                      {/* ---------------------------------------Child1(Main)------------------------------------------ */}
                      <div className='main-tree'></div>
                      <div className='child'>
                        <div className='all-content'>
                          <div className='connect-tree'></div>
                          <div className='child-tree'> </div>
                          <div className='name-tree1'>
                            <i className='fa fa-dot-circle-o treeConnectorDot'></i>{' '}
                            <span className='child'>{addChild.title}</span>
                            <div className='addSubChild-btn'>
                              <i className='fa fa-plus-circle' onClick={() => this.props.subChild(this.props.id)}>
                                Add New Child
                              </i>
                            </div>
                            <div className='note-alignment1'>
                              <div className='tasks'>
                                <i className='fa fa-list'></i>
                              </div>
                              <div className='notes'>
                                <i className='fa fa-sticky-note'></i>
                              </div>
                              <div className='alignment'>
                                <i className='fa fa-line-chart' aria-hidden='true'></i>
                              </div>
                            </div>
                          </div>
                          <div className='date-time'>
                            <div className='calender'>
                              <i className='fa fa-calendar-alt' onClick={this.handleCalender}></i>
                              {this.state.isActive && (
                                <Calendar
                                  handleRange={this.handleRange}
                                  handleCalender={this.handleCalender}
                                  handleEndDate={this.handleEndDate}
                                  handleStartDate={this.handleStartDate}
                                  startDate={startDate}
                                  endDate={endDate}
                                />
                              )}
                            </div>
                            &nbsp;
                            <div className='user'>
                              <i className='fa fa-user-circle'></i>
                            </div>
                          </div>
                          <div className='trackSelect' onClick={this.toggleSideBar}>
                            % Percentage Tracker
                          </div>
                          <div className='progressBar'>
                            <div className='range-slider'>
                              <input type='range' min='0' max='100' step='10' defaultValue='0' />
                            </div>
                            <span className='showRange'> 0% </span>
                            <div className='update'>
                              <i data-toggle='tooltip' title='Update' className='fa fa-pencil other' />
                              <i className='fa fa-ellipsis-h other' aria-hidden='true'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {this.state?.isOpen && (
                        <SideBarToggle setIsOpen={!this.state.isOpen} toggleSideBar={this.toggleSideBar} />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
const mapDispatchToProps = {
  getObjective,
};

export default connect(null, mapDispatchToProps)(IndividualOKR);
