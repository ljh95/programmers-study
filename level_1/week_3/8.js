function solution(s, skip, index) {
  const skip_ascii_arr = skip.split("").map((s) => s.charCodeAt());
  return s
    .split("")
    .map((v) => encrpyt(v, index, skip_ascii_arr))
    .join("");
}

const encrpyt = (a, index, skip_ascii_arr) => {
  let ascii = a.charCodeAt(a);
  for (let i = 0; i < index; i++) {
    ascii = convert(ascii + 1);
    while (skip_ascii_arr.includes(ascii)) {
      ascii = convert(ascii + 1);
    }
  }

  return String.fromCharCode(ascii);
};

const convert = (ascii) => {
  return ascii > 122 ? ((ascii - 122) % 26) + 96 : ascii;
};

// console.log(solution("aukks", "wbqd", 5));
console.log(solution("z", "a", 1));
console.log(solution("zzzzzz", "abcdefghijklmnopqrstuvwxy", 6));

/**
 * 반례가 큰 도움이 되었다.
 * 중간중간 아스키값을 97 초반곳으로 이동해야한다는 사실을 놓쳤다.
 * 간단해보였지만, 실수가 아쉬운 부분이었다.
 * 왜 난 반례를 생각해보지 못했을까?
 * 중간중간에 print를 찍어보았다면 알 수 없었겠지
 * 아스키를 더하는 과정에서 넘어갈 수 있음을 기억하자.
 *
 */
