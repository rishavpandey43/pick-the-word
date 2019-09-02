import React, { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  saveSentence = (e) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.props.saveSentence(this.state.inputValue);
      this.props.splitTheSentence();
      this.props.jumbleWords();
    }
  }

  render() {
    return (
      <div className="firstComp-main-div mb-3">
        <div className="enter-sentence-div">
          <div className="head-div">
            <h1>Enter the sentence:</h1>
          </div>
          <div className="form-div">
            <form onSubmit={this.saveSentence.bind(null)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter the words with space to create the question"
                  value={this.state.inputValue}
                  onChange={this.handleInputChange.bind(null)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit and Start Test
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default First;
