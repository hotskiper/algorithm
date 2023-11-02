def solution(S, P, Q):
    # Implement your solution here
    m = len(S)
    ps = [1]*m
    A = [0] * m
    C = [0] * m
    G = [0] * m
    T = [0] * m
    for i in range(m):
        s = S[i]
        if i > 0:
            A[i] = A[i-1]
            C[i] = C[i-1]
            G[i] = G[i-1]
            T[i] = T[i-1]
        if s == 'A':
            A[i] += 1
        elif s == 'C':
            C[i] += 1
        elif s == 'G':
            G[i] += 1
        else:
            T[i] += 1
    n = len(P)
    result = [0] * n
    for i in range(n):
        p = P[i]
        q = Q[i]
        if A[q] - (A[p-1] if p > 0 else 0) > 0:
            result[i] = 1
        elif C[q] - (C[p-1] if p > 0 else 0) > 0:
            result[i] = 2
        elif G[q] - (G[p-1] if p > 0 else 0) > 0:
            result[i] = 3
        else:
            result[i] = 4
    return result