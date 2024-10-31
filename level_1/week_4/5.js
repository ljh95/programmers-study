function solution(players, callings) {
  const m = new Map(players.map((v, i) => [v, i]));

  for (let i = 0; i < callings.length; i++) {
    const c = callings[i];
    const index = m.get(c);

    m.set(players[index], index - 1);
    m.set(players[index - 1], index);

    const tmp = players[index];
    players[index] = players[index - 1];
    players[index - 1] = tmp;
  }

  return players;
}

/**
 * 1. 일단 하긴 했는데, 3번재 케이스부터 다틀린것 같음
 * 2. 일단 map을 초반에 초기화하는걸로 시간복잡도는 통과한것 같은데
 * 14, 15말고 다틀림.. 왜..? 왜 더틀려?
 *
 * 3. 반례를 찾음.. 둘다 바꿔야함
 */
