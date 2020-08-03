/**
 * 给定两个字符串  text1 和  text2，返回这两个字符串的最长公共子序列的长度。

一个字符串的子序列是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

若这两个字符串没有公共子序列，则返回 0。

示例 1:

输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace"，它的长度为 3。
示例 2:

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc"，它的长度为 3。
示例 3:

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0。
 

提示:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
输入的字符串只含有小写英文字符。
 */
/**
 * @description 动态规划 - 最长公共子序列
 */
function dymanic(text1, text2) {
    let len1 = text1.length;
    let len2 = text2.length;

    if(!len1 || !len2) {
        return 0;
    }

    let dp = [];
    // 处理边界
    for(let i = 0; i < len1; i++) {
        let s1 = text1[i];
        let s2 = text2[0];
        dp[i] = [];
        if(s1 === s2) {
            dp[i][0] = 1;
        }else {
            dp[i][0] = i === 0 ? 0 : dp[i - 1][0];
        }
    }
    for(let j = 1; j < len2; j++) {
        let s1 = text1[0];
        let s2 = text2[j];

        if(s1 === s2) {
            dp[0][j] = 1;
        }else {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for(let i = 1; i < len1; i++) {
        let s1 = text1[i];
        for(let j = 1; j < len2; j++) {
            let s2 = text2[j];
            if(s1 === s2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    return dp[len1 - 1][len2 - 1];
}

let result = dymanic("abc", "def");

console.log(result);