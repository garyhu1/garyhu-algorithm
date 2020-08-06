/**
 * 数组的每个索引做为一个阶梯，第  i 个阶梯对应着一个非负数的体力花费值  costi。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

示例  1:

输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从 cost[1]开始，然后走两步即可到阶梯顶，一共花费 15。
  示例 2:

输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从 cost[0]开始，逐个经过那些 1，跳过 cost[3]，一共花费 6。
注意：

cost  的长度将会在  [2, 1000]。
每一个  cost[i] 将会是一个 Integer 类型，范围为  [0, 999]。
 */
/**
 * @description 动态规划 - 使用最小花费爬楼梯
 */
function dymanic(nums) {
    let len = nums.length;
    if(!len) {
        return 0;
    }
    let dp = [];

    dp[0] = nums[0];
    dp[1] = nums[1];

    for(let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + nums[i];
    }

    return Math.min(dp[len - 1], dp[len - 2]);
}

// let result = dymanic([10, 15, 20]);
let result = dymanic([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);

console.log(result);