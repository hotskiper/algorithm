function solution(A) {
    // Implement your solution here
    A.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < A.length - 2; i++) {
        for (let j = i + 1; j < A.length - 1; j++) {
            a: for (let k = j + 1; k < A.length; k++) {
                const a = A[i],
                    b = A[j],
                    c = A[k];
                if (a + b <= c) {
                    break a;
                } else {
                    counter++;
                }
            }
        }
    }
    return counter;
}
