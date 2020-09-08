/**
 * 给定正整数  n，找到若干个完全平方数（比如  1, 4, 9, 16, ...）使得它们的和等于
n。你需要让组成和的完全平方数的个数最少。

示例  1:

输入: n = 12 输出: 3 解释: 12 = 4 + 4 + 4. 示例 2:

输入: n = 13 输出: 2 解释: 13 = 4 + 9.
 */
/**
 * @description 动态规划 - 完全平方数
 */
function dymanic(n) {
    let dp = [];
    dp[0] = 0;
    for(let i = 1; i <= n; i++) {
        j = 1;
        let min = Infinity;
        while(true) {
            let prev = i - j * j;
            if(prev < 0) {
                break;
            }
            min = Math.min(min, dp[prev] + 1);
            j++;
        }
        dp[i] = min;
    }

    return dp[n];
}

let result = dymanic(15);

console.log(result);