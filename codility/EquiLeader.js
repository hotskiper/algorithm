function solution(A) {
    // Implement your solution here
    const obj = {};
    const half = A.length / 2;
    let halfKey;
    for (let i = 0; i < A.length; i++) {
        const v = A[i];
        if (obj[v]) {
            obj[v]++;
        } else {
            obj[v] = 1;
        }
        if (obj[v] > half) {
            halfKey = v;
        }
    }
    if (typeof halfKey === "undefined") {
        return 0;
    }
    const halfCount = obj[halfKey];
    let result = 0,
        leftCount = 0;
    for (let i = 0; i < A.length; i++) {
        const v = A[i];
        if (halfKey === v) {
            leftCount++;
        }
        if (
            leftCount > (i + 1) / 2 &&
            halfCount - leftCount > (A.length - i - 1) / 2
        ) {
            result++;
        }
    }
    return result;
}
