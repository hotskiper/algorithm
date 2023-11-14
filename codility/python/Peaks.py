import math

def solution(A):
    # Implement your solution here
    peaks = []
    N = len(A)
    for i in range(1, N-1):
        if A[i] > max(A[i-1], A[i+1]):
            peaks.append(i)
    n = len(peaks)
    if n == 0:
        return 0
    for i in range(n, 0, -1):
        if N % i != 0:
            continue
        groups = int(N / i)
        my_set = set()
        for j in range(n):
            a = math.floor(peaks[j] / groups)
            my_set.add(a) 
        if len(my_set) == i:
            return i

    return 1