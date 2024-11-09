function solution(n, left, right) {
  var answer = [];
  for (let i = left; i <= right; i++) {
    const value = getValue(i, n);
    answer.push(value);
  }
  return answer;
}

function getValue(i, n) {
  if (i == 0) return 1;

  const 몫 = Math.floor(i / n);
  const 나머지 = i % n;

  if (나머지 <= 몫) return 몫 + 1;
  return 나머지 + 1;
}
