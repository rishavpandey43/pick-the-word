// save sentence
export function saveSentence(sentenceData) {
  return {
    type: "SAVE SENTENCE",
    sentenceData
  };
}

// split the sentence
export function splitTheSentence() {
  return {
    type: "SPLIT THE SENTENCE"
  };
}

// jumble the word
export function jumbleWords() {
  return {
    type: "JUMBLE THE WORD"
  };
}

// check correct answer
export function saveUserAnswer(userAns) {
  return {
    type: "SAVE USER ANSWER",
    userAns
  };
}

export function resetState() {
  return {
    type: "RESET STATE"
  };
}
