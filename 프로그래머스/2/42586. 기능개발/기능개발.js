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