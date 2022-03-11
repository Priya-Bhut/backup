import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function SideMenu(props) {
  const { setExpendedMenu, showExpandedMenu } = props;
  const [submenu, setSubmenu] = useState('');
  const menuExpandToggle = () => {
    setExpendedMenu(!showExpandedMenu);
  };
  const handleSubMenu = (menuName) => {
    submenu === menuName ? setSubmenu('') : setSubmenu(menuName);
  };
  return (
    <div className={`side-menu ${showExpandedMenu && 'opened'}`}>
      <span className='expander' onClick={() => menuExpandToggle()}>
        <i className={`fa fa-chevron-${showExpandedMenu ? 'left' : 'right'}`} />
      </span>

      <div className='container'>
        <div className={`data-left${showExpandedMenu ? '-opened' : ''}`}>
          <div className='side-menu-item'>
            <NavLink to='/home'>
              <span className='link internal-item-left' onClick={() => handleSubMenu('home')}>
                <i className='fa fa-home' />
              </span>
            </NavLink>
            {!showExpandedMenu && (
              <div className='side-box-container'>
                <span className='side-box-header'>Home</span>
                <Link to='/home/alignments' className='side-box-item'>
                  Alignments
                </Link>
                <Link to='/home/action-center' className='side-box-item'>
                  Action Center
                </Link>
                <Link to='/home/dependencies' className='side-box-item'>
                  Dependencies
                </Link>
                <Link to='/home/notes' className='side-box-item'>
                  Notes
                </Link>
              </div>
            )}
            {showExpandedMenu && (
              <span className='internal-item-right'>
                <span className='bold-font' onClick={() => handleSubMenu('home')}>
                  Home &nbsp;
                  <i className={`fa fa-chevron-${submenu === 'home' ? 'up' : 'down'} arrow`} />
                </span>
                {submenu === 'home' && (
                  <div className='internal-sub-menu'>
                    <Link to='/home/alignments' className='internal-sub-item'>
                      Alignments
                    </Link>
                    <Link to='/home/action-center' className='internal-sub-item'>
                      Action Center
                    </Link>
                    <Link to='/home/dependencies' className='internal-sub-item'>
                      Dependencies
                    </Link>
                    <Link to='/home/notes' className='internal-sub-item'>
                      Notes
                    </Link>
                  </div>
                )}
              </span>
            )}
          </div>
          <div className='side-menu-item'>
            <NavLink to='/okrs'>
              <span className='link internal-item-left' onClick={() => handleSubMenu('okr')}>
                <i className='fa fa-crosshairs' />
              </span>
            </NavLink>
            {!showExpandedMenu && (
              <span className='side-box-container'>
                <span className='side-box-header'>OKRs</span>
                <Link to='/okrs/all' className='side-box-item'>
                  All My OKRs
                </Link>
                <Link to='/okrs/individual' className='side-box-item'>
                  My Individual OKRs
                </Link>
                <Link to='/okrs/developer' className='side-box-item'>
                  Developer OKRs
                </Link>
                <Link to='/okrs/org' className='side-box-item'>
                  {`My Org's OKRs`}
                </Link>
              </span>
            )}
            {showExpandedMenu && (
              <span className='internal-item-right'>
                <span className='bold-font' onClick={() => handleSubMenu('okr')}>
                  OKRs &nbsp;
                  <i className={`fa fa-chevron-${submenu === 'okr' ? 'up' : 'down'} arrow`} />
                </span>
                {submenu === 'okr' && (
                  <div className='internal-sub-menu'>
                    <Link to='/okrs/all' className='internal-sub-item'>
                      All My OKRs
                    </Link>
                    <Link to='/okrs/individual' className='internal-sub-item'>
                      My Individual OKRs
                    </Link>
                    <Link to='/okrs/developer' className='internal-sub-item'>
                      Developer OKRs
                    </Link>
                    <Link to='/okrs/org' className='internal-sub-item'>
                      {`My Org's OKRs`}
                    </Link>
                  </div>
                )}
              </span>
            )}
          </div>
          <div className='side-menu-item'>
            <NavLink to='/tasks'>
              <span className='link internal-item-left' onClick={() => handleSubMenu('task')}>
                <i className='fa fa-tasks' />
              </span>
            </NavLink>
            {!showExpandedMenu && (
              <div className='side-box-container'>
                <span className='side-box-header'>Tasks</span>
                <Link to='/tasks/my-space' className='side-box-item'>
                  My Space
                </Link>
                <Link to='/tasks/my-tasks' className='side-box-item'>
                  My Tasks
                </Link>
                <Link to='/tasks/tasks-others' className='side-box-item'>
                  My Tasks for Others
                </Link>
                <Link to='/tasks/org-tasks' className='side-box-item'>
                  {`My Org's Tasks`}
                </Link>
              </div>
            )}
            {showExpandedMenu && (
              <span className='internal-item-right'>
                <span className='bold-font' onClick={() => handleSubMenu('task')}>
                  Tasks&nbsp;
                  <i className={`fa fa-chevron-${submenu === 'task' ? 'up' : 'down'} arrow`} />
                </span>
                {submenu === 'task' && (
                  <div className='internal-sub-menu'>
                    <Link to='/tasks/my-space' className='internal-sub-item'>
                      My Space
                    </Link>
                    <Link to='/tasks/my-tasks' className='internal-sub-item'>
                      My Tasks
                    </Link>
                    <Link to='/tasks/tasks-others' className='internal-sub-item'>
                      My Tasks for Others
                    </Link>
                    <Link to='/tasks/org-tasks' className='internal-sub-item'>
                      {`My Org's Tasks`}
                    </Link>
                  </div>
                )}
              </span>
            )}
          </div>
          <div className='side-menu-item'>
            <NavLink to='/cfrs'>
              <span className='link internal-item-left' onClick={() => handleSubMenu('cfr')}>
                <i className='fa fa-calendar' />
              </span>
            </NavLink>
            {!showExpandedMenu && (
              <div className='side-box-container'>
                <span className='side-box-header'>CFRs</span>
                <Link to='/cfr/leader' className='side-box-item'>
                  Leader Board
                </Link>
                <Link to='/cfr/awards' className='side-box-item'>
                  My Awards
                </Link>
                <Link to='/cfr/received' className='side-box-item'>
                  Received
                </Link>
                <Link to='/cfr/given' className='side-box-item'>
                  Given
                </Link>
              </div>
            )}
            {showExpandedMenu && (
              <span className='internal-item-right'>
                <span className='bold-font' onClick={() => handleSubMenu('cfr')}>
                  CFRs&nbsp;
                  <i className={`fa fa-chevron-${submenu === 'cfr' ? 'up' : 'down'} arrow`} />
                </span>
                {submenu === 'cfr' && (
                  <div className='internal-sub-menu'>
                    <Link to='/cfr/leader' className='internal-sub-item'>
                      Leader Board
                    </Link>
                    <Link to='/cfr/awards' className='internal-sub-item'>
                      My Awards
                    </Link>
                    <Link to='/cfr/received' className='internal-sub-item'>
                      Received
                    </Link>
                    <Link to='/cfr/given' className='internal-sub-item'>
                      Given
                    </Link>
                  </div>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
