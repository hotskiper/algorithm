def solution(N, P, Q):
    # Implement your solution here
    primes = get_prime(int(N/2))
    # print(primes)
    semiprimes = []
    for i in range(len(primes)):
        prime = primes[i]
        j = i
        for j in range(i, len(primes)):
            if prime * primes[j] > N:
                break
            semiprimes.append(prime * primes[j])
    semiprimes.sort()
    # print(semiprimes)
    counter = [0] * (N+1)
    index = 0
    count = 0
    for i in range(1, N+1):
        if index < len(semiprimes) and i == semiprimes[index]:
            index += 1
            count += 1
        counter[i] = count
    # print(counter)
    result = []
    for i in range(len(P)):
        p = P[i]
        q = Q[i]
        result.append(counter[q] - counter[p-1])
    return result
    
def get_prime(n):
    primes=[1] * (n+1)
    # max_num = int(n ** 0.5) + 1
    

    for i in range(2, n+1):
        d = 2
        while d * d <= i:
            if i % d == 0:
                primes[i] = 0
                break
            d += 1
    result = []
    for i in range(2, len(primes)):
        if primes[i] == 1:
            result.append(i)
    return result