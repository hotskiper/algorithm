function solution(A) {
    // Implement your solution here -7 -3 -2 -1 5 6
    // [1,2,3, 7] [5,6] -10 -8 3 4 5
    const N = A.length;
    A.sort((a, b) => a - b);
    if (A[0] > 0) {
        return 2 * A[0];
    }
    if (A[N - 1] < 0) {
        return -2 * A[N - 1];
    }
    if (A.indexOf(0) > -1) {
        return 0;
    }
    let left = 0,
        right = N - 1;
    let minAbsSum = Math.abs(2 * A[0]);
    while (left <= right) {
        const temp = Math.abs(A[left] + A[right]);
        if (temp < minAbsSum) {
            minAbsSum = temp;
        }
        if (Math.abs(A[left]) < Math.abs(A[right])) {
            right--;
        } else {
            left++;
        }
    }
    return minAbsSum;
}
