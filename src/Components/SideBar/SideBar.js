import React, { useState } from 'react';
import './SideBarToggle';
import SideBarToggle from './SideBarToggle';
function SideBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <div className='container'>
        <button className='dashboardBtn' type='submit' onClick={toggleSideBar}>
          Submit
        </button>
        {isOpen && (
          <SideBarToggle handleAlert={props?.handleAlert} setIsOpen={setIsOpen} toggleSideBar={toggleSideBar} />
        )}
      </div>
    </div>
  );
}
export default SideBar;
