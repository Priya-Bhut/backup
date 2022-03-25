import React from 'react';
import DatePicker from 'react-datepicker';

export default function Calendar(props) {
  const { startDate, endDate } = props;
  return (
    <div className='calender-main'>
      <div className='calender-and-status'>
        <div className='calender-header'>
          <span className='start-header'>Start Date</span>
          <span className='end-header'>End Date</span>
        </div>
        <div className='calender-actual'>
          <DatePicker
            selected={startDate}
            onChange={(date) => props?.handleStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            inline
            fixedHeight
          />
          <div className='line-v'></div>
          <DatePicker
            selected={endDate}
            onChange={(date) => props?.handleEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            inline
            fixedHeight
          />
        </div>
        <div className='line-h'></div>
        <div className='calender-date-and-confirm'>
          <span className='calender-date'>{`${startDate.getDate()}/${startDate.getMonth()}/${startDate.getYear()} - ${endDate.getDate()}/${endDate.getMonth()}/${endDate.getYear()}`}</span>
          <div className='calender-confirm'>
            <button onClick={props?.handleCalender}>Cancel</button>
            <button onClick={props?.handleCalender}>Apply</button>
          </div>
        </div>
      </div>
      <div className='line-v'></div>
      <div className='calender-ranges'>
        <div className='range-quarter'>
          <span onClick={() => props?.handleRange('1/1/2022', '3/31/2022')}>Q1 - 2022</span>
          <span onClick={() => props?.handleRange('4/1/2022', '6/30/2022')}>Q2 - 2022</span>
          <span onClick={() => props?.handleRange('7/1/2022', '9/30/2022')}>Q3 - 2022</span>
          <span onClick={() => props?.handleRange('10/1/2022', '12/31/2022')}>Q4 - 2022</span>
        </div>
        <div className='line-h'></div>
        <div className='range-annual'>
          <span onClick={() => props?.handleRange('1/1/2022', '12/31/2022')}>Annual - 2022</span>
          <span onClick={() => props?.handleRange('1/1/2023', '12/31/2023')}>Annual - 2023</span>
          <span onClick={() => props?.handleRange('1/1/2024', '12/31/2024')}>Annual - 2024</span>
          <span onClick={() => props?.handleRange('1/1/2025', '12/31/2025')}>Annual - 2025</span>
        </div>
        <div className='line-h'></div>
        <div className='range-custom'>
          <span>Custom Range</span>
        </div>
      </div>
    </div>
  );
}
