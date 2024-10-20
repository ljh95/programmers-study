function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const count = getCount(i);
    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  }
  return answer;
}

const getCount = (n) => {
  if (n === 1) return 1;
  if (n === 2 || n === 3) return 2;

  let count = 0;
  let hasSqrt = 0;

  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === Math.sqrt(n)) {
        hasSqrt = 1;
      } else {
        count++;
      }
    }
  }
  return count * 2 + hasSqrt;
};
