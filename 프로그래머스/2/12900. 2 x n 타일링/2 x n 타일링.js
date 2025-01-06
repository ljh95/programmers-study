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