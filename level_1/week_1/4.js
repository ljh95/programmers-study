function solution(x, n) {
  return Array.from({ length: n }, (_el, i) => (i + 1) * x);
}
