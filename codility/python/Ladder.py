def solution(A, B):
    # Implement your solution here
    max_a = max(A)
    if max_a < 2:
        max_a = 2
    max_b = max(B)
    mod_b = 2 ** max_b
    count_list=[0] * (max_a + 1)
    count_list[1] = 1 % mod_b
    count_list[2] = 2 % mod_b
    index = 3
    while index <= max_a:
        count_list[index] = (count_list[index - 2] + count_list[index - 1]) % mod_b
        index += 1
    # print(count_list)
    result = []
    for i in range(len(A)):
        a = A[i]
        b = B[i]
        c = count_list[a] % 2 ** b
        result.append(c)
    return result