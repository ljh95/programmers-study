// function solution(n) {
//   const visited = {};
//   const mod = 1_000_000_007;

//   function fn(n) {
//     if (n <= 3) return n;
//     if (visited[n]) return visited[n];

//     const result = ((fn(n - 1) % mod) + (fn(n - 2) % mod)) % mod;
//     visited[n] = result;

//     return result;
//   }

//   return fn(n) % mod;
// }

function solution(n) {
  const mod = 1_000_000_007;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const result = dp[i - 1] + dp[i - 2];
    dp[i] = result > mod ? result % mod : result;
  }
  return dp[n];
}

/**
 * 처음에 함수 자체를 잘못 작성함,
 * f(n) = f(n-1) + n-2 라고해버림
 * 마지막엔 결국 질문하기를 봤었어야 했을 거 같은데, 마지막에 mod보다 큰것만 나누는 것은 알기 어려움
 * 쨋든 항상 재귀보다는 for문으로 점차 증가하는게 빠름
 *
 * 그래도 긍정적인건 접근 자체는 어느정도 유효했다.
 * 너무 겁먹지말고 그냥 해보았다면, f(6)만 값을 정확히 파악했다면 성공률 0%는 피했을듯..!
 *
 */
