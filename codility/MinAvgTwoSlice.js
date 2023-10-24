function solution(A) {
    // [4,2,2,5,1,5,8][-3, -5, -8, -4, -10][4,5,2,6,0]9,7,8,6
    let min = Infinity;
    let minIndex = Infinity;
    for (let i = 0; i < A.length - 1; i++) {
        const avg2 = (A[i] + A[i + 1]) / 2;
        const avg3 = A[i + 2] ? (A[i] + A[i + 1] + A[i + 2]) / 3 : Infinity;
        if (avg2 < min) {
            min = avg2;
            minIndex = i;
        }
        if (avg3 < min) {
            min = avg3;
            minIndex = i;
        }
    }
    return minIndex;
}
