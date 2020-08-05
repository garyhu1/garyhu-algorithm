/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释:  子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释:  结果不能为 2, 因为 [-2,-1] 不是子数组。
 */
/**
 * @description 动态规划 - 乘积最大子数组
 */
function dymanic(nums) {
    let len  = nums.length;
    if(!len) {
        return 0;
    }

    let dp = [];
    dp[0] = [nums[0], nums[0]];  // 第一个元素表示当前位置最大乘积， 第二个元素表示最小乘积

    let max = 0;
    for(let i = 1; i < len; i++) {
        let more = Math.max(nums[i], dp[i - 1][0] * nums[i], dp[i - 1][1]*nums[i]);
        let less = Math.min(nums[i], dp[i - 1][0] * nums[i], dp[i - 1][1]*nums[i]);
        max = Math.max(more, max);
        dp[i] = [more, less];
    }
    return max;
}

// let result = dymanic([2,3,-2,4, -5]); // 240
let result = dymanic([-2,0,-1]); // 240

console.log(result);