def solution(A):
    # Implement your solution here
    dict = {}
    for item in A:
        # if item in A:
        #     if dict[item] == 0:
        #         dict[item] = 1
        #     else:
        #         dict[item] = 0
        # else:
        #     dict[item] = 1
        dict[item] = dict.get(item, 0) + 1
    for item in dict:
        if dict[item] % 2 == 1:
            return item
    return None