def solution(A):
    # Implement your solution here
    peaks = []
    for i in range(1,len(A)-1):
        if A[i] > A[i-1] and A[i] > A[i+1]:
            peaks.append(i)

    # print(peaks)
    if len(peaks) == 0:
        return 0
    k = len(peaks)
    for i in range(k,0,-1):
        if i * (i - 1) > peaks[-1] - peaks[0]:
            continue
        last_peak = peaks[0]
        count = 1
        for j in range(1, k):
            if peaks[j] - last_peak >= i:
                count += 1
                last_peak = peaks[j]
                if count == i:
                    return i
    return 1