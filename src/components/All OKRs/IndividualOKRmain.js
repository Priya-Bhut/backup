import React, { Component } from "react";

export default class IndividualOKRmain extends Component {
  
  render() {
    return (
      <div>
        {/* ---------------------------------------Child1(Main)------------------------------------------ */}
        <div className="Main-tree"> </div>
        <div className="Child">
          <div className="All-content">
            <div className="Connect-tree"></div>
            <div className="Child-tree"> </div>
            <div className="Name-tree1">
              <i className="fas fa-dot-circle"></i>{" "}
              <span className="Child">OKR Child</span>
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
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  defaultValue="50"
                />{" "}
                <span className="Showrange"> 50% </span>
              </div>
            </div>
            <i
              className="fa fa-plus-circle"
              onClick={(e) => this.props.Subchild(this.props.id)}
            >
              Add New Child
            </i>
          </div>
        </div>
      </div>
    );
  }
}
