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
  const [submenu, setSubmenu] = useState(0);
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
          <NavLink to="/home" className="side-menu-item">
            <span
              className="link internal-item-left"
              onClick={() => {
                if (submenu !== 0 && submenu === 1) setSubmenu(0);
                else setSubmenu(1);
              }}
            >
              <i className="fa fa-home" />
            </span>
            {menuExpand ? null : (
              <div className="side-box-container">
                <span className="side-box-header">Home</span>
                <span className="side-box-item">Alignments</span>
                <span className="side-box-item">Action Center</span>
                <span className="side-box-item">Dependencies</span>
                <span className="side-box-item">Notes</span>
              </div>
            )}
            {menuExpand ? (
              <span className="internal-item-right">
                <span
                  className="bold-font"
                  onClick={() => {
                    if (submenu !== 0 && submenu === 1) setSubmenu(0);
                    else setSubmenu(1);
                  }}
                >
                  Home &nbsp;
                  <i
                    className={`fa fa-chevron-${
                      submenu === 1 ? "up" : "down"
                    } arrow`}
                  />
                </span>
                {submenu === 1 ? (
                  <div className="internal-sub-menu">
                    {expandedData.map((items) => (
                      <span className="internal-sub-item">{items}</span>
                    ))}
                  </div>
                ) : null}
              </span>
            ) : null}
          </NavLink>
          <NavLink to="/okrs" className="side-menu-item">
            <span
              className="link internal-item-left"
              onClick={() => {
                if (submenu !== 0 && submenu === 2) setSubmenu(0);
                else setSubmenu(2);
              }}
            >
              <i className="fa fa-crosshairs" />
            </span>
            {menuExpand ? null : (
              <div className="side-box-container">
                <span className="side-box-header">OKRs</span>
                <span className="side-box-item">All My OKRs</span>
                <span className="side-box-item">My Individual OKRs</span>
                <span className="side-box-item">Developer OKRs</span>
                <span className="side-box-item">My Org's OKRs</span>
              </div>
            )}
            {menuExpand ? (
              <span className="internal-item-right">
                <span
                  className="bold-font"
                  onClick={() => {
                    if (submenu !== 0 && submenu === 2) setSubmenu(0);
                    else setSubmenu(2);
                  }}
                >
                  OKRs &nbsp;
                  <i
                    className={`fa fa-chevron-${
                      submenu === 2 ? "up" : "down"
                    } arrow`}
                  />
                </span>
                {submenu === 2 ? (
                  <div className="internal-sub-menu">
                    {expandedData.map((items) => (
                      <span className="internal-sub-item">{items}</span>
                    ))}
                  </div>
                ) : null}
              </span>
            ) : null}
          </NavLink>
          <NavLink to="/tasks" className="side-menu-item">
            <span
              className="link internal-item-left"
              onClick={() => {
                if (submenu !== 0 && submenu === 3) setSubmenu(0);
                else setSubmenu(3);
              }}
            >
              <i className="fa fa-tasks" />
            </span>
            {menuExpand ? null : (
              <div className="side-box-container">
                <span className="side-box-header">Tasks</span>
                <span className="side-box-item">My Space</span>
                <span className="side-box-item">My Tasks</span>
                <span className="side-box-item">My Tasks for Others</span>
                <span className="side-box-item">My Org's Tasks</span>
              </div>
            )}
            {menuExpand ? (
              <span className="internal-item-right">
                <span
                  className="bold-font"
                  onClick={() => {
                    if (submenu !== 0 && submenu === 3) setSubmenu(0);
                    else setSubmenu(3);
                  }}
                >
                  Tasks&nbsp;
                  <i
                    className={`fa fa-chevron-${
                      submenu === 3 ? "up" : "down"
                    } arrow`}
                  />
                </span>
                {submenu === 3 ? (
                  <div className="internal-sub-menu">
                    {expandedData.map((items) => (
                      <span className="internal-sub-item">{items}</span>
                    ))}
                  </div>
                ) : null}
              </span>
            ) : null}
          </NavLink>
          <NavLink to="/cfrs" className="side-menu-item">
            <span
              className="link internal-item-left"
              onClick={() => {
                if (submenu !== 0 && submenu === 4) setSubmenu(0);
                else setSubmenu(4);
              }}
            >
              <i className="fa fa-calendar" />
            </span>
            {menuExpand ? null : (
              <div className="side-box-container">
                <span className="side-box-header">CFRs</span>
                <span className="side-box-item">Leader Board</span>
                <span className="side-box-item">My Awards</span>
                <span className="side-box-item">Received</span>
                <span className="side-box-item">Given</span>
              </div>
            )}
            {menuExpand ? (
              <span className="internal-item-right">
                <span
                  className="bold-font"
                  onClick={() => {
                    if (submenu !== 0 && submenu === 4) setSubmenu(0);
                    else setSubmenu(4);
                  }}
                >
                  CFRs&nbsp;
                  <i
                    className={`fa fa-chevron-${
                      submenu === 4 ? "up" : "down"
                    } arrow`}
                  />
                </span>
                {submenu === 4 ? (
                  <div className="internal-sub-menu">
                    {expandedData.map((items) => (
                      <span className="internal-sub-item">{items}</span>
                    ))}
                  </div>
                ) : null}
              </span>
            ) : null}
          </NavLink>
          <Route exact path="/Home">
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
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
