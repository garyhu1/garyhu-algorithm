/**
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号  +  和  -。对于数组中的任意一个整数，你都可以从  +  或  -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
提示：

数组非空，且长度不会超过 20 。
初始的数组的和不会超过 1000 。
保证返回的最终结果能被 32 位整数存下。
 */
/**
 * @description 动态规划 - 目标和
 */
function dymanic(nums, S) {
    let n = nums.length;
    if(!n) {
        return 0;
    }
    let min = nums.reduce((sum, cur) => sum - cur, 0);
    let max = nums.reduce((sum, cur) => sum + cur, 0);
    let dp = [];
    for(let i = 0; i < n; i++) {
        dp[i] = [];
    }

    // 处理边界情况
    for(let s = min; s < max; s++) {
        let num = nums[0];
        // 负数情况
        let minV = s === -num ? 1 : 0;
        // 正数情况
        let maxV = s === num ? 1 : 0;
        dp[0][s] = minV + maxV;
    }

    for(let i = 1; i < n; i++) {
        let num = nums[i];
        for(let s = min; s < max; s++) {
            // 负数情况
            let minV = dp[i - 1][s + num] || 0;
            // 正数情况
            let maxV = dp[i - 1][s - num] || 0;
            dp[i][s] = minV + maxV;
        }
    }

    return dp[n - 1][S] || 0;
}

let result = dymanic([1, 1, 1, 1, 1], 3);

console.log(result);