def solution(H):
    # Implement your solution here
    n = len(H)
    arr = []
    max_h = 0
    count = 0
    for i in range(n):
        h = H[i]
        while len(arr) > 0 and h < max_h:
            arr.pop()
            max_h = arr[len(arr) - 1] if len(arr) > 0 else 0
        if len(arr) > 0 and h == max_h:
            continue
        else:
            count+=1
            arr.append(h)
            max_h = h
    return count