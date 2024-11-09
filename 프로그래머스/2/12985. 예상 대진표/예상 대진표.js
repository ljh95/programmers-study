function solution(n, a, b) {
  var answer = 0;

  while (true) {
    answer++;
    const a2 = get2n(a);
    const b2 = get2n(b);
    if (a2 === 1 && b2 === 1) return 1;

    if (a2 !== b2) return Math.max(a2, b2);
    else {
      const subValue = Math.pow(2, a2 - 1);
      a -= subValue;
      b -= subValue;
    }
  }
}

function get2n(n) {
  let i = 0;
  while (2 ** i < n) {
    i++;
  }
  return i;
}