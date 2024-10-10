function solution(n, m) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  return [gcd(n, m), lcm(n, m)];
}
