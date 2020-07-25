/**
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
 */
/**
 * @description 递归与回溯 - 全排列 II
 */
function combine(nums) {
    let result = [];

    const getRest = (arr, index) => {
        let prev = arr.concat();
        prev.splice(index, 1);
        return prev;
    };

    const helper = (rest, prev) => {
        if(!rest.length) {
            result.push(prev);
        }

        let addArr = [];
        for(let i = 0; i < rest.length; i++) {
            if(addArr.indexOf(rest[i]) === -1) {
                addArr.push(rest[i]);
                let cur = prev.concat(rest[i]);
                let curRest = getRest(rest, i);
                helper(curRest, cur);
            }
        }
    };

    helper(nums, [])

    return result;
}

let result = combine([1, 2, 1]);

console.log(result);