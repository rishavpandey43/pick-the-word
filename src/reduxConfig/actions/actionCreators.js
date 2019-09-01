// save sentence
export function saveSenence(sentence) {
  return {
    type: "SAVE SENTENCE",
    sentence
  }
}

// split the sentence
export function splitTheSentence(sentence) {
  return {
    type: "SPLIT THE SENTENCE",
    sentence
  }
}

// jumble the word
export function jumbleWords(wordsArray) {
  return {
    type: "JUMBLE THE WORD",
    wordsArray
  }
}

// check correct answer
export function checkUserAnswer(originalAns, userAns) {
  return {
    type: "CHECK USER ANSWER",
    originalAns,
    userAns
  }
}
