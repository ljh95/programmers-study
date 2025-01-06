function solution(x, y, n) {
  if (x === y) return 0;

  const visited = new Set([x]);
  const queue = [[x, 0]];

  function fn(v, c) {
    if (v === y) return c;
    if (v > y) return;

    for (const a of [v + n, v * 2, v * 3]) {
      if (a === y) return c + 1;
      if (a < y && !visited.has(a)) {
        visited.add(a);
        queue.push([a, c + 1]);
      }
    }
  }

  let idx = 0; // idx를 써야 풀수 있는 문제
  while (idx < queue.length) {
    const [a, b] = queue[idx++];
    const result = fn(a, b);
    if (result > 0) {
      return result;
    }
  }

  return -1;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));

/**
 * 접근은 좋았으나, bfs를 쓴다는걸 push, pop을 해서 사실상 dfs를 하고있었음
 * 처음부터 같을 확률을 간과함
 * shift대신에 idx를 하면 더 효율적임,
 * visited는 set를 이용하면 더 좋음
 */
