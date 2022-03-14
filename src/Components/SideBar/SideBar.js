import React, { useState } from 'react';
import './SideBarToggle';
import SideBarToggle from './SideBarToggle';
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <div className='container'>
<<<<<<< HEAD
        <button className='dashboardBtn' type='submit' onClick={toggleSideBar}>
=======
        <button variant='primary' className='dashboardBtn' type='submit' onClick={toggleSideBar}>
>>>>>>> 424717e1a17aa7215ae94347f4f1d9649a91feb2
          Submit
        </button>
        {isOpen && <SideBarToggle setIsOpen={setIsOpen} toggleSideBar={toggleSideBar} />}
      </div>
    </div>
  );
}
export default SideBar;
