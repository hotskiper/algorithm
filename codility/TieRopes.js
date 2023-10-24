function solution(K, A) {
    // Implement your solution here
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (sum >= K) {
            sum = 0;
            counter++;
        }
    }
    return counter;
}
