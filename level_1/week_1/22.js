function solution(s) {
  const len = s.length;
  if (len === 1) return s;
  return len % 2 === 0
    ? s.slice(len / 2 - 1, len / 2 + 1)
    : s.slice(len / 2, len / 2 + 1);
}
