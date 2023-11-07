def solution(S):
    # Implement your solution here
    push_items={'(','[','{'}
    map_dict={'(':')', '[':']','{':'}'}
    arr = []
    for s in S:
        if s in push_items:
            arr.append(s)
        else:
            if len(arr) == 0:
                return 0
            else:
                if map_dict[arr.pop()] != s:
                    return 0
    return 1 if len(arr) == 0 else 0