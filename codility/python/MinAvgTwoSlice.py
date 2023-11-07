def solution(A):
    # Implement your solution here
    n = len(A)
    min = (A[0] + A[1]) / 2
    minIndex = 0
    for i in range(n-1):
        avg2 = (A[i] + A[i+1]) / 2
        avg3 = (A[i] + A[i+1] + A[i+2]) / 3 if i < n-2 else min
        if avg2 < min:
            min = avg2
            minIndex = i
        if avg3 < min:
            min = avg3
            minIndex = i
    return minIndex