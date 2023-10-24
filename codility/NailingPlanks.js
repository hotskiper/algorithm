function solution(A, B, C) {
    // Implement your solution here
    const n = A.length;
    const m = C.length;
    const nails = new Array(2 * m + 1).fill(0);
    let left = 0,
        right = m - 1;
    let result = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // console.log(mid)
        if (cover(mid)) {
            result = mid + 1;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
    function cover(index) {
        nails.fill(0);
        for (let i = 0; i <= index; i++) {
            nails[C[i]] = 1;
        }
        // 每个位置之前钉了几颗钉子 001111
        let counter = 0;
        for (let i = 0; i < nails.length; i++) {
            if (nails[i]) {
                counter++;
            }
            nails[i] = counter;
        }
        // console.log(nails)
        for (let i = 0; i < n; i++) {
            if (nails[B[i]] - nails[A[i] - 1] === 0) {
                return false;
            }
        }
        return true;
    }
}
