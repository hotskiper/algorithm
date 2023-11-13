def solution(A):
    # Implement your solution here
    n = len(A) 
    sum1 = [0] * n
    sum2 = [0] * n
    sum1[1] = 0
    sum2[n-2] = 0
    for i in range(2, n-1):
        if sum1[i-1] < 0:
            sum1[i] = A[i-1]
        else:
            sum1[i] = sum1[i-1]+A[i-1]

    for i in range(n-3, 0, -1):
        if sum2[i+1] < 0:
            sum2[i] = A[i+1]
        else:
            sum2[i] = sum2[i+1]+A[i+1]
    
    sum = [0] * n
    for i in range(n):
        sum[i] = (sum1[i] if sum1[i] > 0 else 0) + (sum2[i] if sum2[i] > 0 else 0)
    return max(sum)