# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A, B, C):
    # Implement your solution here
    n = len(A)
    m = len(C)
    
    left = 0
    right = m - 1
    result = -1

    def cover(index):
        nails = [0] * (2 * m + 1)
        for i in range(index+1):
            nails[C[i]] = 1
        counter = 0
        for i in range(len(nails)):
            if nails[i] == 1:
                counter+=1
            nails[i] = counter
        for i in range(n):
            if nails[B[i]] - nails[A[i] - 1] == 0:
                return False
        return True

    while left <= right:
        mid = (left + right) // 2
        if cover(mid) == True:
            result = mid + 1
            right = mid - 1
        else:
            left = mid + 1
    return result
    
    
