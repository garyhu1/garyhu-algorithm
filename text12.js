/**
 * @description 最接近的三数之和 
 * @field 双指针问题
 * 
 * 给定一个包括  n 个整数的数组  nums  和 一个目标值  target。
 * 找出  nums  中的三个整数，使得它们的和与  target  最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在唯一答案
 * 
 * 示例：
 *  
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */
function threeSumClosest (nums, target) {
	if(nums.length === 3) {
		return getSum(nums);
	}
	// 先排序(升序)
	nums.sort((a, b) => {
		return a - b;
	});
	// 定义一个最终结果
	let result;
	// 定义一个和target最小差
	let min = Infinity; 
	for(let i = 0; i < nums.length; i++) {
		// 定义两个指针，left从左边向右逐渐增大，right从右边向左逐渐减小
		let left = i + 1, right = nums.length - 1;
		let curVal = nums[i];
		while(left < right) {
			let curSum = curVal + nums[left] + nums[right];
			let diffVal = Math.abs(curSum - target);
			if(diffVal < min) {
				min = diffVal;
				result = curSum;
			}
			if(result < target) {
				left++;
			}else if(result > target) {
				right--;
			}else {
				return result;
			}
		}
	}	

	return result;
}

function getSum(nums) {
	return nums.reduce((prev, cur) => {
		return prev + cur;
	}, 0)
}

let result = threeSumClosest ([-1,2,1,-4]);

console.log(result);