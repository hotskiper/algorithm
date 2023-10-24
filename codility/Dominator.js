function solution(A) {
    // Implement your solution here
    const obj = {};
    const half = A.length / 2;
    let result = -1;
    for (let i = 0; i < A.length; i++) {
        const v = A[i];
        if (obj[v]) {
            obj[v]++;
        } else {
            obj[v] = 1;
        }
        if (obj[v] > half) {
            result = i;
            break;
        }
    }
    // console.log( A, A.indexOf(Number(result)))
    return result;
}
