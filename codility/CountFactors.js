function solution(N) {
    // Implement your solution here
    let counter = 0,
        d = 1;
    while (d <= N / d) {
        if (d === N / d) {
            counter++;
        } else if (N % d === 0) {
            counter += 2;
        }
        d++;
    }
    return counter;
}
