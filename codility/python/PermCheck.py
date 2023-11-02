def solution(A):
    # Implement your solution here
    N = len(A)
    B = [0] * N
    for a in A:
        if a > N:
            return 0
        B[a-1] = 1
    for i in range(N):
        if B[i] == 0:
            return 0
    return 1