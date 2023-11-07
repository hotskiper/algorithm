def solution(A):
    # Implement your solution here
    A.sort()
    B = list(filter(lambda x: x>0, A))
    n = len(B)
    if n < 3:
        return 0
    for i in range(n-2):
        for j in range(i+1, n-1):
            if B[i] + B[j] > B[j+1]:
                return 1

    return 0