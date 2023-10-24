function solution(A) {
    let N = A.length;
    let n = 2;
    const fib = [1, 2];
    while (true) {
        const temp = fib[n - 1] + fib[n - 2];
        if (temp > N + 1) {
            break;
        }
        fib[n] = temp;
        n++;
    }
    // 动态规划
    // 存储从位置0到每个位置的最小跳数
    const arr = new Array(N + 2).fill(-1);
    arr[0] = 0; // arr[1] -> A[0]
    A.push(1);
    for (let i = 1; i < arr.length; i++) {
        if (A[i - 1] === 1) {
            for (const jump of fib) {
                if (i - jump >= 0 && arr[i - jump] !== -1) {
                    if (arr[i] === -1) {
                        arr[i] = arr[i - jump] + 1;
                    } else {
                        arr[i] = Math.min(arr[i], arr[i - jump] + 1);
                    }
                }
            }
        }
    }
    // console.log(arr)
    return arr[N + 1];
}
