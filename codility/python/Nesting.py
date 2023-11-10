def solution(S):
    # Implement your solution here
    n = len(S)   
    stack = []
    result = 1
    for i in range(n):
        s = S[i]
        if s == '(':
            stack.append(s)
        else:
            if len(stack) == 0:
                result = 0
                break
            stack.pop()
    if len(stack) > 0:
        result = 0
    return result