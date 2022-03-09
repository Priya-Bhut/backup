import React from "react";
import "../style/IndividualOKR.css";

export default function IndividualORKchild() {
  return (
    <div>
      {/* ---------------------------------------Subchild(Child1)------------------------------------------ */}
      <div className="Main-tree1"> </div>
      <div className="Child">
        <div className="All-content">
          <div className="Connect-tree1-1"></div>
          <div className="Connect-tree1"></div>
          <div className="Child-tree1"> </div>
          <div className="Name-tree2">
            <i className="fas fa-dot-circle"></i>{" "}
            <span className="Child">OKR Sub Child</span>
            <div className="Note-alignment">
              <i className="far fa-sticky-note"></i>
              <i className="far fa-sticky-note"></i>
              <i className="far fa-sticky-note"></i>
            </div>
          </div>
          <div className="Dateandtime">
            <i className="far fa-calendar-alt"></i> &nbsp;
            <i className="fas fa-user"></i>
          </div>{" "}
          <div className="Track">% Percentage Tracker</div>
          <div className="Progress">
            <div className="Range-slider">
              <input type="range" min="0" max="100" step="5" defulatValue="50" />{" "}
              <span className="Showrange"> 50% </span>
            </div>
          </div>
          {/* <i className="fa fa-plus-circle"></i> */}
        </div>
      </div>
    </div>
  );
}
