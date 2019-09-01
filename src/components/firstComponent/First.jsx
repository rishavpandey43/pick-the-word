import React, { Component } from "react";

class First extends Component {
  render() {
    return (
      <div className="firstComp-main-div">
        <div className="enter-sentence-div">
          <div className="head-div">
            <h1>Enter the sentence:</h1>
          </div>
          <div className="form-div">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="enter the sentence with space"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default First;
