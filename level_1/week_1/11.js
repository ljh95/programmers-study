function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}
