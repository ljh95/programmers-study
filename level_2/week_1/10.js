function solution(brown, yellow) {
  let answer = [];
  let _sum = brown + yellow;

  for (let i = 3; i <= Math.floor(_sum / 2); i++) {
    if (i * i > _sum) break;
    if (_sum % i === 0) {
      let count_brown = Math.floor(_sum / i);
      let count_yellow = i;
      let d_y = (count_brown - 2) * (count_yellow - 2);
      let d_b = count_brown * count_yellow - d_y;

      if (d_b === brown && d_y === yellow) {
        answer.push(count_brown);
        answer.push(count_yellow);
        break;
      }
    }
  }

  return answer;
}
