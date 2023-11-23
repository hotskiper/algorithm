def solution(A):
    # Implement your solution here
    A.sort()
    if A[0] > 0:
        return 2 * A[0]
    elif A[-1] < 0:
        return -2 * A[-1]
    elif 0 in A:
        return 0
    n = len(A)
    # print(A)
    min_sum = abs(A[0]) * 2
    left = 0
    right = n-1
    while left <= right:
        min_sum = min(min_sum, abs(A[left] + A[right]))
        if abs(A[left]) > abs(A[right]):
            left += 1
        else:
            right -= 1
    return min_sum