/**
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
 */
/**
 * @description 动态规划 - 编辑距离
 */
function dymanic(word1, word2) {
    let dp = [];
    let len1 = word1.length;
    let len2 = word2.length;

    // 边界处理
    for(let y = 0; y <= len1; y++) {
        dp[y] = [];
        dp[y][0] = y;
    }

    for(let x = 0; x <= len2; x++) {
        dp[0][x] = x;
    }

    for(let y = 1; y <= len1; y++) {
        for(let x = 1; x <= len2; x++) {
            if(word1[y - 1] === word2[x - 1]) {
                dp[y][x] = dp[y - 1][x - 1];
            }else {
                dp[y][x] = Math.min(dp[y - 1][x] + 1, dp[y - 1][x - 1] + 1, dp[y][x - 1] + 1);
            }
        }
    }

    return dp[len1][len2];
}

// let result = dymanic('intention', 'execution');

let result = dymanic('horse', 'ros');

console.log(result);