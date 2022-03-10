import React, { useState } from "react";
import ProfileDropDown from "./profileDropDown";

function TopNav(props) {
  const { doShrink } = props;
  const [expandProfile, setExpandProfile] = useState(false);
  return (
    <div className={`top-nav ${doShrink ? "shrinked" : null}`}>
      <div className="inner-top">
        <span className="logo-text">BrilworksOKR</span>
        <div
          className="profile-container"
          onClick={() => setExpandProfile(!expandProfile)}
        >
          <span className="profile-name">Brilworks</span>
          <span className="profile-expand">{expandProfile ? "▴" : "▾"}</span>
        </div>
        {expandProfile ? <ProfileDropDown /> : null}
      </div>
      <hr width="100%" />
      <div className="inner-bottom">
        <span className="logo-text">Projects</span>
        <div className="inner-bottom-right">
          <div className="search-container">
            <input
              type="text"
              className="filter-search"
              placeholder="Search..."
            />
            <i className="fa fa-search" />
          </div>
          <button className="project-button">
            <i className="fa fa-plus-square" /> &nbsp; Add Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
