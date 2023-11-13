import math

def solution(N):
    # Implement your solution here
    count = 0
    sqrt = math.floor(math.sqrt(N))
    for i in range(1, sqrt+1):
        if N % i == 0:
            count+=1
    count *= 2
    if N == sqrt * sqrt:
        count -= 1
    return count