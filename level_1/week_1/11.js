function solution(n) {
  var answer = 0;
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
  return answer;
}
