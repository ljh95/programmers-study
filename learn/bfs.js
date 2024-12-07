function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const steps = Array.from(Array(n), () => Array(m).fill(-1));
  steps[0][0] = 1;

  const checkList = [{ x: 0, y: 0 }];

  while (checkList.length > 0) {
    const current = checkList.shift();

    for (let i = 0; i < 4; i++) {
      const nx = current.x + dx[i];
      const ny = current.y + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (maps[ny][nx] === 1 && steps[ny][nx] === -1) {
          steps[ny][nx] = steps[current.y][current.x] + 1;
          checkList.push({ x: nx, y: ny });
        }
      }
    }
  }

  return -1;
}
