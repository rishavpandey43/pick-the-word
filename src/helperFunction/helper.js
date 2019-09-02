export function jumbleWords(array) {
  let tempArray = [...array];
  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }
  if (!matchSameArray(array, tempArray)) {
    return tempArray;
  }
  else
  // handles if jumbled words are same as main array
    return jumbleWords(array);
}

export function matchSameArray(firstArray, secondArray) {
  let checkSame = false;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        checkSame = true;
      }
      else if (firstArray[i] !== secondArray[i]) {
        checkSame = false;
        break;
      }
    }
  }
  else
    checkSame = false;
  return checkSame;
}
