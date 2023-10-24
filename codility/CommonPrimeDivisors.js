function solution(A, B) {
    // Implement your solution here3.50 30 350
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
        const a = A[i],
            b = B[i];
        if (a === b) {
            counter++;
            continue;
        }
        const gcd = getgcd(a, b);
        if (gcd === 1) {
            continue;
        }
        const c = a / gcd;
        const d = b / gcd;
        if (!hasOtherPrime(c, gcd) && !hasOtherPrime(d, gcd)) {
            counter++;
        }
    }
    return counter;
    //判断n是否有gcd包含约数之外的约数10,8
    function hasOtherPrime(n, gcd) {
        const gcdN = getgcd(n, gcd);
        if (gcdN === 1) {
            return n !== 1;
        }
        return hasOtherPrime(n / gcdN, gcd);
    }
    function getgcd(a, b) {
        if (a < b) {
            return getgcd(b, a);
        }
        if (a % b === 0) {
            return b;
        }
        return getgcd(b, a % b);
    }
}
