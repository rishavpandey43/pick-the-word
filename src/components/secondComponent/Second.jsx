import React, { Component } from "react";
import "./second.css";

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfWord: this.props.sentenceData.arrayFormat,
      jumbledWord: this.props.sentenceData.jumbledWord
    };
  }

  render() {

    let jumbledWordOption = [];
    if (this.state.jumbledWord) {
      jumbledWordOption = this.state.jumbledWord.map((option, i) => <span key={i} className="option-box">{option}</span>)
    }

    return (
      <div className="secondComp-main-div mt-2 mb-5">
        <div className="grid-div">
          <div className="grid-box">
            <div className="head-div text-center pt-3">
              <h3>Pick the words in order:</h3>
            </div>
          </div>
          <div className="grid-box">
            <div className="sentence-grid text-center p-3">
              <span className="custom-text">
                {this.props.sentenceData.rawFormat}
              </span>
            </div>
          </div>
          <div className="grid-box">
            <div className="answer-grid"></div>
          </div>
          <div className="grid-box">
            <div className="option-grid text-center pt-3">
              {jumbledWordOption}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Check Answer
          </button>
        </div>
      </div>
    );
  }
}

export default Second;
