function solution(A) {
    // Implement your solution here[1,3,5,10] [2, 2, 5]
    // 1 5 9
    const pArr = [];
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            pArr.push(i);
        }
    }
    if (pArr.length === 0) {
        return 0;
    }
    // console.log(pArr)
    let k = pArr.length;
    while (!calc(pArr, k)) {
        k--;
    }
    function calc(pArr, k) {
        let lastIndex = pArr[0];
        const len = pArr.length;
        if ((pArr[len - 1] - pArr[0]) / (k - 1) < k) {
            return false;
        }
        let counter = 1;
        for (let i = 1; i < len; i++) {
            if (pArr[i] - lastIndex >= k) {
                counter++;
                lastIndex = pArr[i];
                if (counter === k) {
                    break;
                }
            }
        }
        return counter === k;
    }
    return k;
}
