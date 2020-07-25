/**
 * 给定一个整数数组和一个整数  k，你需要找到该数组中和为  k  的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
说明 :

数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 */
/**
 * @description 递归与回溯 - 和为K的子数组
 */
function combine(nums, k) {
	let result = 0;

	for(let i = 0; i < nums.length; i++) {
		let total = 0;
		for(let j = i; j < nums.length; j++) {
			total += nums[j];
			if(total === k) {
				result++;
				break;
			}
		}
	}
	return result;
}

let result = combine([1, 1, 2, 1], 3);

console.log(result);