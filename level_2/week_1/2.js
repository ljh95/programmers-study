function solution(s) {
  let result = 0;
  for (v of s) {
    result += v === "(" ? 1 : -1;
    if (result < 0) return false;
  }
  return result === 0;
}
