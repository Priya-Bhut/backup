import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css';
import SideBarToggle from '../SideBar/SideBarToggle';
import CreateKeyResult from './CreateKeyResult';
import CheckinToggle from './CheckinToggle';
import Calendar from '../Calendar/Calendar';
export default class IndividualOKRmain extends Component {
  state = { isActive: false, isOpen: false, isCheckin: false };

  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      addKeyFormAt: -1,
      addNewKeyResult: false,
      expandTracked: false,
      calendarAt: -1,
      isActive: true,
      isOpenMore: false,
    };
  }
  escFunction = (event) => {
    if (event.key === 'Escape') {
      this.setState({ isOpen: false });
      this.setState({ isCheckin: false });
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }
  openMore = () => {
    return (
      <div className='more-drop-down'>
        <li className='list-group-item okr-menu' onClick={() => this.setEdit(this?.keyResult)}>
          <i data-toggle='tooltip' title='Update' className='fa fa-pencil i-pencil' />
          <span>Edit</span>
        </li>
        <li className='list-group-item okr-menu'>
          <i className='fas fa-trash i-delete'></i>
          <span>Delete</span>
        </li>
      </div>
    );
  };
  toggleSideBar = (dropdownmenu) => {
    this.setState({ isOpen: !this?.state?.isOpen });
    this.setState({ expandTracked: dropdownmenu });
  };

  checkinSidebar = () => {
    this.setState({ isCheckin: !this.state.isCheckin });
  };
  setEdit = () => {
    this.toggleSideBar(false);
  };
  handleCalender = (id) => {
    this.setState({ calendarAt: id });
  };
  handleEndDate = (date) => {
    this.setState({ endDate: date });
  };
  handleStartDate = (date) => {
    this.setState({ startDate: date });
  };

  handleRange = (startDate, endDate) => {
    this.setState({ startDate: new Date(startDate), endDate: new Date(endDate) });
  };
  handleClose = () => {
    this.setState({
      addNewKeyResult: false,
    });
  };
  handleOpen = (id) => {
    this.props?.setSubKeyFormAt(id);
    this.props?.setAddNewKeyResult(true);
  };
  handleMore = () => {
    this?.setState({ isOpenMore: !this?.state?.isOpenMore });
  };
  render() {
    const { startDate, endDate } = this.state;
    const { keyResult, addSubKeyFormAt, addNewKeyResult, okrDetail, calendarAt } = this.props;

    return (
      <div className='main'>
        <div className='all-content'>
          <div className={`okr-main ${this.props?.class}`}>
            <div className='okr-name'>
              <i className='fa fa-dot-circle-o treeConnectorDot'></i>
              <span>{keyResult?.title}</span>
            </div>
            <div className='addSubChild-btn' onClick={() => this.handleOpen(keyResult?.id)}>
              <i className='fa fa-plus-circle'>Add New Child</i>
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
          <div className='keyresult-content-container'>
            <div className='date-time1'>
              <div className='calender'>
                <i className='fa fa-calendar-alt' onClick={() => this.props?.handleCalender(keyResult?.id)}></i>
                {calendarAt === keyResult?.id && (
                  <Calendar startDate={startDate} endDate={endDate} handleCalender={this.handleCalender} />
                )}
              </div>
              &nbsp;
              <div className='user'>
                <i className='fa fa-user-circle'></i>
              </div>
            </div>
            <div className='progressBar'>
              <div className='trackSelect' onClick={() => this.toggleSideBar(true)}>
                % Percentage Tracker
              </div>
              <div className='range-slider'>
                <input
                  className='range'
                  type='range'
                  min='0'
                  max='100'
                  step='10'
                  defaultValue='0'
                  onClick={() => this.checkinSidebar()}
                />
              </div>
              <span className='showRange'>
                <b>0%</b>
              </span>
              <div className='update'>
                <i
                  data-toggle='tooltip'
                  title='Update'
                  className='fa fa-pencil other'
                  onClick={() => this.setEdit(keyResult)}
                />
                <i className='fa fa-ellipsis-h other' aria-hidden='true' onClick={() => this?.handleMore()}></i>
              </div>
            </div>
          </div>
        </div>
        {this?.state?.isOpenMore && this?.openMore()}
        {this.state.isOpen && (
          <SideBarToggle
            setIsOpen={!this.state.isOpen}
            toggleSideBar={this.toggleSideBar}
            expandTracked={this.state.expandTracked}
            handleAlert={this.props?.handleAlert}
            getObjective={this.props?.getObjective}
            keyResult={keyResult}
            okrDetail={okrDetail}
          />
        )}
        {this.state.isCheckin && (
          <CheckinToggle setIsCheckin={!this.state.isCheckin} checkinSidebar={this.checkinSidebar}></CheckinToggle>
        )}
        {addNewKeyResult && addSubKeyFormAt === keyResult?.id && (
          <CreateKeyResult
            id={keyResult?.id}
            parentKeyResultId={keyResult?.id || 0}
            handleAlert={this.props?.handleAlert}
            setAddNewKeyResult={this.props?.setAddNewKeyResult}
            getObjective={this.props?.getObjective}
          />
        )}
      </div>
    );
  }
}
