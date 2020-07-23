/**
 * 给定一个字符串 S，通过将字符串 S 中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合
 * 示例:
输入: S = "a1b2"
输出: ["a1b2", "a1B2", "A1b2", "A1B2"]

输入: S = "3z4"
输出: ["3z4", "3Z4"]

输入: S = "12345"
输出: ["12345"]
注意：

S 的长度不超过12。
S 仅由数字和字母组成。
 */
/**
 * @description 递归与回溯 - 字母大小写全排列
 */
function combine(S) {
    let arr = S.split('');

    const checkWord = (s) => {
        let reg = /[A-Z]/;
        return reg.test(s);
    }
    
    // for(let i = 0; i < arr.length; i++) {
    //     // console.log(Object.is(Number(arr[i]),NaN));
    //     if(Object.is(Number(arr[i]),NaN)) {
    //         console.log(checkWord(arr[i]));
    //     }
    // }

    let result = [];

    const helper = (start, prev) => {

        if(start === arr.length) {
            result.push(prev.join(''));
            return false;
        }

        let val = arr[start];
        if(Object.is(Number(val), NaN)) {
            if(checkWord(val)) {
                val = val.toLowerCase();
            }else {
                val = val.toUpperCase();
            }
            let curArr = prev.concat(val);
            helper(start + 1, curArr);
        }
        let cur = prev.concat(arr[start]);
        helper(start + 1, cur);
    }

    helper(0, []);

    return result;
}

// let result = combine('a1b2');

let result = combine('123456');

console.log(result);