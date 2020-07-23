/**
 * 给定一个数组，求连续子串的最大和
 */
/**
 * @description 动态规划 - 子序最大和
 */
function dynamic(nums) {
    let result  = 0;

    let dp = []; // 存放最大连续串的和

    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            result = nums[0];
            dp[0] = result;
        }else {
            let curVal = dp[i - 1] + nums[i];
            dp[i] = Math.max(curVal, nums[i]);
            result = Math.max(result, dp[i]);
        }
    }

    return result;
}

let result = dynamic([-1,2,1,-3,4,1,-1,5]);

console.log(result);