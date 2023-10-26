function solution(A) {
    // Implement your solution here
    const arr = A.map((item, index)=>[index-item, index+item]).sort((a,b)=>a[0]-b[0]);
    const N = A.length;
    // console.log(arr)
    let count = 0;
    for(let i = 0 ; i < N-1 ; i++){
        const a = arr[i][0], b = arr[i][1];
        for(let j = i+1 ; j < N ; j++){
            const c = arr[j][0], d = arr[j][1];
            if(b < c){
                break;
            }
            count++;
            if(count > 10000000){
               return -1;
            }
        }
    }
    return count;
}