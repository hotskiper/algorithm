import math

def solution(K, M, A):
    # Implement your solution here
    n = len(A)
    s = sum(A)
    righta = max(A)
    left = max(math.ceil(s / K), righta)
    right = s
    
    sum_list = [A[0]] * n
    for i in range(1, n):
        sum_list[i] = sum_list[i-1]+A[i]
    # print(sum_list, left, right)
    r = 0
    while left <= right:
        mid = (left + right) // 2
        count = 0
        current_sum = 0
        for i in range(n):
            if i == n-1:
                count += 1
            elif sum_list[i] - current_sum <= mid and sum_list[i+1] - current_sum > mid:
                count += 1
                current_sum = sum_list[i]
        
        # print(count, mid, right, left)
        if count <= K:
            right = mid - 1
            r = mid
        else:
            left = mid + 1
       
    return r