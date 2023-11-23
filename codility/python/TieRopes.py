def solution(K, A):
    # Implement your solution here
    n = len(A)
    count = 0
    temp_sum = 0
    for i in range(n):
        a = A[i]
        if temp_sum + a >= K:
            count += 1
            temp_sum = 0
        else:
            temp_sum += a
    return count