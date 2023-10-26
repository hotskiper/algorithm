// https://codility.com/media/train/solution-min-abs-sum.pdf
// 72% score
function solution(A) {
    // Implement your solution here
    const N = A.length;
    let sum = 0,
        max = 0;
        
    for (let i = 0; i < N; i++) {
        if (A[i] < 0) {
            A[i] = -A[i];
        }
        sum += A[i];
        if (A[i] > max) {
            max = A[i];
        }
    }
    const countArr = new Array(max + 1).fill(0);
    for(let i = 0 ; i < N ; i++){
        countArr[A[i]] += 1;
    }
    // 动态规划，数组每一项代表是否能用A中的元素达到当前的和
    const arr = new Array(sum + 1).fill(0);
    arr[0] = 1;
    for (let i = 0; i < N; i++) {
        const a = A[i];
        const temp = []
        for (let j = 0; j < arr.length; j++) {
            // console.log(arr, j, a)
            if (arr[j] === 1 && j + a <= sum && arr[j + a] === 0) {
                // arr[j+a] = 1;
                temp.push(j + a)
            }
        }
        temp.forEach(item => { arr[item] = 1 })
    }
    // console.log(arr)
    let i = Math.floor(sum / 2)
    while (true) {
        if (arr[i] === 1) {
            return sum - i * 2;
        }
        i--;
    }
}

// [2, -1, -1, -1, -1, -1, -1, -1]
// [2, -1, -1, -1, -1, -1, -1, -1]
// [2, -1, 1, -1, -1, -1, -1, -1]
// [2, -1, 1, -1, -1, -1, -1, -1]
// [2, -1, 1, -1, 0, -1, -1, -1]
// [2, -1, 1, -1, 0, -1, -1, -1]
// [2, -1, 1, -1, 0, -1, -1, -1]
// [2, -1, 1, -1, 0, -1, -1, -1]
// [1, -1, 1, -1, 0, -1, -1, -1]
// [1, -1, 1, -1, 0, -1, -1, -1]
// [1, -1, 1, -1, 0, -1, -1, -1] 
// [1, -1, 1, 0, 0, -1, -1, -1]
// [1, -1, 1, 0, 1, -1, -1, -1]
// [1, -1, 1, 0, 1, 0, -1, -1]
// [1, -1, 1, 0, 1, 0, -1, -1]
// [1, -1, 1, 0, 1, 0, -1, 0]

// 100%

function solution(A) {
    // Implement your solution here
    const N = A.length;
    let sum = 0,
        max = 0;

    for (let i = 0; i < N; i++) {
        if (A[i] < 0) {
            A[i] = -A[i];
        }
        sum += A[i];
        if (A[i] > max) {
            max = A[i];
        }
    }
    const countArr = new Array(max + 1).fill(0);
    for (let i = 0; i < N; i++) {
        countArr[A[i]] += 1;
    }
    // 动态规划，数组每一项代表是否能用A中的元素达到当前的和/还剩下几个当前元素没使用
    // [2,2,3] 2,3  2,1
  
    const arr = new Array(sum + 1).fill(-1);
    arr[0] = 0;
    for (let i = 1; i < max + 1; i++) { // 因为A中元素范围[-100,100]小，所以将遍历A改成遍历1~max
        if (countArr[i] > 0) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] >= 0) {
                    arr[j] = countArr[i];
                } else if (j >= i && arr[j - i] > 0) {
                    arr[j] = arr[j - i] - 1
                }
                // console.log(arr)
            }
        }
    }
    let i = Math.floor(sum / 2)
    while (true) {
        if (arr[i] > -1) {
            return sum - i * 2;
        }
        i--;
    }
}