def solution(A):
    # Implement your solution here
    trans_list = [-a if a < 0 else a for a in A]
    # print(trans_list)
    return len(set(trans_list))