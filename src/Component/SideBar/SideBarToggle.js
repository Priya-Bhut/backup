import React, { useState } from "react";
import { FiPercent } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { Editor } from "@tinymce/tinymce-react";

import "./SideBar.css";

function SideBarToggle(props) {
  const handleClicked = (e) => {
    setTracked(e);
    setexpandPerTracked(false);
  };
  const [expandPerTracked, setexpandPerTracked] = useState(false);
  const [Tracked, setTracked] = useState("percentage");

  const expandPertageTracked = () => {
    return (
      <div className='KeyResult-drop-down'>
        <div className='list_content'>
          <span className='nonMeasurable_label'> Non Measureables</span>
          <div className='dropdown_list'>
            <div id='circle3'>
              <i className='fa fa-solid fa-percent' />
            </div>
            <div className='keyPercentage'>
              <span
                className='span-key'
                onClick={() => handleClicked("percentage")}
              >
                Percentage Tracked
              </span>
            </div>
          </div>
          <div className='dropdown_list'>
            <div id='circle3'>
              <i className='fa fa-solid fa-flag' />
            </div>
            <div className='keyPercentage'>
              <span
                className='span-key'
                onClick={() => handleClicked("milestone")}
              >
                Milestone Tracked
              </span>
            </div>
          </div>
          <div className='dropdown_list'>
            <div id='circle3'>
              <i class='fa fa-regular fa-calendar '></i>
            </div>
            <div className='keyPercentage'>
              <span className='span-key' onClick={() => handleClicked("task")}>
                Task Tracked
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className='overlay'>
        <div className='sideBar'>
          <div className='sideBar-Header'>
            <p>
              Objective: <strong>ABC</strong>
            </p>
            <i
              className={`fa fa-times closeModel`}
              onClick={props?.toggleSideBar}
            ></i>
          </div>

          <div className='sideBar-Type'>
            <div className='sideBar-Type1'>
              <div id='circle'>
                <div id='circle2'>
                  {Tracked === "percentage" ? (
                    <i className='fa fa-solid fa-percent' />
                  ) : Tracked === "milestone" ? (
                    <i className='fa fa-solid fa-flag' />
                  ) : Tracked === "task" ? (
                    <i class='fa fa-solid fa-calendar-check-o'></i>
                  ) : null}
                </div>
              </div>
              <div className='key'>
                <span className='span-key'>Key Result Type</span>
                <span
                  className='percentage-track'
                  onClick={() => setexpandPerTracked(!expandPerTracked)}
                >
                  {Tracked === "percentage"
                    ? "Percentage Tracked"
                    : Tracked === "milestone"
                    ? "Milestone Tracked"
                    : Tracked === "task"
                    ? "Task Tracked"
                    : null}
                </span>
                {expandPerTracked ? expandPertageTracked() : null}
              </div>
            </div>

            <div className='sideBar-Type2'>
              <div id='circle'>
                {Tracked === "percentage" ? (
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
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.39'
                    ></path>
                  </svg>
                ) : Tracked === "milestone" ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='white'
                    width='20'
                    height='20'
                  >
                    <path
                      d='M16,6.8,14.2,9.9H10.6L8.8,6.8l1.8-3.1h3.6ZM7.4,14.1H3.9L2.1,17.2l1.8,3.1H7.4l1.8-3.1Zm13.7-.2H17.5L15.7,17l1.8,3.1h3.6L22.8,17ZM9.2,17.2c3.5-1.6,3.1-6.5,3.1-6.5m.3,0s-.4,4.9,3.1,6.5'
                      fill='none'
                      stroke='currentcolor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.58'
                    ></path>
                  </svg>
                ) : Tracked === "task" ? (
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
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.39'
                    ></path>
                  </svg>
                ) : null}
              </div>

              <div className='key'>
                <span className='span-key'>
                  {Tracked === "percentage"
                    ? "What are you Tracking?"
                    : Tracked === "milestone"
                    ? "Sequence Name"
                    : Tracked === "task"
                    ? "Tracking Tasks"
                    : null}
                </span>
                <span>
                  {Tracked === "percentage" ? (
                    "Percentage Tracked"
                  ) : Tracked === "milestone" ? (
                    <a href='#'>Search & Select Sequence</a>
                  ) : Tracked === "task" ? (
                    "Task Tracked"
                  ) : null}
                </span>
              </div>
            </div>

            <div className='sideBar-Type3'>
              <div id='circle'>
                <GoCalendar id='calendarIcon' />
              </div>
              <div className='key'>
                <span className='span-key'>Target Date1</span>
                <span>Jan 1-Jun 1</span>
              </div>
            </div>

            {/* <div className="sideBar-Type4">
              <div id="circle">
                <i class="fa-solid fa-chart-pyramid-o"></i>
              </div>
              <div className="key">
                <span className="span-key">Level</span>
                <span>Associated Task</span>
              </div>
            </div> */}
          </div>
          <hr />

          <div className='key-result'>
            <textarea
              cols={63}
              rows={3}
              placeholder='Type Your Key Result..'
              className='textareaKeyResult'
            ></textarea>
          </div>
          <div className='Editor'>
            <Editor
              apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
              init={{
                statusbar: false,
                placeholder: "Additional Context Here..",
                menubar: false,
                plugins: [
                  "advlist autolink lists link image",
                  "charmap print preview anchor help",
                  "searchreplace visualblocks code",
                  "insertdatetime media table paste wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic |   alignleft aligncenter alignright | bullist numlist outdent indent",
              }}
            />
          </div>

          <div className='User'>
            <div id='circleTag'>
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
            <div id='circleTag'>
              <i className='fa fa-solid fa-tags'>
                <span className='tooltiptext'>Tags</span>
              </i>
            </div>
          </div>

          <div className='Location'>
            <div id='circleLocation'>
              <i class='fa fa-solid fa-location-dot-o'></i>
              <span className='tooltiptext'>Frequency</span>
            </div>
            <div className='key'>
              <span className='span-key'>Check-in Frequency</span>
              <span className='display-frequency'> Every Friday</span>
            </div>
            <div id='circleAddFre'>
              <i className='fa fa-solid fa-plus'>
                <span className='tooltiptext'>Add Frequency</span>
              </i>
            </div>
          </div>

          <div className='btn'>
            <button className='graph-btn'>Cancel</button>
            <button className='graph-btn'>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBarToggle;
