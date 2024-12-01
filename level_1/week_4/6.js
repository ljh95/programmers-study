function solution(park, routes) {
  const parks = park.map((p) => p.split(""));
  let cur = findStart(parks);

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (isOutWall(cur, route, parks)) {
      continue;
    }
    if (isMatchObstacle(cur, route, parks)) {
      continue;
    }

    cur = move(cur, route);
  }
  return cur;
}

function findStart(parks) {
  for (let i = 0; i < parks.length; i++) {
    for (let j = 0; j < parks.length; j++) {
      if (parks[i][j] === "S") return [i, j];
    }
  }
}

function isOutWall(cur, route, parks) {
  const [n_h, n_w] = move(cur, route);
  const h_len = parks.length;
  const w_len = parks[0].length;
  if (n_h < 0 || n_w < 0 || n_h >= h_len || n_w >= w_len) return true;
  return false;
}

function isMatchObstacle(cur, route, parks) {
  const [direction, distance] = route.split(" ");
  let [h, w] = cur;

  for (let i = 0; i < Number(distance); i++) {
    switch (direction) {
      case "N":
        h -= 1;
        break;
      case "W":
        w -= 1;
        break;
      case "S":
        h += 1;
        break;
      case "E":
        w += 1;
        break;
    }
    if (parks[h][w] === "X") return true;
  }
  return false;
}

function move(cur, route) {
  const [direction, distance] = route.split(" ");
  const d = Number(distance);
  let [h, w] = cur;
  switch (direction) {
    case "N":
      h -= d;
      break;
    case "W":
      w -= d;
      break;
    case "S":
      h += d;
      break;
    case "E":
      w += d;
      break;
  }

  return [h, w];
}

/**
 * 사실 중복제거도 못했고..귀찮아서
 * 한번에 통과되지 못하고 한 10번 테스트하면서 버그를 잡았던거 같다.
 * distance를 숫자로 치환하는걸 깜빡했고
 * park를 parks로 다시 변경하는것도 깜빡했고
 * 벽을 넘어서는것도 h, w를 따로 계산하는것도 잊었고
 * 장애물 체크할때도 i를 증가하는게 아니라 1씩 증가해야하는데 놓쳤다.
 * 여러모로 아쉽다... 내 정신이 온전히 못했던 탓일까..?
 */
