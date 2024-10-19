function solution(babbling) {
  var answer = 0;
  for (const element of babbling) {
    if (compare(element, "") === true) answer++;
  }
  return answer;
}

const compare = (word, prev) => {
  for (const element of ["aya", "ye", "woo", "ma"].filter((s) => s != prev)) {
    if (
      element === word.slice(0, element.length) &&
      word.slice(element.length) === ""
    )
      return true;
    else if (element === word.slice(0, element.length)) {
      return compare(word.slice(element.length), element);
    }
  }
  return false;
};