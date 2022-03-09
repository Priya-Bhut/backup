import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CFR from "../initialComponents/cfr";
import HOME from "../initialComponents/home";
import OKR from "../initialComponents/okr";
import TASK from "../initialComponents/task";

function SideMenu(props) {
  const { setterFunction, dataSetter, data } = props;
  const [menuExpand, setMenuExpand] = useState(false);
  const [expandedData, setExpandedData] = useState([]);
  useEffect(() => {
    setExpandedData(data);
  }, [data]);
  setterFunction(menuExpand);
  return (
    <div className={`side-menu ${menuExpand ? "opened" : null}`}>
      <span className="expander" onClick={() => setMenuExpand(!menuExpand)}>
        <i className={`fa fa-chevron-${menuExpand ? "left" : "right"}`} />
      </span>

      <div className="container">
        <div className={`data-left${menuExpand ? "-opened" : ""}`}>
          <span className="side-menu-item">
            <NavLink to="/home" className="link">
              <i className="fa fa-home" />
            </NavLink>
            {menuExpand ? null : (
              <div className="side-box-container one">
                <span className="side-box-header">Home</span>
                <span className="side-box-item">Alignments</span>
                <span className="side-box-item">Action Center</span>
                <span className="side-box-item">Dependencies</span>
                <span className="side-box-item">Notes</span>
              </div>
            )}
          </span>
          <span className="side-menu-item">
            <NavLink to="/okrs" className="link">
              <i className="fa fa-crosshairs" />
            </NavLink>
            {menuExpand ? null : (
              <div className="side-box-container two">
                <span className="side-box-header">OKRs</span>
                <span className="side-box-item">All My OKRs</span>
                <span className="side-box-item">My Individual OKRs</span>
                <span className="side-box-item">Developer OKRs</span>
                <span className="side-box-item">My Org's OKRs</span>
              </div>
            )}
          </span>
          <span className="side-menu-item">
            <NavLink to="/tasks" className="link">
              <i className="fa fa-tasks" />
            </NavLink>
            {menuExpand ? null : (
              <div className="side-box-container three">
                <span className="side-box-header">Tasks</span>
                <span className="side-box-item">My Space</span>
                <span className="side-box-item">My Tasks</span>
                <span className="side-box-item">My Tasks for Others</span>
                <span className="side-box-item">My Org's Tasks</span>
              </div>
            )}
          </span>
          <span className="side-menu-item">
            <NavLink to="/cfrs" className="link">
              <i className="fa fa-calendar" />
            </NavLink>
            {menuExpand ? null : (
              <div className="side-box-container four">
                <span className="side-box-header">CFRs</span>
                <span className="side-box-item">Leader Board</span>
                <span className="side-box-item">My Awards</span>
                <span className="side-box-item">Received</span>
                <span className="side-box-item">Given</span>
              </div>
            )}
          </span>
        </div>
        {menuExpand ? (
          <div className="data-left">
            <Route exact path="/home">
              <HOME dataSetter={dataSetter} />
            </Route>
            <Route exact path="/okrs">
              <OKR dataSetter={dataSetter} />
            </Route>
            <Route exact path="/tasks">
              <TASK dataSetter={dataSetter} />
            </Route>
            <Route exact path="/cfrs">
              <CFR dataSetter={dataSetter} />
            </Route>
            {expandedData.map((item) => (
              <span className="side-menu-item">{item}</span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SideMenu;
