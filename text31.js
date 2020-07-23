/**
 * 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

示例1:

 输入：S = "qqe"
 输出：["eqq","qeq","qqe"]
示例2:

 输入：S = "ab"
 输出：["ab", "ba"]
提示:

字符都是英文字母。
字符串长度在[1, 9]之间。
 */
/**
 * @description 有重复字符串的排列组合-面试题
 */
function combine(S) {
	let arr = S.split('');

	let result = [];

	// 计算剩余元素数组
	const getRest = (array, index) => {
		let restArr = [];
		for(let i = 0; i < array.length; i++) {
			if(i === index) {
				continue;
			}
			restArr.push(array[i]);
		}
		return restArr;
	};

	const helper = (rest, prev) => {
		if(!rest.length) {
			result.push(prev.join(''));
			return false;
		}

		let addArr = [];

		for(let i = 0; i < rest.length; i++) {
			if(addArr.indexOf(rest[i]) !== -1) {
				continue;
			}
			addArr.push(rest[i]);
			let cur = prev.concat(rest[i]);
			let curRest = getRest(rest, i);
			helper(curRest, cur);
		}
	};

	helper(arr, []);

	return result;
}

let result = combine('ab');

console.log(result);