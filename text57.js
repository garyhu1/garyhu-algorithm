/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

自顶向下的最小路径和为  11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n)  的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */
/**
 * @description 动态规划 - 三角形最小路径和
 */
function dymanic(matrix) {
    let len = matrix.length;
    if(!len) {
        return 0;
    }

    let dp = [];
    dp[0] = [matrix[0][0]];

    for(let i = 1; i < len; i++) {
        dp[i] = [];
        for(let j = 0; j < i + 1; j++) {
            dp[i][j] = Math.min((dp[i-1][j] || Infinity), (dp[i-1][j-1] || Infinity), (dp[i-1][j+1] || Infinity)) + matrix[i][j];
        }
    }

    return Math.min(...dp[len - 1]);
}

let result = dymanic([[2],[3,4],[6,5,7],[4,1,8,3]]);

console.log(result);