def solution(A, B):
    # Implement your solution here
    n = len(A)
    count = 0
    for i in range(n):
        a = A[i]
        b = B[i]
        if a == b:
            count += 1
            continue
        gcd = get_gcd(a, b)
        ad = int(a / gcd)
        bd = int(b / gcd)
        if has_other_prime(ad, gcd) == False and has_other_prime(bd, gcd) == False:
            count += 1
            continue
    return count

def get_gcd(a, b):
    if a < b:
        return get_gcd(b, a)
    if a % b == 0:
        return b
    return get_gcd(b, a % b)

def has_other_prime(n, gcd):
    g = get_gcd(n, gcd)
    if g == 1:
        return n != 1
    return has_other_prime(int(n / g), gcd)