function solution(A) {
    let result = 0;
    let lastZeros = 0;
    for (let i = 0; i < A.length; i++) {
        const val = A[i];
        if (val === 0) {
            lastZeros++;
        } else {
            result += lastZeros;
            if (result > 1000000000) {
                result = -1;
                break;
            }
        }
    }
    return result;
}
