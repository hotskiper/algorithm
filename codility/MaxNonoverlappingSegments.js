function solution(A, B) {
    // Implement your solution here
    let counter = 0;
    let min = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > min) {
            counter++;
            min = B[i];
        }
    }
    return counter;
}
