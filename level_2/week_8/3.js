/**
 * 1. 시작점에서 출발해서 도착점까지 가야해
 * 2. 상, 하, 좌, 우로만 이동할 수 있어
 * 3. 최단 거리를 구해야하 하니까 몇 칸 갔는지 세야해
 */

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 상하좌우 방향 정의
  const dx = [-1, 1, 0, 0]; // X축 이동
  const dy = [0, 0, -1, 1]; // Y축 이동

  // 발자국 배열 만들기
  const visited = Array.from(Array(n), () => Array(m).fill(-1));
  visited[0][0] = 1; // 시작점 표시

  // 대기열 만들기
  const queue = [{ x: 0, y: 0 }];

  // "탐색" 로직 추가하기
  while (queue.length > 0) {
    const current = queue.shift();

    // 4방향 확인
    for (let i = 0; i < 4; i++) {
      const nx = current.x + dx[i];
      const ny = current.y + dy[i];

      // 지도 범위 체크
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

      // 벽이거나 이미 가본 곳이면 스킵
      if (maps[ny][nx] === 0 || visited[ny][nx] !== -1) continue;

      // 새로운 위치 표시하고 대기열에 추가
      visited[ny][nx] = visited[current.y][current.x] + 1;
      queue.push({ x: nx, y: ny });
    }
  }

  return visited[n - 1][m - 1];
}
