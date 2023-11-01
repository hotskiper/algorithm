def solution(A):
    # Implement your solution here
    N = len(A)
    s = sum(A)
    supposed_sum = (N + 2) * (N + 1) // 2
    # print(supposed_sum)
    return supposed_sum - s