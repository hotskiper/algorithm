def solution(A):
    # Implement your solution here
    dict = {}
    n = len(A)
    for i in range(n):
        a = A[i]
        dict[a] = dict[a]+1 if dict.get(a, None) != None else 1
        if dict[a] > n / 2:
            return i 
    return -1