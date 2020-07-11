/**
 * @description 组合总和(2)
 * 
 * 给定一个数组nums和一个目标数target, 找出nums中所有可以使数字总和为target的组合
 * 
 * 说明： nums数组中的数字可以无限次使用；
 *       nums中所有数字为正整数，target为正整数
 *       解集中不可以出现重复组合
 * 
 * 示例：
 * 
 * 输入： nums = [2, 3, 5], target = 8
 * 
 * 输出: 
 * [
 * [2, 2, 2, 2],
 * [2, 3, 3],
 * [3, 5]
 * ]
 */
function combine(nums, target) {
	let result = [];
	nums.sort();  // 防止顺序不一样的重复情况， 所以把相同的数字排在一起

	const helper = (start, prev, prevRes) => {
		let addArr = [];
		for(let i = start; i < nums.length; i++) {
			let curNum = nums[i];
			if(addArr.indexOf(curNum) === -1) {
				addArr.push(curNum);
				let res = prevRes - curNum;
				if(res === 0) {
					let cur = prev.concat(curNum);
					result.push(cur);
				}else if(res > 0){
					let cur = prev.concat(curNum);
					helper(i, cur, res);
				}
			}
		}
	};

	helper(0, [], target);

	return result;
}

let result = combine([2,3,6,7], 7); // [ [ 2, 2, 3 ], [ 7 ] ]
// let result = combine([2,3,5], 8);

console.log(result);