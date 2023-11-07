def solution(A):
    # Implement your solution here
    A.sort()
    n = len(A)
    max_1 = A[0] * A[1] * A[n-1]
    max_2 = A[n-1] * A[n-2] * A[n-3]
    return max(max_1, max_2)