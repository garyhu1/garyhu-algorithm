/**
 * @description 组合总和(1)
 * 
 * 给定一个数组nums和一个目标数target, 找出nums中所有可以使数字总和为target的组合
 * 
 * 说明： nums数组中的数字只能使用一次；
 *       nums中所有数字为正整数，target为正整数
 *       解集中不可以出现重复组合
 * 
 * 示例：
 * 
 * 输入： nums = [10, 1, 2, 7, 6, 1, 5], target = 8
 * 
 * 输出: 
 * [
 * [1, 7],
 * [1, 2, 5],
 * [2, 6],
 * [1, 1, 6]
 * ]
 */

function combine(nums, target) {
    let result = [];
    // 先排序，重要 (目的是把重复的数字放在一起)
    nums.sort();

    const helper = (start, prev, prevRes) => {
        let addArr = [];
        for(let i = start; i < nums.length; i++) {
            let curNum = nums[i];
            if(addArr.indexOf(curNum) === -1) {
                let res = prevRes - curNum;
                addArr.push(curNum);
                if(res === 0) {
                    let cur = prev.concat(curNum);
                    result.push(cur);
                }else if(res > 0) {
                    let cur = prev.concat(curNum);
                    helper(i + 1, cur, res);
                }
            }
        }
    };

    helper(0, [], target);

    return result;
}

// let result = combine([10, 1, 2, 7, 6, 1, 5], 8);
let result = combine([2, 5, 2, 1, 2], 5); // [ [ 1, 2, 2 ], [ 5 ] ]

console.log(result);