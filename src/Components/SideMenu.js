import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const SideMenu = (props) => {
  const { menuType } = props;
  const { organisationUrl } = useParams() || {};
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');
  // const [menuType, setMenuType] = useState(false);
  const onHandleClick = (linkText = '') => {
    if ((dropdown === linkText && isOpen) || !linkText) {
      setIsOpen(false);
    } else {
      setDropdown(linkText);
      setIsOpen(true);
    }
  };
  const handleChange = () => {
    props.handleMenu();
  };
  const handleProfile = () => {
    props?.history(`/${organisationUrl}/my-profile`);
  };
  const handleLogout = () => {
    props?.setIsOpen(true);
  };
  return (
    <div className='sidebar-main'>
      <div className='sidebar-profile-section' onClick={handleChange}>
        <span>{menuType ? <i className='fa fa-chevron-right' /> : <i className='fa fa-chevron-left' />}</span>
      </div>
      {menuType ? (
        <Nav className='flex-column nav-link'>
          {/* Home */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('home')}>
              <p>
                <i className='fa fa-home'></i>
              </p>
            </div>
            {/* <span className='side-menu-box side-menu-box-home'>
              <p className='tooltip-header-text'>Home</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/alignments`}>
                    <span>Alignments</span>
                  </Link>
                  <Link to={`/${organisationUrl}/action-center`}>
                    <span>Action Center</span>
                  </Link>
                  <Link to={`/${organisationUrl}/dependencies`}>
                    <span>Alignments and Dependencies</span>
                  </Link>
                  <Link to={`/${organisationUrl}/notes`}>
                    <span>Notes</span>
                  </Link>
                  <Link to={`/${organisationUrl}/company-dashboard`}>
                    <span>Company Dashboard</span>
                  </Link>
                  <Link to={`/${organisationUrl}/dept-hierarchy`}>
                    <span>Department hierarchy</span>
                  </Link>
                  <Link to={`/${organisationUrl}/news-feed`}>
                    <span>News Feed</span>
                  </Link>
                  <Link to={`/${organisationUrl}/org-hierarchy`}>
                    <span>Organization hierarchy</span>
                  </Link>
                </Nav>
              </div>
            </span> */}
          </div>
          {/* OKRs */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('organization')}>
              <p>
                <i className='fa fa-crosshairs'></i>
              </p>
            </div>
            <span className='side-menu-box side-menu-box-okr'>
              <p className='tooltip-header-text'>OKRs</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/IndividualOKRs`}>
                    <span>All My OKRs</span>
                  </Link>
                  {/* <Link to={`/${organisationUrl}/individual`}>
                    <span>My Individual OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/developer`}>
                    <span>Developer OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/org`}>
                    <span>My Org's OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/watched`}>
                    <span>Watched OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/shared`}>
                    <span>Shared OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/emplyee`}>
                    <span>All Employees' OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/department`}>
                    <span>All Departments' OKRs</span>
                  </Link>
                  <Link to={`/${organisationUrl}/manager`}>
                    <span>Manager's OKRs</span>
                  </Link> */}
                </Nav>
              </div>
            </span>
          </div>
          {/* Tasks */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('task')}>
              <p>
                <i className='fa fa-list'></i>
              </p>
            </div>
            {/*  <span className='side-menu-box side-menu-box-task'>
              <p className='tooltip-header-text'>Tasks</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/my-task`}>
                    <span>My Tasks</span>
                  </Link>
                  <Link to={`/${organisationUrl}/task-others`}>
                    <span>My Tasks for Others</span>
                  </Link>
                  <Link to={`/${organisationUrl}/org-task`}>
                    <span>My Org's Tasks</span>
                  </Link>
                  <Link to={`/${organisationUrl}/empl-task`}>
                    <span>All Employees' Tasks</span>
                  </Link>
                </Nav>
              </div>
            </span> */}
          </div>
          {/* Leave */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('leave')}>
              <p className='my-2'>
                <i className='fa fa-commenting'></i>
              </p>
            </div>
            {/*  <span className='side-menu-box side-menu-box-cfr'>
              <p className='tooltip-header-text'>CFR</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/received`}>
                    <span>Received</span>
                  </Link>
                  <Link to={`/${organisationUrl}/given`}>
                    <span>Given</span>
                  </Link>
                  <Link to={`/${organisationUrl}/award-received`}>
                    <span>Awards Received</span>
                  </Link>
                  <Link to={`/${organisationUrl}/award-given`}>
                    <span>Awards Given</span>
                  </Link>
                </Nav>
              </div>
            </span> */}
          </div>
          <div className='usermenu'>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
              <div className='link-item' onClick={() => onHandleClick('profile')}>
                <p className='my-2'>
                  <i className='fa fa-user-circle'></i>
                </p>
              </div>
              {/*  <span className='side-menu-box side-menu-box-cfr'>
              <p className='tooltip-header-text'>CFR</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/received`}>
                    <span>Received</span>
                  </Link>
                  <Link to={`/${organisationUrl}/given`}>
                    <span>Given</span>
                  </Link>
                  <Link to={`/${organisationUrl}/award-received`}>
                    <span>Awards Received</span>
                  </Link>
                  <Link to={`/${organisationUrl}/award-given`}>
                    <span>Awards Given</span>
                  </Link>
                </Nav>
              </div>
            </span> */}
            </div>
          </div>
          <div className='logout'>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
              <div className='link-item' onClick={() => onHandleClick('logout')}>
                <p className='my-2'>
                  <i className='fas fa-sign-out-alt'></i>
                </p>
              </div>
              {/*  <span className='side-menu-box side-menu-box-cfr'>
              <p className='tooltip-header-text'>CFR</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/received`}>
                    <span>Received</span>
                  </Link>
                  <Link to={`/${organisationUrl}/given`}>
                    <span>Given</span>
                  </Link>
                  <Link to={`/${organisationUrl}/award-received`}>
                    <span>Awards Received</span>
                  </Link>
                  <Link to={`/${organisationUrl}/award-given`}>
                    <span>Awards Given</span>
                  </Link>
                </Nav>
              </div>
            </span> */}
            </div>
          </div>
        </Nav>
      ) : (
        <Nav className='flex-column nav-link p-0'>
          {/* Home */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('home')}>
              <p>
                <i className='fa fa-home'></i>
                <span>Home</span>
              </p>
              {isOpen && dropdown === 'home' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'home' && (
              <Nav className='flex-column dropdown-item internal-menu-dropdown'>
                {/* <Link to={`/${organisationUrl}/alignments`}>
                  <span>Alignments</span>
                </Link>
                <Link to={`/${organisationUrl}/action-center`}>
                  <span>Action Center</span>
                </Link>
                <Link to={`/${organisationUrl}/dependencies`}>
                  <span>Alignments and Dependencies</span>
                </Link>
                <Link to={`/${organisationUrl}/notes`}>
                  <span>Notes</span>
                </Link>
                <Link to={`/${organisationUrl}/company-dashboard`}>
                  <span>Company Dashboard</span>
                </Link>
                <Link to={`/${organisationUrl}/dept-hierarchy`}>
                  <span>Department hierarchy</span>
                </Link>
                <Link to={`/${organisationUrl}/news-feed`}>
                  <span>News Feed</span>
                </Link>
                <Link to={`/${organisationUrl}/org-hierarchy`}>
                  <span>Organization hierarchy</span>
                </Link> */}
              </Nav>
            )}
          </div>
          {/* OKRs */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('organization')}>
              <p>
                <i className='fa fa-crosshairs'></i>
                <span>OKRs</span>
              </p>
              {isOpen && dropdown === 'organization' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'organization' && (
              <Nav className='flex-column dropdown-item internal-menu-dropdown'>
                <Link to={`/${organisationUrl}/IndividualOKRs`}>
                  <span>All My OKRs</span>
                </Link>
                {/* <Link to={`/${organisationUrl}/individual`}>
                  <span>My Individual OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/developer`}>
                  <span>Developer OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/org`}>
                  <span>My Org's OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/watched`}>
                  <span>Watched OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/shared`}>
                  <span>Shared OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/emplyee`}>
                  <span>All Employees' OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/department`}>
                  <span>All Departments' OKRs</span>
                </Link>
                <Link to={`/${organisationUrl}/manager`}>
                  <span>Manager's OKRs</span>
                </Link> */}
              </Nav>
            )}
          </div>
          {/* Tasks */}
          <div className={`dropdown-link ${menuType && 'dropdown-link3'}`}>
            <div className='link-item' onClick={() => onHandleClick('tasks')}>
              <p>
                <i className='fa fa-list'></i>
                <span>Tasks</span>
              </p>
              {isOpen && dropdown === 'tasks' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'tasks' && (
              <Nav className='flex-column dropdown-item internal-menu-dropdown'>
                {/*  <Link to={`/${organisationUrl}/my-task`}>
                  <span>My Tasks</span>
                </Link>
                <Link to={`/${organisationUrl}/task-others`}>
                  <span>My Tasks for Others</span>
                </Link>
                <Link to={`/${organisationUrl}/org-task`}>
                  <span>My Org's Tasks</span>
                </Link>
                <Link to={`/${organisationUrl}/empl-task`}>
                  <span>All Employees' Tasks</span>
                </Link> */}
              </Nav>
            )}
          </div>
          {/* Leave */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('leave')}>
              <p className='my-2'>
                <i className='fa fa-commenting'></i>
                <span>CFR</span>
              </p>
              {isOpen && dropdown === 'leave' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'leave' && (
              <Nav className='flex-column dropdown-item internal-menu-dropdown'>
                {/* <Link to={`/${organisationUrl}/received`}>
                  <span>Received</span>
                </Link>
                <Link to={`/${organisationUrl}/given`}>
                  <span>Given</span>
                </Link>
                <Link to={`/${organisationUrl}/award-received`}>
                  <span>Awards Received</span>
                </Link>
                <Link to={`/${organisationUrl}/award-given`}>
                  <span>Awards Given</span>
                </Link> */}
              </Nav>
            )}
          </div>
          <div className='usermenu'>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
              <div className='link-item' onClick={handleProfile}>
                <p className='my-2'>
                  <i className='fa fa-user-circle' aria-hidden='true'></i>

                  <span>UserProfile</span>
                </p>
              </div>
            </div>
          </div>

          {/*logout*/}
          <div className='logout'>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
              <div className='link-item' onClick={handleLogout}>
                <p className='my-2'>
                  <i className='fas fa-sign-out-alt'></i>

                  <span>Logout</span>
                </p>
              </div>
            </div>
          </div>
        </Nav>
      )}
    </div>
  );
};
export default SideMenu;
