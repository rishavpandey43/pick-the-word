import { createStore } from "redux";

import rootReducer from "./reducers/index";

const defaultState = {
  sentenceData: {
    rawFormat: "",
    arrayFormat: [],
    jumbledWord: []
  },
  userAnswer: []
};

const store = createStore(rootReducer, defaultState);

export default store;
