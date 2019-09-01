import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "./reduxConfig/actions/actionCreators";

import App from "./App";

function mapStateToProps(state) {
  return {
    sentenceData: state.sentenceData,
    userAnswer: state.userAnswer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ReduxApp;
