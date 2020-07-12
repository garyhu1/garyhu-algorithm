/**
   我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。

   请你返回由  [low, high]  范围内所有顺次数组成的 有序 列表（从小到大排序）。

示例 1：

输出：low = 100, high = 300
输出：[123,234]
示例 2：

输出：low = 1000, high = 13000
输出：[1234,2345,3456,4567,5678,6789,12345]
提示：

10 <= low <= high <= 10^9
 */
/**
 * @description 递归与回溯（3）- 顺次数
 */
function combine(low, high) {
	let result = [];
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	let maxLen = `${high}`.length;
	let minLen = `${low}`.length;

	for(let i = 1; i <= (10 - minLen); i++) {
		for(let j = minLen; j <= maxLen; j ++) {
			let sum = 0;
			let num = i;
			for(let k = j - 1; k >= 0; k--) {
				sum = sum + num * Math.pow(10, k);
				num = num + 1;
			}
			console.log(sum)
			if(sum <= high && sum >= low) {
				result.push(sum);
			}
		}
	}

	return result;
}

let result = combine(1000, 13000);

console.log(result);