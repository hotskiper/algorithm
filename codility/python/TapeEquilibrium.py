def solution(A):
    # Implement your solution here
    total_sum=sum(A)
    cur_sum = 0
    min = float('inf')
    for i in range(0, len(A)-1):
        a=A[i]
        cur_sum+=a 
        gap = abs(total_sum - 2 * cur_sum)
        if gap == 0:
            return 0
        if gap < min:
            min = gap
    return min