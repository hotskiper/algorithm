def solution(N):
    # Implement your solution here
    n = bin(N)[2:]
    is_binary_gap = False
    curr_gap_length = 0
    max_gap_length = 0
    # print(n)
    for i, item in enumerate(n):
        # print(i, item)
        if item == "0" and n[i - 1] == "1":
            is_binary_gap = True
        if is_binary_gap and item == "0":
            curr_gap_length += 1
        if item == "1" and is_binary_gap == True:
            is_binary_gap = False
            max_gap_length = max(max_gap_length, curr_gap_length)
            curr_gap_length = 0
    return max_gap_length
