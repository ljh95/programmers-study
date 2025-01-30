function solution(m, n, board) {
  const set = new Set();
  const list = board.map((v) => v.split(""));

  function allScan(list) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (scan(i, j, list)) {
          set.add(`${i},${j}`);
          set.add(`${i},${j + 1}`);
          set.add(`${i + 1},${j}`);
          set.add(`${i + 1},${j + 1}`);
        }
      }
    }
  }
  let count = 0;

  while (true) {
    allScan(list);

    if (set.size === 0) break;

    console.log(set);
    console.log(list);
    count += set.size;

    set.values().forEach((v) => {
      const [i, j] = v.split(",").map((a) => Number(a));
      list[i][j] = 0;
    });

    set.clear();
  }

  return count;
}

function scan(i, j, board) {
  const curCharacter = board[i][j];
  if (curCharacter === 0) return false;

  const m = board.length;
  const n = board[0].length;

  const dx = [0, 0, 1, 1];
  const dy = [0, 1, 0, 1];

  for (let k = 0; k < 4; k++) {
    let nx = i + dx[k];
    let ny = j + dy[k];

    // 0을 만나면 현재 검사하는 방향(dx[k], dy[k])으로 계속 이동
    while (nx < m && ny < n && board[nx][ny] === 0) {
      nx += dx[k];
      ny += dy[k];
    }

    if (nx >= m || ny >= n) return false;
    if (board[nx][ny] !== curCharacter) return false;
  }

  return true;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
