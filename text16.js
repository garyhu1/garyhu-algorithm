/**
 * @description 子集
 * 
 * 给定一个可能包含重复元素的整数数组nums,返回该数组所有可能的子集（幂集）
 * 
 * 说明： 解集不能包含重复的子集
 * 
 * 如输入[1, 2, 2]
 * 
 * 输出：
 * [
 * [1],
 * [1,2],
 * [2,2],
 * [1,2,2],
 * [2],
 * []
 * ]
 */

function combine(nums) {
	let result = [];
	// 先排序，重要 (目的是把重复的数字放在一起)
    nums.sort();

	const combineSub = (k) => {

		const helper = (start, prev) => {
			let isLast = prev.length === k;

			if(isLast) {
				result.push(prev);
			}else {
				// 记录当前循环已经被添加的元素
				let addArr = [];
				for(let i = start; i < nums.length; i++) {
					let curElement = nums[i];
					if(addArr.indexOf(curElement) === -1) {
						addArr.push(curElement);
						let cur = prev.concat(curElement);
						helper(start + 1, cur);
					}
				}
				addArr = null;
			}
		};
		if(k === nums.length) {
			result.push(nums);
		}else if(k === 0) {
			result.push([]);
		}else {
			helper(0, []);
		}
	};
	for(let i = 0; i <= nums.length; i++) {
		combineSub(i);
	}

	return result;
}

let result = combine([2, 1, 2]);

console.log(result);