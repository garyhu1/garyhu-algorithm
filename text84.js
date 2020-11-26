/**
 * 滑动窗口 - 长度最小的子数组
 */
/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

 

示例：

输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */
function minSubArr(nums, s) {
    let sum = 0;
    let result = Infinity;
    let right = 0;
    let left = 0;

    while(right < nums.length) {
        sum += nums[right];
 
        while(sum >= s) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++;
    }

    return result;
}

let nums = [2,3,1,2,4,3];
let result = minSubArr(nums, 7);
console.log(result);