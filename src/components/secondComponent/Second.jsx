import React, { Component } from "react";
import "./second.css";

import * as helper from "../../helperFunction/helper";

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnswer: false,
      arrayOfWord: this.props.sentenceData.arrayFormat,
      jumbledWord: this.props.sentenceData.jumbledWord,
      tempJumbledWord: this.props.sentenceData.jumbledWord,
      userAnswer: this.props.userAnswer,
      tempUserAnswer: this.props.userAnswer,
      isAnswerCorrect: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      arrayOfWord: nextProps.sentenceData.arrayFormat,
      jumbledWord: nextProps.sentenceData.jumbledWord,
      tempJumbledWord: nextProps.userAnswer.length ===0
        ? nextProps.sentenceData.jumbledWord
        : [],
      userAnswer: nextProps.userAnswer,
      tempUserAnswer: nextProps.userAnswer
      // isAnswerCorrect: nextProps.sentenceData.jumbledWord.length !== 0 ? false : true
    });
  }

  addOptionToBox = option => {
    let optionIndex = this.state.tempJumbledWord.indexOf(option);
    let tempUserAnswer = [...this.state.tempUserAnswer];
    let tempJumbledWord = [...this.state.tempJumbledWord];
    tempUserAnswer.push(option);
    tempJumbledWord.splice(optionIndex, 1);
    this.setState({ tempUserAnswer, tempJumbledWord });
  };

  saveAnswer = () => {
    if (this.state.tempUserAnswer.length === this.state.arrayOfWord.length) {
      this.setState({ checkAnswer: true });
      this.props.saveUserAnswer(this.state.tempUserAnswer);
      this.setState({
        isAnswerCorrect: helper.matchSameArray(
          this.state.arrayOfWord,
          this.state.tempUserAnswer
        )
      });
    } else alert("Fill all the option to submit answer");
  };

  render() {
    let jumbledWordOption = [];
    let userAnswerOption = [];
    if (this.state.tempJumbledWord) {
      jumbledWordOption = this.state.tempJumbledWord.map((option, i) => (
        <span
          key={i}
          className="option-box"
          onClick={this.addOptionToBox.bind(null, option)}
        >
          {option}
        </span>
      ));
    }

    userAnswerOption = this.state.tempUserAnswer.map((option, i) => (
      <span
        key={i}
        className="option-box"
        onClick={this.addOptionToBox.bind(null, option)}
      >
        {option}
      </span>
    ));

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
            <div className="answer-grid text-center pt-3">
              {userAnswerOption}
            </div>
          </div>
          <div className="grid-box">
            <div className="option-grid text-center pt-3">
              {this.state.userAnswer.length === 0 ? jumbledWordOption : ""}
              {this.state.checkAnswer && this.state.userAnswer.length !== 0 ? (
                this.state.isAnswerCorrect ? (
                  <span className="result-box bg-success">Correct Answer :)</span>
                ) : (
                  <span className="result-box bg-danger">Wrong Answer :(</span>
                )
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-danger mt-3"
            onClick={this.props.resetState}
          >
            Reset Question
          </button>
          <button
            type="submit"
            className="btn btn-success ml-3 mt-3"
            onClick={this.saveAnswer.bind(null)}
          >
            Check Answer
          </button>
        </div>
      </div>
    );
  }
}

export default Second;
