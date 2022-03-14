import React from 'react';
import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

const TopNavbar = (props) => {
  const { params } = props;
  const { organisationUrl } = params || {};
  const handleProfile = () => {
    props?.history(`/${organisationUrl}/my-profile`);
  };
  const handleLogout = () => {
    props?.setIsOpen(true);
  };
  return (
    <>
      <Navbar className='upper-navbar'>
        <div className='nav-container'>
          <Navbar.Brand href=''>BrilOKR</Navbar.Brand>

          <div className='top-nav-dropdown'>
            <DropdownButton
              variant='none'
              // className='fa fa-user'
              // aria-hidden='true'
              alignright='true'
              title='Brilworks'
              id='dropdown-menu-align-right'
            >
              <Dropdown.Item onClick={handleProfile}>
                <div className='workflow-options'>
                  <i className='fa fa-user-circle	' />
                  My profile
                </div>
              </Dropdown.Item>

              <Dropdown.Item onClick={handleLogout}>
                <div className='workflow-options'>
                  <i className='fa fa-sign-out' />
                  Logout
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default TopNavbar;
