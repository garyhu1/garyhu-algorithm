/**
 * 一条包含字母A-Z的消息通过以下方式进行了编码：
 * 'A'->1、'B'->2、....、'Z'->26
 * 
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数
 * 
 * 示例： 
 * 输入 ："12"
 * 输出： 2
 * 解释： "AB"(1 和 2)或者"L"(12)
 */
/**
 * @description 动态规划 - 解码方法
 * 
 * 思路： dp[i] = dp[i - 1] + dp[i - 2] ; S[i-1]和S[i]组成的数字小于等于26时，否则为dp[i] = dp[i - 1] ；
 *  还有S[i] === '0'的情况， 当S[i-1] > 2时，直接无法解码，返回0，否则dp[i] = dp[i-2]。
 */

function dymanic(S) {
    let len = S.length;
    if(len === 1) {
        return 1;
    }else if(len === 2) {
        let num = Number(S);
        if(num <= 26) {
            return 2;
        }else {
            return S[1] === '0' ? 0 : 1;
        }
    }
    let dp = [];
    dp[0] = 1;
    let n = Number(`${S[0]}${S[1]}`);
    if(n <= 26) {
        dp[1] = S[1] === '0' ? 1 : 2;
    }else {
        dp[1] = S[1] === '0' ? 0 : 1;
    }
    if(dp[1] === 0) {
        return 0;
    }
     
    for(let i = 2; i < S.length; i++) {
        if(Number(`${S[i-1]}${S[i]}`) <= 26) {
            dp[i] = S[i] === '0' ? dp[i - 2] : dp[i - 1] + dp[i - 2];
        }else {
            if(S[i] === '0') {
                return 0;
            }else {
                dp[i] = dp[i - 2];
            }
        }
    }

    return dp[len - 1];
}

let result = dymanic('2220');  // 2

console.log(result);