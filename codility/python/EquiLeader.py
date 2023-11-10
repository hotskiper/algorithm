def solution(A):
    # Implement your solution here
    n = len(A)
    dict = {}
    leader_num = None
    for i in range(n):
        a = A[i]
        if dict.get(a, None) == None:
            dict[a] = {'count':1, 'list': [i]}
        else:
            dict[a]['count'] += 1
            dict[a]['list'].append(i)
            if dict[a]['count'] > n/2:
                leader_num = a
    if leader_num == None:
        return 0
    list = dict[leader_num]['list']
    index = 0
    count_1 = 0
    count = 0
    m = len(list)
    for i in range(n):
        if i == list[index]:
            if index < m -1 :
                index += 1
            count_1 += 1
        if count_1 > (i+1)/2 and m - count_1 > (n-i-1)/2:
            count += 1
    return count