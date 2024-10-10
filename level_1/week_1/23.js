function solution(n) {
  var answer = "";
  for (let i = 0; i < Math.floor(n / 2); i++) {
    answer += "수박";
  }
  if (n % 2 !== 0) {
    answer += "수";
  }
  return answer;
}
