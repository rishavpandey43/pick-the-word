function userAnswer(state = [], action) {
  switch (action.type) {
    case "SAVE USER ANSWER": {
      let tempState = { ...state };
      tempState = action.userAns;
      return tempState;
    }
    case "RESET STATE": {
      let tempState = { ...state };
      tempState = [];
      return tempState;
    }
    default:
      return state;
  }
}

export default userAnswer;
