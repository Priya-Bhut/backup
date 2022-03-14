import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css';
import SideBarToggle from '../SideBar/SideBarToggle';

export default function IndividualORKchild() {
  const [isActive, setActive] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleCalender = () => {
    setActive(!isActive);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
  };
  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      {/* ---------------------------------------Subchild(Child1)------------------------------------------ */}
      <div className='main-tree1'> </div>
      <div className='child'>
        <div className='all-content'>
          <div className='connect-tree1-1'></div>
          <div className='connect-tree1'></div>
          <div className='child-tree1'> </div>
          <div className='name-tree2'>
            <i className='fas fa-dot-circle treeConnectorDot'></i> <span className='child'>OKR Sub Child</span>
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
              <i className='far fa-calendar-alt' onClick={(e) => handleCalender(e)}></i>
              {isActive && (
                <div className='datePicker'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => handleStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    inline
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => handleEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    inline
                  />
                </div>
              )}
            </div>
            &nbsp;
            <div className='user'>
              <i className='fas fa-user-circle'></i>
            </div>
          </div>{' '}
          <div className='trackSelect' onClick={toggleSideBar}>
            % Percentage Tracker
          </div>
          <div className='progress'>
            <div className='range-slider'>
              <input type='range' min='0' max='100' step='10' defaultValue='0' />
            </div>
            <span className='showRange'> 0% </span>
            <div className='update'>
              <i data-toggle='tooltip' title='Update' className='fas fa-pencil-alt i-pencil' />
              <i className='fa fa-ellipsis-h other' aria-hidden='true'></i>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <SideBarToggle setIsOpen={setIsOpen} toggleSideBar={toggleSideBar} />}
    </div>
  );
}
