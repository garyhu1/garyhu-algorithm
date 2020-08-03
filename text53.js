/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 */
/**
 * @description 动态规划 - 最长上升子序列
 */
function dymanic(arr) {
    let len = arr.length;
    if(!len) {
        return 0;
    }

    let dp = [];
    dp[0] = 1;
    for(let i = 1; i < len; i++) {
        let res = 1;
        for(j = 0; j < i; j++) {
            if(arr[i] > arr[j]) {
                res = Math.max(res,dp[j] + 1);
            }
        }
        dp[i] = res;
    }

    return Math.max(...dp);
}

let result = dymanic([10,9,2,5,3,7,101,18]);

console.log(result);