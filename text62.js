/**
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意:

每个数组中的元素不会超过 100
数组的大小不会超过 200
示例 1:

输入: [1, 5, 11, 5]

输出: true

解释: 数组可以分割成 [1, 5, 5] 和 [11].

示例  2:

输入: [1, 2, 3, 5]

输出: false

解释: 数组不能分割成两个元素和相等的子集.
 */
/**
 * @description 动态规划 - 分割等和子集（01背包的变种）
 */
function dymanic(nums) {
    let len = nums.length;
    if(len < 2) {
        return false;
    }

    let sum = nums.reduce((prev, cur) => prev + cur, 0);

    let target = sum / 2;

    if(Math.ceil(target) !== target) {
        return false;
    }

    let dp = [];
    for(let i = 0; i < len; i++) {
        dp[i] = [];
        for(let j = 0; j <= target; j++) {
            // 当前值是否与目标相同
            let curVal = j === nums[i];
            // 拿当前值时
            let picCurVal = (dp[i - 1] ? dp[i - 1][j - nums[i]] : false) || false;
            // 不拿当前值时
            let throwCurVal = (dp[i - 1] ? dp[i - 1][j] : false) || false;

            let enable = curVal || picCurVal || throwCurVal;

            dp[i][j] = enable;

            if(j === target && enable) {
                return true;
            }
        }    
    }

    return dp[len - 1][target];
}

let result = dymanic([1, 5, 11, 5, 4]);

console.log(result);