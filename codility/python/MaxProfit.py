def solution(A):
    # Implement your solution here
    n = len(A)
    if n == 0:
        return 0
    profix_arr = [0]*n
    low = A[0]
    for i in range(1, n):
        a = A[i]
        profix_arr[i] = a - low
        low = min(low, a)
    max_profit = max(profix_arr)
    return max_profit if max_profit > 0 else 0