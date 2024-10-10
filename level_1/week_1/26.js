function solution(price, money, count) {
  const sum = Array.from({ length: count }, (_, i) => (i + 1) * price).reduce(
    (a, c) => a + c,
    0
  );
  return money - sum > 0 ? 0 : sum - money;
}
