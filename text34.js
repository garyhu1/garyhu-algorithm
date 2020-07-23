/**
 * 数字 n  代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
	 ]
	 
 */
/**
 * @description  回溯 或 动态规划 - 括号生成
 */

 // 回溯法
 function generateByBack(n) {
	let res = []

	let helper = (left, right, prev) => {
	  if (left < 0 || right < 0 || right < left) {
		return
	  }
	  if (left === 0 && right === 0) {
		res.push(prev)
		return
	  }
  
	  helper(left - 1, right, prev + '(')
	  helper(left, right - 1, prev + ')')
	}
  
	helper(n, n, '')
	return res;
 }
 
 // 动态规划
 function generateByDynic(n) {}

 let result = generateByBack(3);

//  let result = generateByDynic(3);

 console.log(result);