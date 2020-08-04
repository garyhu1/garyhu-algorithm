/**
 * 给定一个整数数组 A，返回 A 中最长等差子序列的长度。

回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <= A.length - 1。
并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B 是等差的。

 

示例 1：

输入：[3,6,9,12]
输出：4
解释： 
整个数组是公差为 3 的等差数列。
示例 2：

输入：[9,4,7,2,10]
输出：3
解释：
最长的等差子序列是 [4,7,10]。
示例 3：

输入：[20,1,15,3,10,5,8]
输出：4
解释：
最长的等差子序列是 [20,15,10,5]。
 */
/**
 * @description 动态规划 - 最长等差数列
 */
function dymanic(nums) {
    let len = nums.length;
    if(len < 3) {
        return len;
    }

    let dp = [];
    dp[0] = {0: 1};

    let res = 0;
    for(let i = 1; i < len; i++) {
        let cur = nums[i];
        dp[i] = {};
        for(let j = 0; j < i; j++) {
            let num = nums[j];
            let diff = num - cur;
            if(dp[j][diff]) {
                let len = dp[j][diff] + 1;
                dp[i][diff] = len; 
                res = Math.max(res, len);
            }else {
                dp[i][diff] = 2;
                res = Math.max(res, 2);
            }
        }
    }

    return res;
}

// let result = dymanic([20,1,15,3,10,5,8]);// 4

// let result = dymanic([9,4,7,2,10]);// 3

let result = dymanic([3,6,9,12]);// 3

console.log(result);