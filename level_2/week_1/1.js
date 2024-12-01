function solution(s) {
  const arr = s.split(" ").map((a) => Number(a));
  var answer = Math.min(...arr) + " " + Math.max(...arr);
  return answer;
}
