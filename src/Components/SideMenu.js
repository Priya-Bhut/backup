import React, { useState } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SideMenu = (props) => {
  const { params, menuType } = props;
  const { organisationUrl } = params || {};
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

  return (
    <div className='sidebar-main'>
      <div className='sidebar-profile-section' onClick={handleChange}>
        <span>{menuType ? <i className='fa fa-chevron-right' /> : <i className='fa fa-chevron-left' />}</span>
      </div>
      {menuType ? (
        <Nav className='flex-column nav-link'>
          {/* dashBoard */}
          <OverlayTrigger placement='right' overlay={<Tooltip id='button-tooltip'>Dashboard</Tooltip>}>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
              <Link className='my-2' to={`/${organisationUrl}`} onClick={() => onHandleClick()}>
                <i className='fa fa-dashboard' />
              </Link>
            </div>
          </OverlayTrigger>
          {/* Organization */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('organization')}>
              <p>
                <i className='fa fa-building'></i>
              </p>
            </div>
            <span className='side-menu-box t-11'>
              <p className='tooltip-header-text'>Organization</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/department`}>
                    <span>Department</span>
                  </Link>
                  <Link to={`/${organisationUrl}/designation`}>
                    <span>Designation</span>
                  </Link>
                  <Link to={`/${organisationUrl}/employee`}>
                    <span>Employee</span>
                  </Link>
                </Nav>
              </div>
            </span>
          </div>
          <OverlayTrigger placement='right' overlay={<Tooltip id='button-tooltip'>Invite User</Tooltip>}>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`} onClick={() => onHandleClick()}>
              <Link className='my-2' to={`/${organisationUrl}/invite-user`}>
                <i className='fa fa-user'></i>
              </Link>
            </div>
          </OverlayTrigger>
          {/* Leave */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('leave')}>
              <p className='my-2'>
                <i className='fa fa-calendar'></i>
              </p>
            </div>
            <span className='side-menu-box t-28'>
              <p className='tooltip-header-text'>Leave</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/leave`}>Leave Applications</Link>
                  <Link to={`/${organisationUrl}/apply-leave`}>Apply Leave</Link>
                </Nav>
              </div>
            </span>
          </div>
          {/* Files */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('files')}>
              <p className='my-2'>
                <i className='fa fa-copy'></i>
              </p>
            </div>
            <span className='side-menu-box t-37'>
              <p className='tooltip-header-text'>Files</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/organization-file`}>Organizational Files</Link>
                  <Link to={`/${organisationUrl}/hr-document`}>HR Documents</Link>
                </Nav>
              </div>
            </span>
          </div>
          {/* Payroll */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('payroll')}>
              <p className='my-2'>
                <i className='fa fa-dollar' />
              </p>
            </div>
            <span className='side-menu-box t-46'>
              <p className='tooltip-header-text'>Payrun</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/addBankAccount`}>Add Bank Account</Link>
                  <Link to={`/${organisationUrl}/payrun/runPayRoll`}>Pay Run</Link>
                </Nav>
              </div>
            </span>
          </div>
          {/* tasks */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('task')}>
              <p className='my-2'>
                <i className='fa fa-line-chart'></i>
              </p>
            </div>
            <span className='side-menu-box t-53'>
              <p className='tooltip-header-text'>Projects</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/project`}>
                    <span>Projects</span>
                  </Link>
                  <Link to={`/${organisationUrl}/tasks`}>
                    <span>Tasks</span>
                  </Link>
                  <Link to={`/${organisationUrl}/workflow`}>
                    <span>Workflows</span>
                  </Link>
                  <Link to={`/${organisationUrl}/checklist`}>
                    <span>Checklist</span>
                  </Link>
                </Nav>
              </div>
            </span>
          </div>
          {/* Reports */}
          <OverlayTrigger placement='right' overlay={<Tooltip id='button-tooltip'>Reports</Tooltip>}>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
              <Link className='my-2' to={`/${organisationUrl}/reports`} onClick={() => onHandleClick()}>
                <i className='fa fa-file'></i>
              </Link>
            </div>
          </OverlayTrigger>
          <OverlayTrigger placement='right' overlay={<Tooltip id='button-tooltip'>Roles & Permissions</Tooltip>}>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`} onClick={() => onHandleClick()}>
              <Link className='my-2' to={`/${organisationUrl}/role`}>
                <i className='fa fa-shield'></i>
              </Link>
            </div>
          </OverlayTrigger>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('settings')}>
              <p className='my-2'>
                <i className='fa fa-cog'></i>
              </p>
            </div>
            <span className='side-menu-box t-80'>
              <p className='tooltip-header-text'>Settings</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link className='my-2' to={`/${organisationUrl}/settings/statutory-components`}>
                    <span>Statutory Components</span>
                  </Link>
                  <Link to={`/${organisationUrl}/settings/salary-template`}>
                    <span>Salary Template</span>
                  </Link>
                  <Link className='my-2' to={`/${organisationUrl}/settings/orgProfile`}>
                    <span>Organisation Profile</span>
                  </Link>
                  <Link className='my-2' to={`/${organisationUrl}/settings/salary-component`}>
                    <span>Salary Components</span>
                  </Link>
                </Nav>
              </div>
            </span>
          </div>
          <OverlayTrigger placement='right' overlay={<Tooltip id='button-tooltip'>Announcements</Tooltip>}>
            <div className={`dropdown-link ${menuType && 'dropdown-link2'}`} onClick={() => onHandleClick()}>
              <Link className='my-2' to={`/${organisationUrl}/announcement`}>
                <i className='fa fa-bullhorn'></i>
              </Link>
            </div>
          </OverlayTrigger>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('organization')}>
              <p>
                <i className='fa fa-crosshairs'></i>
              </p>
            </div>
            <span className='side-menu-box t-94'>
              <p className='tooltip-header-text'>Trigger</p>
              <div>
                <Nav className='flex-column dropdown-item p-0'>
                  <Link to={`/${organisationUrl}/triggers`}>
                    <span>Triggers</span>
                  </Link>
                  <Link to={`/${organisationUrl}/webhook`}>
                    <span>Webhook</span>
                  </Link>
                </Nav>
              </div>
            </span>
          </div>
        </Nav>
      ) : (
        <Nav className='flex-column nav-link p-0'>
          {/* dashBoard */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <Link className='my-2' to={`/${organisationUrl}`} onClick={() => onHandleClick()}>
              <i className='fa fa-dashboard' />
              <span>Dashboard</span>
            </Link>
          </div>
          {/* Organization */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('organization')}>
              <p>
                <i className='fa fa-building'></i>
                <span>Organization</span>
              </p>
              {isOpen && dropdown === 'organization' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'organization' && (
              <Nav className='flex-column dropdown-item'>
                <Link to={`/${organisationUrl}/department`}>
                  <span>Department</span>
                </Link>
                <Link to={`/${organisationUrl}/designation`}>
                  <span>Designation</span>
                </Link>
                <Link to={`/${organisationUrl}/employee`}>
                  <span>Employee</span>
                </Link>
              </Nav>
            )}
          </div>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`} onClick={() => onHandleClick()}>
            <Link className='my-2' to={`/${organisationUrl}/invite-user`}>
              <i className='fa fa-user'></i>
              <span>Invite&nbsp;User</span>
            </Link>
          </div>
          {/* Leave */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('leave')}>
              <p className='my-2'>
                <i className='fa fa-calendar'></i>
                <span>Leave Tracker</span>
              </p>
              {isOpen && dropdown === 'leave' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'leave' && (
              <Nav className='flex-column dropdown-item'>
                <Link to={`/${organisationUrl}/leave`}>Leave Applications</Link>
                <Link to={`/${organisationUrl}/apply-leave`}>Apply Leave</Link>
              </Nav>
            )}
          </div>
          {/* Files */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('files')}>
              <p className='my-2'>
                <i className='fa fa-copy'></i>
                <span>Files</span>
              </p>
              {isOpen && dropdown === 'files' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'files' && (
              <Nav className='flex-column dropdown-item'>
                <Link to={`/${organisationUrl}/organization-file`}>Organizational Files</Link>
                <Link to={`/${organisationUrl}/hr-document`}>HR Documents</Link>
              </Nav>
            )}
          </div>
          {/* Payroll */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('payroll')}>
              <p className='my-2'>
                <i className='fa fa-dollar' />
                <span>Payroll</span>
              </p>
              {isOpen && dropdown === 'payroll' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'payroll' && (
              <>
                <Nav className='flex-column dropdown-item'>
                  <Link to={`/${organisationUrl}/addBankAccount`}>Add Bank Account</Link>
                </Nav>
                <Nav className='flex-column dropdown-item'>
                  <Link to={`/${organisationUrl}/payrun/runPayRoll`}>Pay Run</Link>
                </Nav>
              </>
            )}
          </div>
          {/* tasks */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('task')}>
              <p className='my-2'>
                <i className='fa fa-line-chart'></i>
                <span>Projects</span>
              </p>
              {isOpen && dropdown === 'task' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'task' && (
              <>
                <Nav className='flex-column dropdown-item'>
                  <Link to={`/${organisationUrl}/tasks`}>
                    <i className='fa fa-tasks'></i>
                    <span>Tasks</span>
                  </Link>
                </Nav>
                <Nav className='flex-column dropdown-item'>
                  <Link to={`/${organisationUrl}/project`}>
                    <i className='fa fa-clipboard'></i>
                    <span>Boards</span>
                  </Link>
                </Nav>
              </>
            )}
          </div>
          {/* <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
          <Link className='my-2' to={`/${organisationUrl}/tasks`} onClick={() => onHandleClick()}>
            <i className='fas fa-tasks'></i>
            <span>Tasks</span>
          </Link>
        </div> */}
          {/* Reports */}
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <Link className='my-2' to={`/${organisationUrl}/reports`} onClick={() => onHandleClick()}>
              <i className='fa fa-file'></i>
              <span>Reports</span>
            </Link>
          </div>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`} onClick={() => onHandleClick()}>
            <Link className='my-2' to={`/${organisationUrl}/role`}>
              <i className='fa fa-shield'></i>
              <span>Roles</span>
            </Link>
          </div>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('settings')}>
              <p className='my-2'>
                <i className='fa fa-cog'></i>
                <span>Settings</span>
              </p>
              {isOpen && dropdown === 'settings' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'settings' && (
              <Nav className='flex-column dropdown-item'>
                <Link className='my-2' to={`/${organisationUrl}/settings/statutory-components`}>
                  <i className='fa fa-book'></i>
                  <span>Statutory Components</span>
                </Link>
                <Link to={`/${organisationUrl}/settings/salary-template`}>
                  <i className='fa fa-align-center'></i>
                  <span>Salary Template</span>
                </Link>
                <Link className='my-2' to={`/${organisationUrl}/settings/orgProfile`}>
                  <i className='fa fa-building'></i>
                  <span>Organisation Profile</span>
                </Link>
                <Link className='my-2' to={`/${organisationUrl}/settings/salary-component`}>
                  <i className='fa fa-book'></i>
                  <span>Salary Components</span>
                </Link>
              </Nav>
            )}
          </div>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`} onClick={() => onHandleClick()}>
            <Link className='my-2' to={`/${organisationUrl}/announcement`}>
              <i className='fa fa-bullhorn'></i>
              <span>Announcements</span>
            </Link>
          </div>
          <div className={`dropdown-link ${menuType && 'dropdown-link2'}`}>
            <div className='link-item' onClick={() => onHandleClick('trigger')}>
              <p>
                <i className='fa fa-crosshairs'></i>
                <span>Trigger</span>
              </p>
              {isOpen && dropdown === 'trigger' ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </div>
            {isOpen && dropdown === 'trigger' && (
              <Nav className='flex-column dropdown-item p-0'>
                <Link to={`/${organisationUrl}/triggers`}>
                  <span>Triggers</span>
                </Link>
                <Link to={`/${organisationUrl}/webhook`}>
                  <span>Webhook</span>
                </Link>
              </Nav>
            )}
          </div>
        </Nav>
      )}
    </div>
  );
};

export default SideMenu;
