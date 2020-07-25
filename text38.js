/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */
/**
 * @description 递归与回溯 - 电话号码的字母组合
 */
function combine(s) {
	let result = [];

	// 定义一个数字与字母对应的数组，角标对应数字，
	let letters = [
		'',
		'',
		'abc',
		'def',
		'ghi',
		'jkl',
		'mno',
		'pqrs',
		'tuv',
		'wxyz'
	]

	const helper = (start, prev) => {
		if(start === s.length) {
			result.push(prev);
			return;
		}
		let cur = Number(s[start]);
		let letter = letters[cur];
		for(let i = 0; i < letter.length; i++) {
			helper(start + 1, prev + letter[i]);
		}
	};

	helper(0, '');

	return result;
}

let result = combine('23');

console.log(result);