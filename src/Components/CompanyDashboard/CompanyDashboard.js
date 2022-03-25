import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Pie, Line } from 'react-chartjs-2';
import { Dropdown } from 'react-bootstrap';
import {
  Chart,
  ArcElement,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  LineController,
  scales,
  Legend,
} from 'chart.js';
import { connect } from 'react-redux';

Chart.register(
  ArcElement,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  LineController,
  scales,
  Legend,
);
import { getDashboard } from './Action';
import withRouter from '../WrapperComponents/withRouter';

function CompanyDashboard(props) {
  const [dashboardData, setDashboardData] = useState({
    keyResultCount: 0,
    objectiveCount: 0,
    employeeCount: 0,
  });

  const { params } = props;
  const { organisationUrl } = params || {};
  const getDashboard = () => {
    props
      ?.getDashboard(organisationUrl)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          setDashboardData(response);
        } else {
          props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };
  useEffect(() => {
    getDashboard();
  }, []);

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

  const data = {
    labels: [
      'Corporate',
      'Customer Service',
      'Engineering',
      'Human Resouces',
      'Manufactoring',
      'Marketing',
      'Quality',
      'Research',
      'Sales',
    ],
    datasets: [
      {
        label: null,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const optionsLine = {
    maintainAspectRatio: true,
    option: {
      Legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  };

  return (
    <>
      <div className='main-dashboard'>
        <div className='title-dashboard'>
          <h5>Company Dashboard</h5>
          <div className='right-dashboard'>
            <Dropdown>
              <Dropdown.Toggle className='department-dropdown' variant='default'>
                All Department
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>All Departments</Dropdown.Item>
                <hr></hr>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'> </i>Corporate
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star  star-icon'></i>Customer Service
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Engineering
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Human Resources
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Manufacturing
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Marketing
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Quality
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Research
                  </Dropdown.Item>
                </div>
                <div className='departments-item'>
                  <Dropdown.Item href='#'>
                    <i className='fa fa-solid fa-star star-icon'></i>Sales
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle className='department-dropdown-right' variant='default'>
                Period
              </Dropdown.Toggle>
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
            </Dropdown>
            <i className='fa fa-download fa-lg download'></i>
          </div>
        </div>
      </div>
      <div className='dashboard-card-container'>
        <div className='topcard'>
          <Card className='topcardsdesign'>
            <Card.Body>
              <div className='inner-body'>
                <Card.Title>{dashboardData.employeeCount}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Users</Card.Subtitle>
              </div>
              <i className='fa fa-solid fa-users fa-5x logo'></i>
            </Card.Body>
          </Card>
          <Card className='topcardsdesign'>
            <Card.Body>
              <div className='inner-body'>
                <Card.Title>{dashboardData.objectiveCount}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Objective</Card.Subtitle>
              </div>
              <i className='fa fa-solid fa-bullseye fa-5x logo'></i>
            </Card.Body>
          </Card>
        </div>
        <div className='topcard'>
          <Card className='topcardsdesign'>
            <Card.Body>
              <div className='inner-body'>
                <Card.Title>{dashboardData.keyResultCount}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Key Results</Card.Subtitle>
              </div>
              <i className='fa fa-solid fa-key fa-5x logo'></i>
            </Card.Body>
          </Card>
          <Card className='topcardsdesign'>
            <Card.Body>
              <div className='inner-body'>
                <Card.Title>4</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Tasks</Card.Subtitle>
              </div>
              <i className='fa fa-solid fa-calendar-check fa-5x logo'></i>
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
            <hr></hr>
            <span className='status'>Not started</span>
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
                  tooltips: {
                    backgroundColor: '#5a6e7f',
                  },
                  Legend: {
                    display: false,
                  },
                }}
              />
            </div>
            <hr></hr>
            <div className='display-status'>
              <span className='status'>Remaining</span>
            </div>
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>OKRs by Department</Card.Subtitle>
            <hr></hr>
            <Line data={data} options={optionsLine} />
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>Individual OKRs by Departments</Card.Subtitle>
            <hr></hr>
            <Line data={data} options={optionsLine} />
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Remaining vs Achieved by Department</Card.Subtitle>
            <hr></hr>
            <Line data={data} options={optionsLine} />
          </Card.Body>
        </Card>
        <Card className='maincard'>
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Individual OKRs by Teams</Card.Subtitle>
            <hr></hr>
            <Card.Text className='text-span'>
              <span> No data are available to display the chart</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
const mapDispatchToProps = {
  getDashboard,
};

export default connect(null, mapDispatchToProps)(withRouter(CompanyDashboard));
