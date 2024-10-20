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

// console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));

/**
 * 뭔가 조건 그대로 구현한 느낌이다 별다른 기교 없이
 * 일단은 넘어가자
 * 그래도 뭔가 재귀를 쓰면 좋겟다 싶은 생각이 드는게 좋은 느낌이다.
 */
