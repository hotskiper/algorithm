function solution(A, B) {
    // Implement your solution here[0,1,1,0,0]
    let alive = 0;
    const downFish = [];
    for (let i = 0; i < B.length; i++) {
        const v = B[i];
        if (v === 0) {
            if (downFish.length === 0) {
                alive++;
            } else {
                while (downFish[downFish.length - 1] < A[i]) {
                    downFish.pop();
                    if (downFish.length === 0) {
                        alive++;
                    }
                }
            }
        } else {
            downFish.push(A[i]);
        }
    }
    // console.log(downFish, alive)
    return downFish.length + alive;
}
