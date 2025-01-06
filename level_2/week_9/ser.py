def solution(n):
    answer = 0
    mod = 10**9+7
    
    def dp(n):
        res = 0
        if n == 0:
            return 1
        if n >= 2:
            res += dp(n-2)
        if n >= 1:
            res += dp(n-1)
        return res
    
    return dp(n) % mod
