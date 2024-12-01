function solution(progresses, speeds) {
  let answer = [];
  const result = [];
  for (let i = 0; i < progresses.length; i++) {
    const p = progresses[i];
    const s = speeds[i];
    const a = 100 - p;
    r = Math.ceil(a / s);
    result.push(r);
  }

  while (result.length > 0) {
    let count = 1;
    const a = result.shift();

    while (result[0] <= a) {
      result.shift();
      count++;
    }
    answer.push(count);
  }

  return answer;
}
/**
 * 쉽긴 했는데 아마 다른분들은 엄청 줄일려고 노력했겠지??
 * 일단 쉽게 풀었다는거, 시간복잡도가 아직은 염려할 수준이 아니라는거
 * 일단 내가 집중하는 포인트는 개선보다는 풀 수 있는 능력이라는거 상기하며 넘어가자.
 */

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
