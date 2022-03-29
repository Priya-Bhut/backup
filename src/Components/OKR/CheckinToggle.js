import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import { Dropdown } from 'react-bootstrap';

function CheckinToggle(props) {
  const [isActiveLink, setIsActiveLink] = useState('chart');
  const handleClick = (activeLink) => {
    setIsActiveLink(activeLink);
  };
  return (
    <>
      <div className='overlay'>
        <div className='checkinsidebar'>
          <div className='checkinsidebar-header'>
            <p>
              <strong>Check-in</strong>
            </p>
            <i className={`fa fa-times closemodel`} onClick={props?.checkinSidebar}></i>
          </div>
          <Card className='keyresultcard'>
            <Card.Body>
              <div className='keytitle'>
                <Card.Title>
                  <i className='fa fa-solid fa-bullseye'></i>
                </Card.Title>
                <Card.Subtitle>aaa</Card.Subtitle>
              </div>
              <div className='keytitle'>
                <Card.Title>
                  <i className='fa fa-key'></i>
                </Card.Title>
                <Card.Subtitle>xyz</Card.Subtitle>
              </div>
            </Card.Body>
          </Card>
          <div className='key-values'>
            <Card className='valuecard'>
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted'>Values</Card.Subtitle>
                <span> 1</span>
              </Card.Body>
            </Card>
            <Card className='valuecard'>
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted'>Status</Card.Subtitle>
                <Dropdown>
                  <Dropdown.Toggle className='status-dropdown' variant='default'>
                    Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
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
          <Card className='checkindate'>
            <Card.Body>
              <Card.Subtitle className='mb-2 text-muted'>Check in Date</Card.Subtitle>
            </Card.Body>
          </Card>
          <Editor
            apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
            init={{
              statusbar: false,
              placeholder: 'Add comment here...',
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
          <div className='slideTab'>
            <a href='#' onClick={() => handleClick('chart')} className={isActiveLink === 'chart' && 'active'}>
              Chart
            </a>
            <a href='#' onClick={() => handleClick('history')} className={isActiveLink === 'history' && 'active'}>
              History
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckinToggle;
