function solution(N, P, Q) {
    // Implement your solution here
    const primes = getPrime(N)
    const semiArr = [];
    for (let i = 0; i < primes.length; i++) {
        const p1 = primes[i]
        for (let j = 0; j < primes.length; j++) {
            const p2 = primes[j]
            if (p1 * p2 > N) {
                break;
            }
            semiArr[p1 * p2] = true;
        }
    }
    // console.log(semiArr)
    const result = [];

    const count = new Array(N + 1);
    for (let i = 0; i < N + 1; i++) {
        if (i === 0) {
            count[i] = 0
        } else {
            count[i] = count[i - 1]
        }
        if (semiArr[i]) {
            count[i]++;
        }

    }
    // console.log(count)
    for (let i = 0; i < P.length; i++) {
        const p = P[i], q = Q[i];
        let gap = count[q] - count[p];
        if(semiArr[p]){gap++;}
        result.push(gap)
    }

    return result;

    function getPrime(n) {
        const arr = new Array(n + 1).fill(1);
        arr[0] = 0;
        arr[1] = 0;
        const max = Math.floor(Math.sqrt(n));
        for (let i = 2; i <= max; i++) {
            if (arr[i] === 0) { continue; }
            for (let j = i + 1; j <= n; j++) {
                if (j % i === 0) {
                    arr[j] = 0;
                }
            }
        }
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                result.push(i)
            }
        }
        return result;
    }
}