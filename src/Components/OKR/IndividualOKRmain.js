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
  handleRange = (startDate, endDate) => {
    this.setState({ startDate: new Date(startDate), endDate: new Date(endDate) });
  };
  render() {
    const { startDate, endDate } = this.state;
    return (
      <div>
        {/* ---------------------------------------Child1(Main)------------------------------------------ */}
        <div className='main-tree'> </div>
        <div className='child'>
          <div className='all-content'>
            <div className='connect-tree'></div>
            <div className='child-tree'> </div>
            <div className='name-tree1'>
              <i className='fa fa-dot-circle-o treeConnectorDot'></i> <span className='child'>OKR Child</span>
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
                  <div className='calender-main'>
                    <div className='calender-and-status'>
                      <div className='calender-header'>
                        <div className='start-header'>Start Date</div>
                        <div className='end-header'>End Date</div>
                      </div>
                      <div className='calender-actual'>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => this.handleStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          inline
                          fixedHeight
                        />
                        <div className='line-v'></div>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => this.handleEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          inline
                          fixedHeight
                        />
                      </div>
                      <div className='line-h'></div>
                      <div className='calender-date-and-confirm'>
                        <div className='calender-date'>{`${startDate.getDate()}/${startDate.getMonth()}/${startDate.getYear()} - ${endDate.getDate()}/${endDate.getMonth()}/${endDate.getYear()}`}</div>
                        <div className='calender-confirm'>
                          <button onClick={this.handleCalender}>Cancel</button>
                          <button onClick={this.handleCalender}>Apply</button>
                        </div>
                      </div>
                    </div>
                    <div className='line-v'></div>
                    <div className='calender-ranges'>
                      <div className='range-quarter'>
                        <span onClick={() => this.handleRange('1/1/22', '3/31/22')}>q1 - 2022</span>
                        <span onClick={() => this.handleRange('4/1/22', '6/30/22')}>q2 - 2022</span>
                        <span onClick={() => this.handleRange('7/1/22', '9/30/22')}>q3 - 2022</span>
                        <span onClick={() => this.handleRange('10/1/22', '12/31/22')}>q4 - 2022</span>
                      </div>
                      <div className='line-h'></div>
                      <div className='range-annual'>
                        <span onClick={() => this.handleRange('1/1/22', '12/31/22')}>annual - 2022</span>
                        <span onClick={() => this.handleRange('1/1/23', '12/31/23')}>annual - 2023</span>
                        <span onClick={() => this.handleRange('1/1/24', '12/31/24')}>annual - 2024</span>
                        <span onClick={() => this.handleRange('1/1/25', '12/31/25')}>annual - 2025</span>
                      </div>
                      <div className='line-h'></div>
                      <div className='range-custom'>
                        <span>Custom Range</span>
                      </div>
                    </div>
                  </div>
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
        {this.state.isOpen && <SideBarToggle setIsOpen={!this.state.isOpen} toggleSideBar={this.toggleSideBar} />}
      </div>
    );
  }
}
