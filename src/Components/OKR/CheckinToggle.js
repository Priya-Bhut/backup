import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
// import { Editor } from '@tinymce/tinymce-react';
import { Dropdown } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, TimeScale, Legend);
const data = {
  labels: ['03-MAR-22', '05-MAR-22', '07-MAR-22', '09-MAR-22', '11-MAR-22', '13-MAR-22', '15-MAR-22', '17-MAR-22'],
  datasets: [
    {
      label: null,
      data: [33, 53, 55, 41, 44, 65, 12, 45],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
function CheckinToggle(props) {
  const [isActiveLink, setIsActiveLink] = useState('chart');
  const handleClick = (activeLink) => {
    setIsActiveLink(activeLink);
  };
  return (
    <>
      <div className='sidebaroverlay'>
        <div className='checkinsidebar'>
          <div className='checkinsidebar-header'>
            <p>
              <strong>Check-in</strong>
            </p>
            <i className={`fa fa-times closemodel`} onClick={props?.checkinSidebar}></i>
          </div>
          <Card className='keyresultcard'>
            <Card.Body>
              <Card.Title className='keytitle'>
                <i className='fa fa-solid fa-bullseye'></i>
                <span> aaa</span>
              </Card.Title>

              <Card.Title className='keytitle'>
                <i className='fa fa-key'></i>
                <span> xyz</span>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className='checkin-details'>
            <div className='key-values'>
              <Card className='valuecard'>
                <Card.Body className='value-cardbody'>
                  <Card.Subtitle className='mb-2 text-muted'>Values</Card.Subtitle>
                  <span> 1</span>
                </Card.Body>
              </Card>
              <Card className='valuecard'>
                <Card.Body className='value-cardbody'>
                  <Card.Subtitle className='mb-2 text-muted'>Status</Card.Subtitle>
                  <Dropdown>
                    <Dropdown.Toggle className='status-dropdown' variant='default'>
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='statusdropdown'>
                      <div className='departments-item'>
                        <Dropdown.Item href='#'>
                          <div className='statusicon-ontracked'></div>On Track
                        </Dropdown.Item>
                      </div>
                      <div className='departments-item'>
                        <Dropdown.Item href='#'>
                          <div className='statusicon-notstart'></div>Not Started
                        </Dropdown.Item>
                      </div>
                      <div className='departments-item'>
                        <Dropdown.Item href='#'>
                          <div className='statusicon-risk'></div>At Risk
                        </Dropdown.Item>
                      </div>
                      <div className='departments-item'>
                        <Dropdown.Item href='#'>
                          <div className='statusicon-trouble'></div>In Trouble
                        </Dropdown.Item>
                      </div>
                      <div className='departments-item'>
                        <Dropdown.Item href='#'>
                          <div className='statusicon-completed'></div>Completed
                        </Dropdown.Item>
                      </div>
                      <div className='departments-item'>
                        <Dropdown.Item href='#'>
                          <div className='statusicon-archived'></div>Archived
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>
            </div>
            <div className='checkindate'>
              <Card>
                <Card.Body className='value-cardbody'>
                  <Card.Subtitle className='mb-2 text-muted'>Check in Date</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>

            {/* <div className='editor'>
              <Editor
                apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
                init={{
                  statusbar: false,
                  placeholder: 'Add Comment Here...',
                  menubar: false,
                  selector: 'textarea#premiumskinsandicons-material-classic',
                  skin: 'material-classic',
                  icons: 'small',
                  toolbar_location: 'bottom',
                  height: '150px',

                  plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount emoticons',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic |   alignleft aligncenter alignright | bullist numlist outdent indent | emoticons',
                }}
              />
            </div> */}
          </div>
          <div className='slideTab'>
            <a href='#' onClick={() => handleClick('chart')} className={isActiveLink === 'chart' && 'active'}>
              Chart
            </a>
            <a href='#' onClick={() => handleClick('history')} className={isActiveLink === 'history' && 'active'}>
              History
            </a>
          </div>
          <Line data={data} options={options} />
          <div className='toggle-btnsidebar'>
            <button className='sidebar-btn'>Cancel</button>
            <button className='sidebar-btn'>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckinToggle;
