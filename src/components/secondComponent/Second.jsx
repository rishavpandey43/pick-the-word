import React, { Component } from "react";
import "./second.css";

class Second extends Component {
  render() {
    return (
      <div className="secondComp-main-div">
        <div className="grid-div">
          <div className="grid-box">
            <div className="head-div text-center pt-3">
              <h4>Pick the words in order:</h4>
            </div>
          </div>
          <div className="grid-box">
            <div className="sentence-grid"></div>
          </div>
          <div className="grid-box">
            <div className="answer-grid"></div>
          </div>
          <div className="grid-box">
            <div className="option-grid"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Second;
