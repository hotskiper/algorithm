function solution(N, A) {
    // Implement your solution here
    let arr = new Array(N).fill(0);
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        const val = A[i];
        if (val === N + 1) {
            arr = arr.map(() => max);
        } else {
            const newVal = arr[val - 1] + 1;
            arr[val - 1] = newVal;
            if (newVal > max) max = newVal;
        }
    }
    return arr;
}

// running time: 2.616 sec., time limit: 0.432 sec.
// **O(N*M)**

function solution(N, A) {
    // Implement your solution here
    let arr = new Array(N).fill(0);
    let lastMax = 0,
        currMax = 0;
    for (let i = 0; i < A.length; i++) {
        const val = A[i];
        if (val === N + 1) {
            lastMax = currMax;
        } else {
            const newVal =
                arr[val - 1] < lastMax ? lastMax + 1 : arr[val - 1] + 1;
            if (newVal > currMax) currMax = newVal;
            arr[val - 1] = newVal;
        }
    }
    // console.log(arr)
    for (let i = 0; i < N; i++) {
        const val = arr[i];
        if (val < lastMax) arr[i] = lastMax;
    }
    return arr;
}

// **O(N + M)**
// 0.104 s
