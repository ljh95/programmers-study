function solution(a, b) {
  const big = a > b ? a : b;
  const small = a > b ? b : a;

  const sum = small + big;
  const middle = sum / 2;
  const count = big - small + 1;
  return count % 2 === 0 ? (sum * count) / 2 : (sum * (count - 1)) / 2 + middle;
}
