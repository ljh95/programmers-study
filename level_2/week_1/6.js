function solution(n) {
  let answer = 0;
  let i = 1;
  while (true) {
    let startIndex = Math.floor(n / i) - Math.floor(i / 2);

    if (Math.floor(n / i) !== n / i) {
      startIndex += 1;
    }
    if (startIndex < 1) break;

    const arr = Array.from({ length: i }, () => startIndex++);

    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    if (sum === n) answer++;
    i++;
  }
  return answer;
}

console.log(solution(15));
