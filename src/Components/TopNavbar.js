import React, { useState } from 'react';
import ProfileDropDown from './RightBody/ProfileDropDown';

function TopNavbar(props) {
  const { doShrink } = props;
  const [expandProfile, setExpandProfile] = useState(false);
  const profileDropDownExpand = () => {
    setExpandProfile(!expandProfile);
  };
  return (
    <div className={`top-nav ${doShrink && 'shrinked'}`}>
      <div className='inner-top'>
        <span className='logo-text'>BrilworksOKR</span>
        <div className='profile-container' onClick={() => profileDropDownExpand()}>
          <span className='profile-name'>Brilworks</span>
          <span className='profile-expand'>
            {expandProfile ? <i className='fa fa-caret-up' /> : <i className='fa fa-caret-down' />}
          </span>
        </div>
        {expandProfile && <ProfileDropDown />}
      </div>
      <hr width='100%' />
      <div className='inner-bottom'>
        <span className='logo-text'>Projects</span>
        <div className='inner-bottom-right'>
          <div className='search-container'>
            <input type='text' className='filter-search' placeholder='Search...' />
            <i className='fa fa-search' />
          </div>
          <button className='project-button'>
            <i className='fa fa-plus-square' /> &nbsp; Add Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
