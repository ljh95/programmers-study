function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const max_health = health;

  let s_stack = 0;
  let a_index = 0;
  const lastIndex = attacks[attacks.length - 1][0];

  for (let i = 1; i <= lastIndex; i++) {
    if (i === attacks[a_index][0]) {
      const [_, a] = attacks[a_index];
      a_index++;
      health -= a;
      if (health <= 0) return -1;
      s_stack = 0;
    } else {
      s_stack += 1;

      if (health === max_health) continue;

      if (s_stack !== 0 && s_stack % t === 0) {
        health = Math.min(max_health, health + y);
      }
      health = Math.min(max_health, health + x);
    }
  }

  return health;
}

console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);
