import * as helper from "../../helperFunction/helper";

function sentenceData(state = [], action) {
  switch (action.type) {
    case "SAVE SENTENCE": {
      let tempState = { ...state };
      tempState.rawFormat = action.sentenceData;
      return tempState;
    }
    case "SPLIT THE SENTENCE": {
      let tempState = { ...state };
      tempState.arrayFormat = tempState.rawFormat.split(" ");
      return tempState;
    }
    case "JUMBLE THE WORD": {
      let tempState = { ...state };
      tempState.jumbledWord = helper.jumbleWords(tempState.arrayFormat);
      return tempState;
    }
    default:
      return state;
  }
}

export default sentenceData;
