def solution(A, B, K):
    # Implement your solution here
    for i in range(A, B+1):
        if i % K == 0:
            return (B - i) // K + 1
    return 0