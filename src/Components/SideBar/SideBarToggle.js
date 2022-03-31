import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import SearchSelectSequenceModal from './SearchSelectSequenceModal';
import { getSequenceData, updateKeyResult } from './Action';
import { connect } from 'react-redux';
import withRouter from '../WrapperComponents/withRouter';
import SelectSequenceModal from './SelectSequenceModal';

function SideBarToggle(props) {
  const { okrDetail, keyResult, params } = props;
  const { organisationUrl } = params || {};
  const [sequenceData, setSequenceData] = useState([]);
  const [selectSequence, setSelectSequence] = useState(false);
  const [updateSequneceData, setUpdateSequenceData] = useState([]);
  const handleClicked = (e) => {
    setTracked(e);
    setexpandPerTracked(false);
  };

  const [expandPerTracked, setexpandPerTracked] = useState(props.expandTracked);
  const [tracked, setTracked] = useState('percentage');
  // const [sequenceName, setSequenceName] = useState('');
  const [openSequence, setOpenSequence] = useState(false);
  const [updateData, setUpdateData] = useState({
    keyResultId: keyResult?.id || 0,
    title: keyResult?.title || '',
    description: keyResult?.description || '',
    startDate: keyResult?.startDate || '',
    endDate: keyResult?.endDate || '',
    parentKeyResultId: keyResult?.parentKeyResultId || 0,
    checkInFrequency: keyResult?.checkInFrequency || 0,
    keyResultTypeName: keyResult?.keyResultTypeName || '',
    percentData: keyResult?.percentData || '',
    mileStoneData: keyResult?.mileStoneData || '',
    taskData: keyResult?.taskData || '',
    increasetKPIData: keyResult?.increasetKPIData || '',
    objectiveId: keyResult?.objectiveId || 0,
    keyResults: keyResult?.keyResults || [],
  });

  const updateKeyResult = () => {
    props
      ?.updateKeyResult(organisationUrl, updateData)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          props?.handleAlert('Keyresult Updated', 'success');
          props?.getObjective();
        } else {
          props?.handleAlert(!response?.errorMessage || !response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };
  const getSequenceData = () => {
    props
      ?.getSequenceData(organisationUrl)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          setSequenceData(response);
        } else {
          props?.handleAlert(!response?.errorMessage || !response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };
  useEffect(() => {
    getSequenceData();
  }, []);

  const handleAddSequenceModal = () => {
    setUpdateSequenceData([]);
    setSelectSequence(!selectSequence);
    setOpenSequence(false);
  };

  const expandPertageTracked = () => {
    return (
      <div className='keyresult-drop-down'>
        <div className='list-content'>
          <span className='nonmeasurable-label'> Non Measureables</span>
          <div className='dropdown-list' onClick={() => handleClicked('percentage')}>
            <div id='circle3'>
              <i className='fa fa-solid fa-percent' />
            </div>
            <div className='keypercentage'>
              <span className='span-key'>Percentage Tracked</span>
            </div>
          </div>
          <div className='dropdown-list' onClick={() => handleClicked('milestone')}>
            <div id='circle3'>
              <i className='fa fa-solid fa-flag' />
            </div>
            <div className='keypercentage'>
              <span className='span-key'>Milestone Tracked</span>
            </div>
          </div>
          <div className='dropdown-list' onClick={() => handleClicked('task')}>
            <div id='circle3'>
              <i className='fa fa-calendar'></i>
            </div>
            <div className='keypercentage'>
              <span className='span-key'>Task Tracked</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className='sidebaroverlay'>
        <div className='sideBar'>
          <div className='sidebar-header'>
            <p>
              Objective: <strong>{okrDetail?.name}</strong>
            </p>
            <i className={`fa fa-times closeModel`} onClick={props?.toggleSideBar}></i>
          </div>
          <div className='sideBar-type'>
            <div className='sideBar-type1'>
              <div id='circle'>
                <div id='circle2'>
                  {tracked === 'percentage' ? (
                    <i className='fa fa-solid fa-percent' />
                  ) : tracked === 'milestone' ? (
                    <i className='fa fa-solid fa-flag' />
                  ) : tracked === 'task' ? (
                    <i className='fa fa-solid fa-calendar-check-o'></i>
                  ) : null}
                </div>
              </div>
              <div className='key'>
                <span className='span-key'>Key Result Type</span>
                <span className='percentage-track' onClick={() => setexpandPerTracked(!expandPerTracked)}>
                  {tracked === 'percentage'
                    ? 'Percentage tracked'
                    : tracked === 'milestone'
                    ? 'Milestone Tracked'
                    : tracked === 'task'
                    ? 'Task Tracked'
                    : null}
                </span>
                {expandPerTracked ? expandPertageTracked() : null}
              </div>
            </div>
            <div className='sidebar-type2'>
              <div id='circle'>
                {tracked === 'percentage' ? (
                  <svg
                    className='fly_joiner'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='white'
                    width='24'
                    height='24'
                  >
                    <path
                      d='M8.9,19a2.3,2.3,0,0,1-2.3,2.3A2.4,2.4,0,0,1,4.3,19a2.3,2.3,0,0,1,2.3-2.3A2.3,2.3,0,0,1,8.9,19ZM18.8,3.9a2.2,2.2,0,0,0-2.2,2.3,2.3,2.3,0,1,0,4.5,0A2.3,2.3,0,0,0,18.8,3.9ZM9,19.1h4.8V14.3h5V8.6'
                      fill='none'
                      stroke='currentcolor'
                      // stroke-linecap='round'
                      // stroke-linejoin='round'
                      // stroke-width='1.39'
                    ></path>
                  </svg>
                ) : tracked === 'milestone' ? (
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='20' height='20'>
                    <path
                      d='M16,6.8,14.2,9.9H10.6L8.8,6.8l1.8-3.1h3.6ZM7.4,14.1H3.9L2.1,17.2l1.8,3.1H7.4l1.8-3.1Zm13.7-.2H17.5L15.7,17l1.8,3.1h3.6L22.8,17ZM9.2,17.2c3.5-1.6,3.1-6.5,3.1-6.5m.3,0s-.4,4.9,3.1,6.5'
                      fill='none'
                      stroke='currentcolor'
                      // stroke-linecap='round'
                      // stroke-linejoin='round'
                      // stroke-width='1.58'
                    ></path>
                  </svg>
                ) : tracked === 'task' ? (
                  <svg
                    className='fly_joiner'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='white'
                    width='24'
                    height='24'
                  >
                    <path
                      d='M8.9,19a2.3,2.3,0,0,1-2.3,2.3A2.4,2.4,0,0,1,4.3,19a2.3,2.3,0,0,1,2.3-2.3A2.3,2.3,0,0,1,8.9,19ZM18.8,3.9a2.2,2.2,0,0,0-2.2,2.3,2.3,2.3,0,1,0,4.5,0A2.3,2.3,0,0,0,18.8,3.9ZM9,19.1h4.8V14.3h5V8.6'
                      fill='none'
                      stroke='currentcolor'
                      // stroke-linecap='round'
                      // stroke-linejoin='round'
                      // stroke-width='1.39'
                    ></path>
                  </svg>
                ) : null}
              </div>
              <div className='key'>
                <span className='span-key'>
                  {tracked === 'percentage'
                    ? 'What are you Tracking?'
                    : tracked === 'milestone'
                    ? 'Sequence Name'
                    : tracked === 'task'
                    ? 'Tracking Tasks'
                    : null}
                </span>
                <span>
                  {tracked === 'percentage' ? (
                    'Percentage Tracked'
                  ) : tracked === 'milestone' ? (
                    <div
                      role='button'
                      tabIndex='0'
                      className='text-primary pe-auto'
                      onClick={() => setOpenSequence(!openSequence)}
                    >
                      <span>Search & Select Sequence</span>
                    </div>
                  ) : tracked === 'task' ? (
                    'Task Tracked'
                  ) : null}
                </span>
              </div>
              <div>
                {openSequence && (
                  <SearchSelectSequenceModal
                    handleAlert={props?.handleAlert}
                    setOpenSequence={setOpenSequence}
                    openSequence={openSequence}
                    setUpdateData={setUpdateSequenceData}
                    setSelectSequence={setSelectSequence}
                    // setSequence={setSequence}
                    sequenceData={sequenceData}
                    getSequenceData={getSequenceData}
                    handleAddSequenceModal={handleAddSequenceModal}
                  />
                )}
                {selectSequence && (
                  <SelectSequenceModal
                    updateData={updateSequneceData}
                    handleAlert={props?.handleAlert}
                    // setSelectSequence={setSelectSequence}
                    handleAddSequenceModal={handleAddSequenceModal}
                    selectSequence={selectSequence}
                    // setSequenceName={props?.setSequenceName}
                    setOpenSequence={setOpenSequence}
                    openSequence={openSequence}
                    setSequence={props?.setSequence}
                    getSequenceData={getSequenceData}
                  />
                )}
              </div>
            </div>
            <div className='sidebar-type3'>
              <div id='circle'>
                <i className='fa fa-calendar'></i>
              </div>
              <div className='key'>
                <span className='span-key'>Target Date1</span>
                <span>Jan 1-Jun 1</span>
              </div>
            </div>
          </div>
          <hr />
          <div className='key-result'>
            <textarea
              cols={63}
              rows={3}
              placeholder='Type Your Key Result..'
              className='textareaKeyResult'
              value={updateData?.title}
              onChange={(e) => setUpdateData({ ...updateData, title: e?.target?.value })}
            ></textarea>
          </div>
          <div className='editor'>
            <Editor
              apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
              value={updateData?.description}
              onEditorChange={(content) => setUpdateData({ ...updateData, description: content })}
              init={{
                statusbar: false,
                placeholder: 'Description...',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic |   alignleft aligncenter alignright | bullist numlist outdent indent',
              }}
            />
          </div>
          <div className='assignee'>
            <div className='sidebar-user'>
              <div id='circlelocation'>
                <i className='fa fa-light fa-user' />
              </div>
              <div className='key'>
                <span className='span-key'>Assignee</span>
                <a href='#' className='SearchAssignee'>
                  Search & Select Assignee
                </a>
              </div>
            </div>
            <div className='tag'>
              <div id='circletag'>
                <i className='fa fa-tags'>
                  <span className='tooltiptext'>Tags</span>
                </i>
              </div>
            </div>
            <div className='Location'>
              <div id='circletag'>
                <i className='fa fa-map-marker fa-lg Icons' aria-hidden='true'>
                  <span className='tooltiptext'>Frequency</span>
                </i>
              </div>
              <div className='key'>
                <span className='span-key'>Check-in Frequency</span>
                <span className='display-frequency'> Every Friday</span>
              </div>
              <div id='circleaddfre'>
                <i className='fa fa-solid fa-plus'>
                  <span className='tooltiptext'>Add Frequency</span>
                </i>
              </div>
            </div>
          </div>
          <div className='toggle-btn'>
            <button className='sidebar-btn'>Cancel</button>
            <button className='sidebar-btn' onClick={updateKeyResult}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  getSequenceData,
  updateKeyResult,
};

export default connect(null, mapDispatchToProps)(withRouter(SideBarToggle));
