def solution(A):
    # Implement your solution here
    N = len(A)
    M = N * 2 + 1
    count_list = [0] * M
    for i in range(N):
        count_list[A[i]] += 1
    # print(count_list)
    divisor_list = [0] * M
    for i in range(1, M):
        for j in range(i, M, i):
            divisor_list[j] += count_list[i]

    # print(divisor_list)
    result = [0] * N
    result = [N - divisor_list[i] for i in A]
    # print(result)
    return result