import math

def solution(N):
    # Implement your solution here
    a = math.floor(math.sqrt(N))
    while N % a != 0:
        a -= 1
    b = int(N / a)
    return 2 * (a + b)