import React, { useState } from "react";
import "./SideBar.css";
import "./SideBarToggle";
import SideBarToggle from "./SideBarToggle";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <div className="container">
        <button
          variant="primary"
          className="dashboardBtn"
          type="submit"
          onClick={toggleSideBar}
        >
          Submit
        </button>
        {isOpen && (
          <SideBarToggle setIsOpen={setIsOpen} toggleSideBar={toggleSideBar} />
        )}
      </div>

      
    </div>
  );
}
export default SideBar;
