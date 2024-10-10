function solution(a, b) {
  return a.map((_, i) => a[i] * b[i]).reduce((acc, cur) => acc + cur);
}
