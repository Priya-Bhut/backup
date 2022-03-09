import React, { Component } from "react";
import "../style/IndividualOKR.css";
import IndividualOKRmain from "./IndividualOKRmain";
import IndividualORKchild from "./IndividualORKchild";
/* import IndividualOKRchild from "./IndividualORKchild"; */

export default class IndividualOKR extends Component {
  constructor() {
    super();
    this.state = {
      Newchild: [],
      id: 0,
    };
  }
  Addnewchild = () => {
    const { Newchild } = this.state;
    const Addchild = (
      <IndividualOKRmain id={this.state.id} Subchild={this.Subchild} />
    );
    this.setState({
      Newchild: Newchild.concat({ main: Addchild, child: [] }),
      id: this.state.id + 1,
    });
    console.log(this.state.Newchild);
  };
  Subchild = (index) => {
    console.log("hii");
    const { Newchild } = this.state;
    const AddSubchild = <IndividualORKchild />;
    Newchild[index] = {
      ...Newchild[index],
      child: [...Newchild[index].child, AddSubchild],
    };
    this.setState({
      Newchild: Newchild,
    });
  };
  render() {
    /* console.log("main: ", this.state.Newchild); */
    return (
      <div className="Main">
        <div className="MainOKR">
          {/* ---------------------------------------Main------------------------------------------ */}
          <div className="Parent">
            <div className="All-content">
              <div className="Name-tree">
                <i className="fas fa-dot-circle"></i> <span>OKR</span>
                <div className="Note-alignment">
                  <i className="far fa-sticky-note"></i>
                  <i className="far fa-sticky-note"></i>
                  <i className="far fa-sticky-note"></i>
                </div>
              </div>
              <div className="Dateandtime">
                <i className="far fa-calendar-alt"></i> &nbsp;
                {/* <i className="far fa-circle"></i> */}
                <i className="fas fa-user"></i>
              </div>{" "}
              <div className="Track"></div>
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
            </div>
          </div>
          {this.state.Newchild.map((Addchild, index) => {
            return (
              <div key={index}>
                {Addchild.main}
                {Addchild.child.map((abc, index) => (
                  <div key={index}>{abc}</div>
                ))}
              </div>
            );
          })}
          <i
            className="fa fa-plus-circle "
            onClick={(e) => this.Addnewchild(e)}
          >
            Add New Key Result
          </i>
        </div>
      </div>
    );
  }
}
