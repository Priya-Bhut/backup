import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import SearchSelectSequenceModal from './SearchSelectSequenceModal';

function SideBarToggle(props) {
  const handleClicked = (e) => {
    setTracked(e);
    setexpandPerTracked(false);
  };
  const [expandPerTracked, setexpandPerTracked] = useState(props.expandTracked);
  const [tracked, setTracked] = useState('percentage');
  const [openSequence, setOpenSequence] = useState(false);
  const [addFrequency, setAddFrequency] = useState(false);

  const expandPertageTracked = () => {
    return (
      <div className='keyresult-drop-down'>
        <span className='keyresult-label'> Non Measureables</span>
        <div className='dropdown-list'>
          <div id='circle3'>
            <i className='fa fa-solid fa-percent' />
          </div>
          <div className='keypercentage'>
            <span className='span-key' onClick={() => handleClicked('percentage')}>
              Percentage Tracked
            </span>
          </div>
        </div>
        <div className='dropdown-list'>
          <div id='circle3'>
            <i className='fa fa-solid fa-flag' />
          </div>
          <div className='keypercentage'>
            <span className='span-key' onClick={() => handleClicked('milestone')}>
              Milestone Tracked
            </span>
          </div>
        </div>
        <div className='dropdown-list'>
          <div id='circle3'>
            <i className='fa fa-calendar'></i>
          </div>
          <div className='keypercentage'>
            <span className='span-key' onClick={() => handleClicked('task')}>
              Task Tracked
            </span>
          </div>
        </div>
        <div className='hr-keyresult'>
          <hr></hr>
        </div>

        <span className='keyresult-label'> Measureables</span>
        <div className='dropdown-list'>
          <div id='circle3'>
            <i className='fas fa-caret-up fa-2x'></i>
          </div>
          <div className='keypercentage'>
            <span className='span-key' onClick={() => handleClicked('task')}>
              Increase KPI
            </span>
          </div>
        </div>

        <div className='dropdown-list'>
          <div id='circle3'>
            <i className='fas fa-caret-down fa-2x'></i>
          </div>
          <div className='keypercentage'>
            <span className='span-key' onClick={() => handleClicked('task')}>
              Decrease KPI
            </span>
          </div>
        </div>

        <div className='dropdown-list'>
          <div id='circle3'>
            <i className='fa fa-solid fa-hourglass-end'></i>
          </div>
          <div className='keypercentage'>
            <span className='span-key' onClick={() => handleClicked('task')}>
              Control KPI
            </span>
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
              Objective: <strong>ABC</strong>
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
                    <div className='searchSequence' onClick={() => setOpenSequence(!openSequence)}>
                      <span>
                        {/* <div className='top-nav-dropdown'>
                          <DropdownButton
                            title={sequenceName === '' ? 'Search & Select Sequence ' : sequenceName}
                            className='dropdownhover'
                          ></DropdownButton>
                        </div> */}
                        Search & select Sequence
                      </span>
                    </div>
                  ) : tracked === 'task' ? (
                    'Task Tracked'
                  ) : null}
                </span>
              </div>
              <div>
                {openSequence && (
                  <SearchSelectSequenceModal
                    setOpenSequence={setOpenSequence}
                    openSequence={openSequence}
                    // setSequenceName={setSequenceName}
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
              defaultValue={props?.child === undefined ? props.keyResult.title : props.child.title}
            ></textarea>
          </div>
          <div className='editor'>
            <Editor
              apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
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
                <i className='fa fa-solid fa-plus' onClick={() => setAddFrequency(!addFrequency)}>
                  <span className='tooltiptext'>Add Frequency</span>
                </i>
                {addFrequency && (
                  <div className='frequency-dropdown'>
                    <div className='week'>
                      <span className='span-key'>Weekly Updates</span>
                      <i className='fa fa-caret-right'></i>

                      <div className='frequency-dropdown week-item'>
                        <div className='dropdown-list'>
                          <input type='checkbox' value='day' />
                          <span className='span-key'>Every Day</span>
                        </div>

                        <div className='dropdown-list'>
                          <input type='checkbox' value='monday' />
                          <span className='span-key'>Every Monday</span>
                        </div>

                        <div className='dropdown-list'>
                          <input type='checkbox' value='tuesday' />
                          <span className='span-key'>Every Tuesday</span>
                        </div>
                        <div className='dropdown-list'>
                          <input type='checkbox' value='wednesday' />
                          <span className='span-key'>Every Wednesday</span>
                        </div>
                        <div className='dropdown-list'>
                          <input type='checkbox' value='thrusday' />
                          <span className='span-key'>Every Thrusday</span>
                        </div>
                        <div className='dropdown-list'>
                          <input type='checkbox' value='friday' />
                          <span className='span-key'>Every Friday</span>
                        </div>
                      </div>
                    </div>

                    <div className='month'>
                      <span className='span-key'>Monthly Updates</span>
                      <i className='fa fa-caret-right'></i>
                      <div className='frequency-dropdown month-item'>
                        <div className='dropdown-list'>
                          <input type='checkbox' value='day' />
                          <span className='span-key'>Last Day</span>
                        </div>

                        <div className='dropdown-list'>
                          <input type='checkbox' value='monday' />
                          <span className='span-key' onClick={() => handleClicked('percentage')}>
                            1st Monday
                          </span>
                        </div>

                        <div className='dropdown-list'>
                          <input type='checkbox' value='tuesday' />
                          <span className='span-key' onClick={() => handleClicked('percentage')}>
                            Last Friday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='toggle-btn'>
            <button className='sidebar-btn'>Cancel</button>
            <button className='sidebar-btn'>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBarToggle;
