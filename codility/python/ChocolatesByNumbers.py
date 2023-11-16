def solution(N, M):
    # Implement your solution here

    n = max(N, M)
    m = min(N, M)
    gcd = 1
    if n % m == 0:
        return int(N / m)
    while True:
        a = n % m
        if m % a == 0:
            gcd = a
            break
        n = m 
        m = a
    return int(N / gcd)