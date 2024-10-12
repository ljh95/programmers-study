function solution(s, n) {
  return s
    .split("")
    .map((a) => getNewStr(a, n))
    .join("");
}

const getNewStr = (a, n) => {
  const step = n % 26;
  if (a === " ") return " ";

  const ascii = a.charCodeAt(0);

  const isUpper = ascii >= 65 && ascii <= 90;

  const sum = ascii + step;
  const nextN = isUpper
    ? sum > 90
      ? 65 + (sum - 91)
      : sum
    : sum > 122
    ? 97 + (sum - 123)
    : sum;

  return String.fromCharCode(nextN);
};

/**
 * 역시 구현문제
 * 아스키 코드값에 대한 사전 지식이 있었다면 더 빨리 풀었을 것 같다.
 * A~Z => 65 ~ 97
 * a~z => 97 ~ 122
 * 문자열 -> 아스키코드값 = a.chartCodeAt(0)
 * 아스키코드값 -> 문자열 = String.fromCharCode(nextN)
 *
 */
