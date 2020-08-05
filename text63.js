/**
 * 给定一个数组 w 代表物品的重量，v 数组代表物品的价值，C 代表背包的总容量。求背包最多能装下价值多少的物品。每个物品只能装一次。

物品的重量是 [1, 2, 3]，物品的价值是 [6, 10, 12]，背包容量是 5。

这种情况下最优解是 22。
 */
/**
 * @description 动态规划 - 背包（01背包）
 */
function dymanic(w, v, C) {
    let len = w.length;
    let dp = [];
    //处理边界
    for(let i = 0; i < len; i++) {
        dp[i] = [0];
    }
    for(let j = 1; j <= C; j++) {
        if(w[j] < j) {
            dp[0][j] = 0;
        }else {
            dp[0][j] = v[0];
        }
    }

    for(let i = 1; i < len; i++) {
        let weight = w[i];
        let value = v[i];
        for(let j = 1; j <= C; j++) {
            if(weight > j) {
                dp[i][j] = dp[i - 1][j];
            }else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
            }
        }
    }
    console.log(dp);

    return dp[len - 1][C]
}

let result = dymanic([1, 2, 3], [6, 10, 12], 5);

console.log(result);