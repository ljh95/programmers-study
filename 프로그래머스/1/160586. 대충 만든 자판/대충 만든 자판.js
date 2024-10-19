function solution(keymap, targets) {
  var answer = [];
  const m = new Map();

  for (let i = 0; i < targets.length; i++) {
    const element = targets[i];
    const arr = [];

    for (let j = 0; j < element.length; j++) {
      const a = element[j];

      if (m.has(a)) {
        arr.push(m.get(a));
        continue;
      }

      let min = 99999999999;
      for (const key of keymap) {
        const cur = key.indexOf(a);
        min = cur === -1 ? min : Math.min(min, cur);
      }
      const v = min === 99999999999 ? -1 : min + 1;

      m.set(a, v);
      arr.push(v);
    }

    const result = arr.includes(-1)
      ? -1
      : arr.reduce((acc, cur) => acc + cur, 0);

    answer.push(result);
  }

  return answer;
}