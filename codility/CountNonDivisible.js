function solution(A) {
    const arr = Array.from(A).sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < A.length; i++) {
        const v = A[i];
        const index = arr.lastIndexOf(v);
        let counter = 0;
        for (let j = 0; j < index; j++) {
            if (v % arr[j] === 0) {
                counter++;
            }
        }
        result.push(A.length - 1 - counter);
    }
    return result;
}

function solution(A) {
    const N = A.length;
    const M = N * 2 + 1;
    const counter = new Array(M).fill(0);
    for (let i = 0; i < N; i++) {
        counter[A[i]]++;
    }
    // console.log(counter)
    const dividsors = new Array(M).fill(0);
    for (let i = 1; i * i < M; i++) {
        for (let j = i * i; j < M; j += i) {
            dividsors[j] += counter[i];
            if (j !== i * i) {
                dividsors[j] += counter[j / i];
            }
        }
    }
    // console.log(dividsors)
    const result = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        result[i] = N - dividsors[A[i]];
    }
    return result;
}
