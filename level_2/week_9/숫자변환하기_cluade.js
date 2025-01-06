function solution(x, y, n) {
  if (x === y) return 0;

  const visited = new Set([x]);
  const queue = [[x, 0]];
  let idx = 0; // queue의 현재 위치를 추적

  while (idx < queue.length) {
    const [curr, count] = queue[idx++];
    const nextCount = count + 1;

    // 가능한 다음값들을 계산
    const next1 = curr + n;
    const next2 = curr * 2;
    const next3 = curr * 3;

    for (const next of [next1, next2, next3]) {
      if (next === y) return nextCount;

      if (next < y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, nextCount]);
      }
    }
  }

  return -1;
}
