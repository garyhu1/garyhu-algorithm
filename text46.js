/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
 */
/**
 * @description 动态规划 - 最大正方形
 */
function dymanic(matrix) {
    let rowLen = matrix.length;
    if(!rowLen) {
        return 0;
    }
    let columnLen = matrix[0].length;
    let dp = [];
    // 处理边界
    for(let y = 0; y < rowLen; y++) {
        dp[y] = [];
        dp[y][0] = matrix[y][0];
    }

    for(let x = 0; x < columnLen; x++) {
        dp[0][x] = matrix[0][x];
    }

    let maxLen = 0;

    for(let y = 1; y < rowLen; y++) {
        for(let x = 1; x < columnLen; x++) {
            if(matrix[y][x] === 1) {
                dp[y][x] = Math.min(dp[y - 1][x - 1], dp[y - 1][x], dp[y][x - 1]) + 1;
                maxLen = Math.max(dp[y][x], maxLen);
            }else {
                dp[y][x] = 0;
            }
        }
    }

    return Math.pow(maxLen, 2);
}

let result = dymanic([[1, 0, 1, 0, 0],[1, 0, 1, 1, 1],[1, 1, 1, 1, 1],[1, 0, 0, 1, 0]]);

console.log(result);