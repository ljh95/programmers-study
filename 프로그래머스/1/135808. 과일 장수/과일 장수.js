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
