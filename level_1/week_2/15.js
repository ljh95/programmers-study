function solution(a, b, n) {
  let count = 0;
  while (n >= a) {
    const curCount = Math.floor(n / a) * b;
    count += Math.floor(n / a) * b;
    n = curCount + (n % a);
  }
  return count;
}
