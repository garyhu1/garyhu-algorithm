/**
 * @description 给定两个数组，编写一个函数来计算它们的交集。
 * @field 查找表问题
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 */

function calcIntersect(arr1, arr2) {
	// 先统计个数，key是元素，value是元素出现的次数
	const map1 = makeMap(arr1);
	const map2 = makeMap(arr2);

	let arr = [];
	for(let key of map1.keys()) {
		if(map2.has(key)) {
			let val1 = map1.get(key);
			let val2 = map2.get(key); 
			// 取两个数组中出现的最小次数
			let minVal = Math.min(val1, val2);
			// 添加到目标数组中
			for(let i = 0; i < minVal; i++) {
				arr.push(key);
			}
		}
	}

	return arr;
}

function makeMap(arr) {
	let map = new Map();
	for(let key of arr) {
		let val = 0;
		if(map.has(key)) {
			val = map.get(key);
		}

		map.set(key, val + 1);
	}
	return map;
}

let arr = calcIntersect([1,2,3,2,1], [3,2,2]);

console.log(arr);