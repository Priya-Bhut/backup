import { size } from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import { getObjective } from './Action';
import CreateOKR from './CreateOKR';
import IndividualOKRmain from './IndividualOKRmain';
// import IndividualORKchild from './IndividualORKchild';
import CreateKeyResult from './CreateKeyResult';
import withRouter from '../WrapperComponents/withRouter';
import OKRUpdateSidebar from './OKRUpdateSidebar';
import { ProgressBar } from 'react-bootstrap';
import CreateNotes from './CreateNotes';

function OKR(props) {
  const { isNewOkr, params } = props;
  const { organisationUrl } = params || {};
  const [okrs, setOkrs] = useState([]);
  const [calendarAt, setCalendarAt] = useState(-1);
  const [addNewKeyResult, setAddNewKeyResult] = useState(false);
  const [addKeyFormAt, setKeyFormAt] = useState(-1);
  const [addSubKeyFormAt, setSubKeyFormAt] = useState(-1);
  const [isOpenOkr, setIsOpenOkr] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenNote, setisOpenNote] = useState(false);

  const setUpdate = () => {
    setIsOpenOkr(true);
  };

  const handleCalender = (id) => {
    setCalendarAt(id);
  };

  const handleChildRender = (keyResult, okrDetail) => {
    return keyResult?.keyResults?.map((child, index) => (
      <li className='list-group-item' key={index}>
        <div className={`okr-tree ${index < keyResult.keyResults.length - 1 ? 'child-tree' : ''}`}></div>
        <div className='subChild'>
          <IndividualOKRmain
            key={index}
            keyResult={child}
            handleAlert={props?.handleAlert}
            calendarAt={calendarAt}
            handleCalender={handleCalender}
            addSubKeyFormAt={addSubKeyFormAt}
            addNewKeyResult={addNewKeyResult}
            setSubKeyFormAt={setSubKeyFormAt}
            getObjective={getObjective}
            setAddNewKeyResult={setAddNewKeyResult}
            class={size(child?.keyResults) <= 0 ? 'last-okr-main' : ''}
            id={child?.id}
            okrDetail={okrDetail}
          />
          {size(child?.keyResults) > 0 && handleChildRender(child, okrDetail)}
        </div>
      </li>
    ));
  };

  const getObjective = () => {
    props
      ?.getObjective(organisationUrl)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          setOkrs(response);
        } else {
          props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };

  const handleRenderKeyResultForm = (id) => {
    setKeyFormAt(id);
    setAddNewKeyResult(true);
  };

  const openMore = () => {
    return (
      <div className='more-drop-down'>
        <li className='list-group-item okr-menu' onClick={() => setUpdate()}>
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
  const createNotes = () => {
    setisOpenNote(!isOpenNote);
  };
  useEffect(() => {
    getObjective();
  }, []);

  return (
    <div className='main'>
      {isNewOkr && (
        <CreateOKR setIsNewOkr={props?.setIsNewOkr} handleAlert={props.handleAlert} getObjective={getObjective} />
      )}
      {okrs?.map((okr) => {
        return (
          <div className='mainOKR' key={okr?.id}>
            <li className='list-group-item'>
              <div className='parent'>
                <div className='all-content'>
                  <div className='okr-main'>
                    <i className='fa fa-dot-circle-o treeConnectorDot'></i>
                    <span className=''>{okr?.name}</span>
                    <div className='addChild-btn'>
                      <i className='fa fa-plus-circle' onClick={() => handleRenderKeyResultForm(okr?.id)}>
                        Add New Key Result
                      </i>
                    </div>
                    <div className='note-alignment'>
                      <div className='notes' onClick={() => createNotes()}>
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
                          keyResult
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='okr-content-container'>
                    <div className='date-time'>
                      <div className='calender'>
                        <i className='fa fa-calendar-alt' onClick={() => handleCalender(okr?.id)}></i>
                        {calendarAt === okr?.id && (
                          <Calendar
                            // handleRange={this.handleRange}
                            // handleCalender={this.handleCalender}
                            // handleEndDate={this.handleEndDate}
                            // handleStartDate={this.handleStartDate}
                            startDate={new Date(okr?.timePeriod?.startDate)}
                            endDate={new Date(okr?.timePeriod?.endDate)}
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
                        <ProgressBar className='total-progress' now={10} label={`0%`} />
                      </div>
                      <span className='showRange'>
                        <b>0%</b>
                      </span>
                      <div className='update'>
                        <i
                          data-toggle='tooltip'
                          title='Update'
                          className='fa fa-pencil i-pencil'
                          onClick={() => setUpdate()}
                        />
                        <i
                          className='fa fa-ellipsis-h other'
                          aria-hidden='true'
                          onClick={() => setIsOpenMore(!isOpenMore)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isOpenNote && <CreateNotes handleAlert={props?.handleAlert} />}
              {isOpenMore && openMore()}

              {handleChildRender(okr, okr)}
              {isOpenOkr && (
                <OKRUpdateSidebar
                  setIsOpenOkr={setIsOpenOkr}
                  handleAlert={props?.handleAlert}
                  getObjective={getObjective}
                  okr={okr}
                />
              )}

              {addNewKeyResult && addKeyFormAt === okr?.id && (
                <CreateKeyResult
                  id={okr?.id}
                  getObjective={getObjective}
                  parentKeyResultId={0}
                  handleAlert={props?.handleAlert}
                  setAddNewKeyResult={setAddNewKeyResult}
                />
              )}
            </li>
          </div>
        );
      })}
    </div>
  );
}
const mapDispatchToProps = {
  getObjective,
};

export default connect(null, mapDispatchToProps)(withRouter(OKR));
