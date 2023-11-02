def solution(A):
    # Implement your solution here
    ones_before = 0
    zero_count = 0
    minus_count = 0
    for i in range(len(A)):
        if A[i] == 0:
            zero_count+=1
            minus_count+=ones_before
        else:
            ones_before+=1

    pairs = zero_count * (len(A) - zero_count) - minus_count
    return -1 if pairs > 1000000000 else pairs