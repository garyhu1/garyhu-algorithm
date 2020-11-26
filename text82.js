/**
 * 滑动窗口 - 滑动窗口中的最大值
 */

/**
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回滑动窗口中的最大值。
示例:
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
 */

 function maxMoveWindow(nums, k) {
     if(nums.length < k) {
         return [];
     }

     let window = [];
     let result = [];

     for(let i = 0; i < nums.length; i++) {
         // 先踢出滑出窗口的数据
         if(window[0] !== undefined && window[0] <= i - k) {
             window.shift();
         }
         // 保证队首值最大
         while(nums[window[window.length - 1]] <= nums[i]) {
             window.pop();
         }

         window.push(i);

         // 窗口满足时存放最大值
         if(i >= k - 1) {
             result.push(nums[window[0]]);
         }
     }

     return result;
}

let nums = [1,3,-1,-3,5,3,6,7];
let result = maxMoveWindow(nums, 3);

console.log(result);