function solution(k, m, score) {
  return score
    .sort((a, b) => a - b)
    .slice(score.length % m)
    .reduce((acc, cur, i) => {
      if (i % m === 0) {
        return acc + cur * m;
      }
      return acc;
    }, 0);
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
