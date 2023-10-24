function solution(N, M) {
    if (N % M === 0) {
        return N / M;
    }
    let index = 0;
    let count = 1;
    while (index > -1) {
        index = index + M;
        if (index >= N) {
            index = index % N;
        }
        if (index === 0) {
            return count;
        }
        count++;
    }
    // console.log(arr)
    return count;
}
