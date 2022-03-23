import React, { Component } from 'react';
import IndividualOKRmain from './IndividualOKRmain';
import IndividualORKchild from './IndividualORKchild';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css';
// import SecondHeader from './SecondHeader';
import CreateOKR from './CreateOKR';
import { getObjective } from './Action';
import { connect } from 'react-redux';

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
      ranges: [
        {
          name: 'Q1 - 2022',
          stDT: '1/1/22',
          edDT: '3/31/22',
        },
        {
          name: 'Q2 - 2022',
          stDT: '4/1/22',
          edDT: '6/30/22',
        },
        {
          name: 'Q3 - 2022',
          stDT: '7/1/22',
          edDT: '9/30/22',
        },
        {
          name: 'Q4 - 2022',
          stDT: '10/1/22',
          edDT: '12/31/22',
        },
        {
          name: 'Annual - 2022',
          stDT: '1/1/22',
          edDT: '12/31/22',
        },
        {
          name: 'Annual - 2023',
          stDT: '1/1/23',
          edDT: '12/31/23',
        },
        {
          name: 'Annual - 2024',
          stDT: '1/1/24',
          edDT: '12/31/24',
        },
        {
          name: 'Annual - 2025',
          stDT: '1/1/25',
          edDT: '12/31/25',
        },
      ],
    };
  }
  addNewOkr = () => {
    this.setState({ isNewOkr: true });
  };
  closeNewOkr = () => {
    this.setState({ isNewOkr: false });
  };
  addNewChild = () => {
    const { newChild } = this.state;
    const addChild = <IndividualOKRmain id={this.state.id} subChild={this.subChild} />;
    this.setState({
      newChild: newChild.concat({ main: addChild, child: [] }),
      id: this.state.id + 1,
    });
    // console.log(this.state.Newchild);
  };
  subChild = (index) => {
    // console.log("hii");
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
  handleCalender = () => {
    this.setState({ isActive: !this.state.isActive });
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
          console.log(response);
        } else {
          this.props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        this.props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };

  componentDidMount = () => {
    this.getObjective();
  };
  render() {
    const { isNewOkr, startDate, endDate } = this.state;

    return (
      <>
        {/* <SecondHeader addNewOkr={this.addNewOkr} /> */}
        <div className='main'>
          {isNewOkr && (
            <CreateOKR
              closeNewOkr={this.closeNewOkr}
              handleAlert={this.props.handleAlert}
              getObjective={this.getObjective}
            />
          )}
          <div className='mainOKR'>
            <div className='parent'>
              <div className='all-content'>
                <div className='name-tree'>
                  <i className='fa fa-dot-circle-o treeConnectorDot'></i> <span>OKR</span>
                  <div className='addChild-btn'>
                    <i className='fa fa-plus-circle' onClick={(e) => this.addNewChild(e)}>
                      Add New Key Result
                    </i>
                  </div>
                  <div className='note-alignment'>
                    <div className='notes'>
                      <i className='fa fa-sticky-note'></i>
                    </div>
                    <div className='alignment'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='20' height='20'>
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
                    <i className='fa fa-calendar-alt' onClick={this.handleCalender}></i>
                    {this.state.isActive && (
                      <div className='calender-main'>
                        <div className='calender-and-status'>
                          <div className='calender-header'>
                            <span className='start-header'>Start Date</span>
                            <span className='end-header'>End Date</span>
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
                            <span className='calender-date'>{`${startDate.getDate()}/${startDate.getMonth()}/${startDate.getYear()} - ${endDate.getDate()}/${endDate.getMonth()}/${endDate.getYear()}`}</span>
                            <div className='calender-confirm'>
                              <button onClick={this.handleCalender}>Cancel</button>
                              <button onClick={this.handleCalender}>Apply</button>
                            </div>
                          </div>
                        </div>
                        <div className='line-v'></div>
                        <div className='calender-ranges'>
                          <div className='range-quarter'>
                            <span onClick={() => this.handleRange('1/1/22', '3/31/22')}>Q1 - 2022</span>
                            <span onClick={() => this.handleRange('4/1/22', '6/30/22')}>Q2 - 2022</span>
                            <span onClick={() => this.handleRange('7/1/22', '9/30/22')}>Q3 - 2022</span>
                            <span onClick={() => this.handleRange('10/1/22', '12/31/22')}>Q4 - 2022</span>
                          </div>
                          <div className='line-h'></div>
                          <div className='range-annual'>
                            <span onClick={() => this.handleRange('1/1/22', '12/31/22')}>Annual - 2022</span>
                            <span onClick={() => this.handleRange('1/1/23', '12/31/23')}>Annual - 2023</span>
                            <span onClick={() => this.handleRange('1/1/24', '12/31/24')}>Annual - 2024</span>
                            <span onClick={() => this.handleRange('1/1/25', '12/31/25')}>Annual - 2025</span>
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
                    <input className='range' type='range' defaultValue='0' />
                    <output></output>
                  </div>
                  <span className='showRange'>
                    <b> 99.99% </b>
                  </span>
                  <div className='update'>
                    <i data-toggle='tooltip' title='Update' className='fa fa-pencil i-pencil' />
                    <i className='fa fa-ellipsis-h other' aria-hidden='true'></i>
                  </div>
                </div>
              </div>
            </div>
            {this.state.newChild.map((addChild, index) => {
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
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = {
  getObjective,
};

export default connect(null, mapDispatchToProps)(IndividualOKR);
