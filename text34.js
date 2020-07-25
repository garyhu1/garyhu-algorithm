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
 
 /**
  * 
  * 这题 DP 的思路比较难找，其实是这样的：

先建立一个数组 dp，假设 dp 中的每个下标存着「当前下标可以凑成的括号全部种类」。目前我们知道最小的状态，也就是只有一对括号的时候， dp[1] = ['()']。

对于之后的每一次状态，都先假设「拿出一个括号」包在最外面（所以后面的代码里会出现很多 i - 1，就是减去了已经使用的括号）。

然后分别去计算这个拿出来的括号「内部」分别使用 0 ~ n 时可以有几种排列方式，并且在这个括号的外部，用「剩余的括号对数」可以有几种排列方式，这几种方式的「笛卡尔积」就是结果。

对于 dp[2]：
我们假设有一对新加入的括号 ()包所有情况的最外面，因为我们默认用掉了 1 对括号包在最外面，那么此时还剩下的可使用的括号对数是 2 - 1 = 1，也就是 1 对。

那么我们思考一下， 被这对新括号所包括的内部（新加入的括号我会用空格分隔，便于观察）：

包住「1 对括号时候的所有排列」，也就是 ( () )，此时正好用光两对括号。

包住「0 对括号时候的所有排列」，也就是 ( )，此时还剩一对括号，那么去找 dp[1]，也就是剩余 1 对括号时的全部排列，放在( )的右边，也就拼成了( )()。

此时得出，dp[2] = ['(())', '()()']。

对于 dp[3]：
包住「2 对括号时候的所有排列」，从刚刚算出的 dp[2] 中分别取出所有情况，此时拼成了
(dp[2]的所有情况)，也就是 ( (()) ), ( ()() )。

包住「1 对括号时的所有排列」，从 dp[1]取所有情况，此时拼成了
( () )，此时还剩下 1 对括号，再取 dp[1] 放在这个结果的右边， ( () )()。

包住「0 对括号时候的所有排列」，此时拼成了 ( )，此时还剩下 2 对括号，再取 dp[2]的所有情况拼在右边，( )(()), ( )()()。

以上所有情况，就是 dp[3]的结果，dp[3] = ['( (()) )', ' ( ()() )', '( () )()', '( )(())', ' ( )()()']。

所以，此题的状态转移方程是 dp[i] = "(" + dp[j] + ")" + dp[i- j - 1] , j = 0, 1, ..., i - 1。
  */
function generateByDynic(n) {
	let dp = [];
	dp[0] = [''];
	dp[1] = ['()'];
	for(let i = 2; i <= n; i++) {
		let res = [];
		for(let j = 0; j <= i - 1; j++) {
			let inners = dp[j];
			let outers = dp[i - j - 1];
			// 进行组合操作
			for(let inner of inners) {
				for(let outer of outers) {
					res.push(`(${inner})${outer}`);
				}
			}
		}
		dp[i] = res;
	}

	return dp[n];
}

//  let result = generateByBack(3);

 let result = generateByDynic(3);

 console.log(result);