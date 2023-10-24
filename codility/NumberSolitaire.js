function solution(A) {
    // Implement your solution here
    const arr = new Array(A.length);
    arr[0] = A[0];
    arr[1] = A[0] + A[1];
    for (let i = 2; i < arr.length; i++) {
        let max = arr[i - 1];
        if (arr[i - 2] !== undefined && arr[i - 2] > max) max = arr[i - 2]
        if (arr[i - 3] !== undefined && arr[i - 3] > max) max = arr[i - 3]
        if (arr[i - 4] !== undefined && arr[i - 4] > max) max = arr[i - 4]
        if (arr[i - 5] !== undefined && arr[i - 5] > max) max = arr[i - 5]
        if (arr[i - 6] !== undefined && arr[i - 6] > max) max = arr[i - 6]
        arr[i] = max + A[i];
    }
    return arr[A.length - 1];
}