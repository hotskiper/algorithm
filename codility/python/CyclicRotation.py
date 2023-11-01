def solution(A, K):
    # Implement your solution here
    N = len(A)
    if N == 0:
        return []
    steps = K % N
    result = [0] * N
    for i,item in enumerate(A):
        if i + steps < N:
            result[i+steps] = item
        else:
            result[(i+steps)%N] = item
    return result