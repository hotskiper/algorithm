def solution(N, A):
    result = [0] * N
    curr_max=0
    last_max=0
    for i in range(len(A)):
        a = A[i]
        if a == N+1:
            last_max = curr_max
        else:
            if result[a-1] < last_max:
                result[a-1] = last_max+1
            else:
                result[a-1] += 1
            curr_max = max(curr_max, result[a-1])
    # for item in result:
    #     if item < last_max:
    #         item = last_max
    # 这种遍历修改不了原数组项
    for i in range(N):
        if result[i] < last_max:
            result[i] = last_max
    # print(result, last_max)
    return result