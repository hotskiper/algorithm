def solution(A):
    # Implement your solution here
    n = len(A)
    result_list = [0] * n
    result_list[0] = A[0]
    result_list[1] = A[0]+A[1]
    for i in range(2, n):
        temp_list = [result_list[i-1], result_list[i-2]]
        if i > 2:
            temp_list.append(result_list[i-3])
        if i > 3:
            temp_list.append(result_list[i-4])
        if i > 4:
            temp_list.append(result_list[i-5])
        if i > 5:
            temp_list.append(result_list[i-6])
        result_list[i] = max(temp_list) + A[i]
    return result_list[-1]