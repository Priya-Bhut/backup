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
  const handleRange = (startDate, endDate) => {
    setStartDate(new Date(startDate));
    setEndDate(new Date(endDate));
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
            <i className='fa fa-dot-circle-o treeConnectorDot'></i> <span className='child'>OKR Sub Child</span>
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
              <i className='fa fa-calendar-alt' onClick={(e) => handleCalender(e)}></i>
              {isActive && (
                <div className='datePickerWrap'>
                  <div className='datePicker'>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => handleStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      inline
                      fixedHeight
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => handleEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      inline
                      fixedHeight
                    />
                    <div className='range-picker'>
                      <span onClick={() => handleRange('1/1/22', '3/31/22')}>Q1-2022</span>
                      <span onClick={() => handleRange('4/1/22', '6/30/22')}>Q2-2022</span>
                      <span onClick={() => handleRange('7/1/22', '9/30/22')}>Q3-2022</span>
                      <span onClick={() => handleRange('10/1/22', '12/31/22')}>Q4-2022</span>
                      <div className='Line'></div>
                      <span onClick={() => handleRange('1/1/22', '12/31/22')}>Annual-2022</span>
                      <span onClick={() => handleRange('1/1/23', '12/31/23')}>Annual-2023</span>
                      <span onClick={() => handleRange('1/1/24', '12/31/24')}>Annual-2024</span>
                      <span onClick={() => handleRange('1/1/25', '12/31/25')}>Annual-2025</span>
                      <div className='Line'></div>
                      <span>Custom Range</span>
                    </div>
                  </div>
                  <div className='dateConfirmation'>
                    <div className='date-status'>{`${startDate.getDate()}/${startDate.getMonth()}/${startDate.getYear()} - ${endDate.getDate()}/${endDate.getMonth()}/${endDate.getYear()}`}</div>
                    <div className='buttons'>
                      <button onClick={handleCalender}>Cancel</button>
                      <button onClick={handleCalender}>Apply</button>
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
          <div className='trackSelect' onClick={toggleSideBar}>
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
      {isOpen && <SideBarToggle setIsOpen={setIsOpen} toggleSideBar={toggleSideBar} />}
    </div>
  );
}
