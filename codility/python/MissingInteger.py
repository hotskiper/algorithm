def solution(A):
    # Implement your solution here
    temp = {}
    for item in A:
        temp[item] = 1
    i = 1
    while True:
        if temp.get(i, 0) == 0:
            return i
        i += 1

