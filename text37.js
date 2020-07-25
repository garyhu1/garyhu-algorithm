/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。

 
示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
 */
/**
 * @description 递归与回溯 - 复原IP地址
 */
function combine(s) {
	let result = [];

	// 定义一个验证函数， 当零开头的数字时，只能有一位，即为零
	const isValid = (str) => {
		let len = str.length;
		if(!len) {
			return false;
		}

		if(str[0] === '0') {
			return len === 1;
		}

		let num = Number(str);

		return num <= 255
	};

	// 定义一个处理函数，入参分别是，点的起点，之前的存入数，已使用的点的数量
	const helper = (start, prev, used) => {
		if(used === 3) {
			let rest = s.substr(start);
			if(isValid(rest)) {
				result.push(prev.concat(rest).join('.'));
			}

			return;
		}

		for(let i = 1; i <= 3; i++) {
			let end = start + i;
			let cur = s.substring(start, end);
			if(isValid(cur)) {
				let curPrev = prev.concat(cur);
				helper(end, curPrev, used + 1);
			} 
		}
	};

	helper(0, [], 0);

	return result;
}

let result  = combine('25525511135');

console.log(result);