function solution(n) {
  const arr = Array.from({ length: n + 1 }, (_, i) => BigInt(i));
  arr.forEach((_, i) => {
    if (i > 1) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % BigInt(1234567);
    }
  });
  return Number(arr[n]);
}
/**
 * claud의 도움과 이전 풀이의 도움을 받았다.
 * 재귀를 돌리니 당연하다는듯 시간초과 런타임에러가 떴다.
 * 배열에 단순히 넣고 계산하는게 O(n)이 걸리겠다는걸 이전 코드를 보고 알았다.
 * 너무 큰 수는 Infinit 가 나서, BigInt라는걸 알았어야 했고
 * 사용방법도 조금은 생소했다., 왜 1이 아니라 1n인가, 1n은 뭐지?
 * 그냥 BigInt 숫자라는 의미다. 그래서 마지막에 Number로 변환해줘야한다.
 */

// 클로드의 기가막히 새로운 풀이
function solution(n) {
  if (n <= 1) return n;

  let prev = BigInt(0);
  let current = BigInt(1);

  for (let i = 2; i <= n; i++) {
    const next = (prev + current) % BigInt(1234567);
    prev = current;
    current = next;
  }

  return Number(current);
}
