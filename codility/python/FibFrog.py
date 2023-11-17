def solution(A):
    # Implement your solution here
    fibs = [0, 1]
    A.append(1)
    n = len(A)
    
    index = 2
    while True:
        new_fib = fibs[index - 2] + fibs[index - 1]
        if new_fib > n:
            break
        fibs.append(new_fib)
        index += 1
    fibs = fibs[2:]
    # print(fibs)
    result = [-1] * (n+1)
    result[0] = 0
    for i in range(1, n+1):
        if A[i-1] == 1:
            for j in range(len(fibs)):
                fib = fibs[j]
                if fib > i:
                    break
                if result[i-fib] != -1:
                    if result[i] == -1:
                        result[i] = result[i-fib] + 1
                    else:
                        result[i] = min(result[i-fib] + 1, result[i])
        
    # print(result)
    return result[-1]