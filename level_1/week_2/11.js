function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    let a = array.slice(command[0] - 1, command[1]);
    a.sort((a, b) => a - b);
    answer.push(a[command[2] - 1]);
  }
  return answer;
}
// prev
