function solution(A) {
    // Implement your solution here
    const n = A.length;
    const larr = [];
    larr[0] = 0;
    larr[1] = 0;
    for (let i = 2; i < n-1; i++) {
        const a = A[i-1];
        larr[i] = Math.max(larr[i-1]+a, a, 0)
    }
    // console.log(larr)
    const rarr = [];
    rarr[n-1] = 0;
    rarr[n-2] = 0;
    for(let i = n-3 ; i > 0 ; i--){
        const a = A[i+1];
        rarr[i] = Math.max(rarr[i+1]+a, a, 0)
    }

    
    // console.log(rarr)
    let max = 0;
    for(let i = 1 ; i < n-1 ; i++){
        const a =larr[i]+rarr[i];
        if(a>max){
            max = a;
        }
    }
    return max;
}