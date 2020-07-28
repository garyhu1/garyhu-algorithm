/**
 * 给定一个方形整数数组  A，我们想要得到通过 A 的下降路径的最小和。

下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。

示例：

输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：12
解释：
可能的下降路径有：
[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
和最小的下降路径是 [1,4,7]，所以答案是 12。
提示：

1 <= A.length == A[0].length <= 100
-100 <= A[i][j] <= 100
 */
/**
 * @description 动态规划 - 下降路径最小和
 */
function dymanic(A) {
    let dp = [];
    let len = A.length;

    for(let y = 0; y < len; y++) {
        dp[y] = [];
    }

    // 处理边界
    for(let x = 0; x < len; x++) {
        dp[0][x] = A[0][x];
    }

    for(let y = 1; y < len; y++) {
        for(let x = 0; x < len; x++) {
            if(x === 0) {
                dp[y][x] = Math.min(dp[y - 1][x], dp[y - 1][x + 1]) + A[y][x];
            }else if(x === len - 1) {
                dp[y][x] = Math.min(dp[y - 1][x], dp[y - 1][x - 1]) + A[y][x];
            }else {
                dp[y][x] = Math.min(dp[y - 1][x], dp[y - 1][x + 1], dp[y - 1][x - 1]) + A[y][x];
            }
        }
    }

    let min = Infinity;
    for(let x = 0; x < len; x++) {
        min = Math.min(min, dp[len - 1][x]);
    }

    return min;
}

let result = dymanic([[1,2,3],[4,9,6],[7,8,5]]);

console.log(result);