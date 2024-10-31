function solution(friends, gifts) {
  const result = new Map(friends.map((f) => [f, 0]));
  const done = new Map(friends.map((f) => [f, []]));
  const m = new Map(friends.map((f) => [f, new Map()]));

  // 채워넣는부분
  for (let i = 0; i < gifts.length; i++) {
    const [a, b] = gifts[i].split(" "); // name, name
    const cur_m = m.get(a); // Map()
    cur_m.set(b, (cur_m.get(b) ?? 0) + 1);
  }

  const get_sunmul_cnt = (m, name) => {
    const cur_m = m.get(name);
    const give_cnt = Array.from(cur_m.values()).reduce(
      (acc, cur) => acc + cur,
      0
    );
    let take_cnt = 0;
    const you_arr = Array.from(m.keys());
    you_arr.forEach((you) => {
      const you_m = m.get(you);
      if (you_m.has(name)) {
        take_cnt += you_m.get(name);
      }
    });

    return give_cnt - take_cnt;
  };

  for (let i = 0; i < friends.length; i++) {
    const cur = friends[i]; // name
    const cur_m = m.get(cur); // Map

    const you_arr = friends.filter((f) => f !== cur); // [name, name, ..]

    for (let j = 0; j < you_arr.length; j++) {
      const you = you_arr[j]; // name
      const you_m = m.get(you);

      if (done.get(cur).find((name) => name === you)) continue;

      if (cur_m.has(you) || you_m.has(cur)) {
        const cur_cnt = cur_m.get(you) ?? 0;
        const you_cnt = you_m.get(cur) ?? 0;

        if (cur_cnt < you_cnt) {
          result.set(you, result.get(you) + 1);
        } else if (cur_cnt > you_cnt) {
          result.set(cur, result.get(cur) + 1);
        } else {
          const cur_sunmul = get_sunmul_cnt(m, cur);
          const you_sunmul = get_sunmul_cnt(m, you);

          if (cur_sunmul < you_sunmul) {
            result.set(you, result.get(you) + 1);
          } else if (cur_sunmul > you_sunmul) {
            result.set(cur, result.get(cur) + 1);
          }
        }
      } else {
        const cur_sunmul = get_sunmul_cnt(m, cur);
        const you_sunmul = get_sunmul_cnt(m, you);

        if (cur_sunmul < you_sunmul) {
          result.set(you, result.get(you) + 1);
        } else if (cur_sunmul > you_sunmul) {
          result.set(cur, result.get(cur) + 1);
        }
      }

      done.set(cur, [...done.get(cur), you]);
      done.set(you, [...done.get(you), cur]);
    }
  }

  return Array.from(result.values()).sort((a, b) => b - a)[0];
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);

console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "alessandro conan",
      "david alessandro",
      "alessandro david",
    ]
  )
);
console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
);
