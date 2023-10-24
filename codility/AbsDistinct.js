function solution(A) {
    // Implement your solution here
    const set = new Set();
    for (let i = 0; i < A.length; i++) {
        let v = A[i];
        if (v < 0) {
            v = -v;
        }
        set.add(v);
    }
    return set.size;
}
