def solution(A):
    # Implement your solution here
    A.sort()
    n = len(A)
    left = 0
    count = 0
    for left in range(n-2):
        for mid in range(left+1, n-1):
            for right in range(mid + 1, n):
                if A[left] + A[mid] <= A[right]:
                    break
                else:
                    count += 1
    return count

def solution(A):
    # Implement your solution here
    A.sort()
    n = len(A)
    count = 0
    for left in range(n-2):
        right = left + 2
        for mid in range(left+1, n-1):
            while right < n and A[left] + A[mid] > A[right]:
                right += 1
                # print(left, mid, right)
            count += right - mid - 1
    return count