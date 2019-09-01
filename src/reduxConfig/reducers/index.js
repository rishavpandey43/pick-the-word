import { combineReducers } from "redux";

import sentenceData from "./sentenceData";
import userAnswer from "./userAnswer";

const rootReducer = combineReducers({sentenceData, userAnswer});

export default rootReducer;
