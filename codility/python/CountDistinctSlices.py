def solution(M, A):
    # Implement your solution here
    n = len(A)
    count = 0
    left = 0
    right = 0
    arr = [0] * (M + 1)
    while left < n:
        while right < n:
            if arr[A[right]] == 1:
                break
            arr[A[right]] = 1
            right += 1
        count += right - left
        if count > 1000000000:
            return 1000000000
        arr[A[left]] = 0
        left += 1
        
    return count