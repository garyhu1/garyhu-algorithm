function combine(...arr) {
    let result = [];

    const helper = (index, prev) => {
        let curArr = arr[index];
        let isLast = index === arr.length - 1;
        for(let key of curArr) {
            let cur = prev.concat(key);
            if(isLast) {
                result.push(cur);
            }else {
                helper(index + 1, cur);
            }
        }
    };

    helper(0, []);

    return result;
}

let result = combine(['Iphone XS', 'Iphone 11'], ['白色', '黑色', '灰色'], ['64G', '128G']);

console.log(result);