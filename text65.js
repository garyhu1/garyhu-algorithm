/**
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。

示例 1:

输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
示例 2:

输入: amount = 3, coins = [2]
输出: 0
解释: 只用面额 2 的硬币不能凑成总金额 3。
示例 3:

输入: amount = 10, coins = [10]
输出: 1
 */
/**
 * @description 动态规划 - 零钱兑换 II
 */
function dymanic(amount, coins) {
    let len = coins.length;
    if(!len) {
        return 0;
    }

    let dp = [];
    for(let i = 0; i < len; i++) {
        dp[i] = [0];
    }

    for(let j = 1; j <= amount; j++) {
        if(coins[0] === j) {
            dp[0][j] = 1;
        }else if(coins[0] > j){
            dp[0][j] = 0;
        }else {
            dp[0][j] = dp[0][j - coins[0]]
        }
    }

    // console.log(dp);

    for(let i = 1; i < len; i++) {
        for(let j = 1; j <= amount; j++) {
            if(coins[i] === j) {
                dp[i][j] = 1 + dp[i - 1][j];
            }else if(coins[i] < j){
                dp[i][j] = dp[i][j - coins[i]] + dp[i - 1][j];
            }else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    // console.log(dp);

    return dp[len - 1][amount];
}

// let result = dymanic(5, [1, 2, 5]);

let result = dymanic(3, [2]);

console.log(result);