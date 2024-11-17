function solution(n) {
  let count = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      count++;
    }
  }
  return count;
}
console.log(solution(5000));

/**
 * 아주 쉽게 풀긴했는데 초반에 겁먹게 됨 어려운 문제인가?
 * 근데 2로 만 나눌 수  있다는 제약조건이 문제를 쉽게 만든듯
 */
