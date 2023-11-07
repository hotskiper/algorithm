function memoize(fn) {
    const cache = [new Map()];
    return function (...args) {
        const n = args.length;
        let temp = cache;
        for (let i = 0; i < n; i++) {
            const key = args[i];
            let map = temp[0];
            if (!map.has(key)) {
                map.set(key, [new Map()])
            }
            temp = map.get(key)
        }
        if(temp.length !== 2){
            temp.push(fn(...args))
        }
        return temp[1]
    }
}