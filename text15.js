function combine(n, k) {
    let result = [];

    const helper = (start, prev) => {
        let isLast = prev.length === k;

        if(isLast) {
            result.push(prev);
        }else {
            for(let i = start; i <= n; i++) {
                let cur = prev.concat(i);
                helper(i + 1, cur);
            }
        }
    }

    helper(1, []);

    return result;
}

const result = combine(5, 2);

console.log(result);