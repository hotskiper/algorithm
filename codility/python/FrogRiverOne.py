def solution(X, A):
    # Implement your solution here
    leaf_set= set()
    for i in range(len(A)):
        a = A[i]
        if a <= X:
            leaf_set.add(a)
        if len(leaf_set) == X:
            return i
    return -1