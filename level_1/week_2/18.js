function solution(name, yearning, photo) {
  const m = new Map();

  name.forEach((n, i) => {
    m.set(n, yearning[i]);
  });

  return photo.reduce((acc, cur) => {
    const sum = cur.reduce((a, c) => a + (m.get(c) ?? 0), 0);
    return [...acc, sum];
  }, []);
}
