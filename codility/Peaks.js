function solution(A) {
    const len = A.length;
    const pArr = [];
    for (let i = 1; i < len - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            pArr.push(i);
        }
    }
    let n = pArr.length;
    if (n === 0) {
        return 0;
    }
    while (!calc() && n > 1) {
        n--;
    }
    function calc() {
        if (len % n !== 0) {
            return false;
        }
        const set = new Set();
        const groupNum = len / n;
        for (let i = 0; i < pArr.length; i++) {
            const index = pArr[i];
            set.add(Math.floor(index / groupNum));
        }
        return set.size === n;
    }
    return n;
}
