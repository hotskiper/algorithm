

function solution(A, B) {
    // Implement your solution here
    const maxA = Math.max(...A);
    const maxB = Math.max(...B);
    let i = 3;
    const memo = [0, 1, 2];
    while (i <= maxA) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % Math.pow(2, maxB);
        i++;
    }
    const result = [];
    for (let i = 0; i < A.length; i++) {
        result.push(memo[A[i]] % Math.pow(2, B[i]));
    }
    // console.log(result)
    return result;
}

