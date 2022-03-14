import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css';
import SideBarToggle from '../SideBar/SideBarToggle';
export default class IndividualOKRmain extends Component {
  state = { isActive: false, isOpen: false };

  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
  }
  handleCalender = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  handleEndDate = (date) => {
    this.setState({ endDate: date });
  };
  handleStartDate = (date) => {
    this.setState({ startDate: date });
  };
  toggleSideBar = () => {
    this.setState({ isOpen: !this.state.isOpen });
    // setIsOpen((isOpen) => !isOpen);
  };

  render() {
    return (
      <div>
        {/* ---------------------------------------Child1(Main)------------------------------------------ */}
        <div className='main-tree'> </div>
        <div className='child'>
          <div className='all-content'>
            <div className='connect-tree'></div>
            <div className='child-tree'> </div>
            <div className='name-tree1'>
              <i className='fas fa-dot-circle treeConnectorDot'></i> <span className='child'>OKR Child</span>
              <div className='addSubChild-btn'>
                <i className='fa fa-plus-circle' onClick={() => this.props.subChild(this.props.id)}>
                  Add New Child
                </i>
              </div>
              <div className='note-alignment1'>
                <div className='tasks'>
                  <i className='fas fa-list'></i>
                </div>
                <div className='notes'>
                  <i className='far fa-sticky-note'></i>
                </div>
                <div className='alignment'>
                  <i className='fa fa-line-chart' aria-hidden='true'></i>
                </div>
              </div>
            </div>
            <div className='date-time'>
              <div className='calender'>
                <i className='far fa-calendar-alt' onClick={this.handleCalender}></i>
                {this.state.isActive && (
                  <div className='datePicker'>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={(date) => this.handleStartDate(date)}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      inline
                    />
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={(date) => this.handleEndDate(date)}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      minDate={this.state.startDate}
                      inline
                    />
                  </div>
                )}
              </div>{' '}
              &nbsp;
              <div className='user'>
                <i className='fas fa-user-circle'></i>
              </div>
            </div>{' '}
            <div className='trackSelect' onClick={this.toggleSideBar}>
              % Percentage Tracker
            </div>
            <div className='progress'>
              <div className='range-slider'>
                <input type='range' min='0' max='100' step='10' defaultValue='0' />{' '}
              </div>
              <span className='showRange'> 0% </span>
              <div className='update'>
                <i data-toggle='tooltip' title='Update' className='fas fa-pencil-alt i-pencil' />
                <i className='fa fa-ellipsis-h other' aria-hidden='true'></i>
              </div>
            </div>
          </div>
        </div>
        {this.state.isOpen && <SideBarToggle setIsOpen={!this.state.isOpen} toggleSideBar={this.toggleSideBar} />}
      </div>
    );
  }
}
