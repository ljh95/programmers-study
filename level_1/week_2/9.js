function solution(s) {
  const m = new Map(); // key: alphabet, value: last index
  return s.split("").map((a, i) => {
    if (!m.has(a)) {
      m.set(a, i);
      return -1;
    }
    const result = i - m.get(a);
    m.set(a, i);
    return result;
  });
}
