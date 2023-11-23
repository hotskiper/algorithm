def solution(A, B):
    # Implement your solution here
    m = -1
    count = 0
    n = len(A)
    for i in range(n):
        a = A[i]
        b = B[i]
        if a > m:
            m = b
            count += 1
    return count