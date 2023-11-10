def solution(A):
    # Implement your solution here
    n = len(A)
    dp = [0] * n
    for i in range(n):
        num = A[i]
        if i == 0:
            dp[i] = num
        else:
            if dp[i - 1] < 0:
                dp[i] = num
            else:
                dp[i] = dp[i - 1] + num
    return max(dp)
