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

/**
 * 어렵진 않았는데 내 풀이에 반례가 있을지 검증하는데 시간이 오래걸림
 * 정말 놓친 부분은 없을까 고민을 짧게 하고싶기도하고
 * 거의 직감? 내가 아는 영역에 한해서 반례를 떠올리기에 확신하기도 어렵다.
 * 풀이도 다른사람 풀이에서 너무 깖끔하게 풀어서 아쉬운 부분도 있음
 * 원리만 따지고 보면 비슷하게 푼것 같은데
 */

console.log(solution(8, 8, 7));
