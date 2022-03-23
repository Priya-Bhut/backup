import React from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip } from 'chart.js';
Chart.register(ArcElement, Title, Tooltip);

import './companydashboard.css';
function CompanyDashboard() {
  //
  const state = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
        hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
        data: [100, 80, 70, 30],
      },
    ],
  };

  return (
    <>
      <div className='secondHeader'>
        <h5>Company Dashboard</h5>
      </div>
      {/* <Dropdown>
        <Dropdown.Toggle variant='success'>All Department</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#'>Corporate</Dropdown.Item>
          <Dropdown.Item href='#'>Customer Service</Dropdown.Item>
          <Dropdown.Item href='#'>Engineering</Dropdown.Item>
          <Dropdown.Item href='#'>Human Resources</Dropdown.Item>
          <Dropdown.Item href='#'>Manufacturing</Dropdown.Item>
          <Dropdown.Item href='#'>Marketing</Dropdown.Item>
          <Dropdown.Item href='#'>Quality</Dropdown.Item>
          <Dropdown.Item href='#'>Research</Dropdown.Item>
          <Dropdown.Item href='#'>Sales</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

      <div className='dashboard-card-container'>
        <div className='topcard'>
          <Card className='topcardsdesign'>
            <Card.Body>
              <Card.Title>1</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Users <i className='fa fa-solid fa-users fa-2x logo'></i>
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className='topcardsdesign'>
            <Card.Body>
              <Card.Title>2</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Objective <i className='fa fa-solid fa-bullseye fa-2x logo'></i>
              </Card.Subtitle>

              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='topcard'>
          <Card className='topcardsdesign'>
            <Card.Body>
              <Card.Title>3</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Key Results <i className='fa fa-solid fa-key fa-2x logo'></i>
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card className='topcardsdesign'>
            <Card.Body>
              <Card.Title>4</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Tasks <i className='fa fa-solid fa-calendar-check fa-2x logo'></i>
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Card className='maincard'>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>Company's overall OKR Progress</Card.Subtitle>
            <hr></hr>
            <div id='canvas'>
              <Pie
                data={state}
                height={'300px'}
                width={'300px'}
                options={{
                  showAllTooltips: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>Remaining vs Achieved</Card.Subtitle>
            <hr></hr>
            <div id='canvas'>
              <Pie
                data={state}
                height={'300px'}
                width={'300px'}
                options={{
                  maintainAspectRatio: false,
                  title: {
                    display: true,
                    text: 'Hello',
                  },
                  legend: { display: true, position: 'right' },
                  tooltips: {
                    backgroundColor: '#5a6e7f',
                  },
                }}
              />
            </div>
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>OKRs by Department</Card.Subtitle>
            <hr></hr>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Individual OKRs by Departments</Card.Subtitle>
            <hr></hr>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Remaining vs Achieved by Department</Card.Subtitle>
            <hr></hr>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Individual OKRs by Teams</Card.Subtitle>
            <hr></hr>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CompanyDashboard;
