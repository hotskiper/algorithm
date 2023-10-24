function solution(M, A) {
    // 3 4 5 4 2
    const N = A.length;
    let left = 0;
    const set = new Set();
    let count = 0;
    for (let right = 0; right < N; right++) {
        // right出现重复时，left右移
        while (set.has(A[right])) {
            set.delete(A[left]);
            left++;
        }
        set.add(A[right]);
        count += right - left + 1;
        if (count > 1000000000) {
            return 1000000000;
        }
    }
    return count;
}
