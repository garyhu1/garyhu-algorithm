/**
 * @description 动态规划 - 正则匹配
 */
function dymanic(s, p) {
	let m = s.length;
	let n = p.length;
	
	let dp = [];
	for(let i = 0; i <= m; i++) {
		dp[i] = [];
	}
	// 定义一个匹配函数，处理'.'
	const matches = (i, j) => {
		if(i === 0) {
			return false;
		}
		if(p[j - 1] === '.') {
			return true;
		}

	    return s[i - 1] === p[j - 1];	
	};

	dp[0][0] = true;
	for(let y = 0; y <= m; y++) {
		for(let x = 1; x <= n; x++) {
			if(p[x] === '*') {
				if(matches(y, x - 1)) {
					dp[y][x] = dp[y - 1][x] || dp[y][x - 2];
				}else {
					dp[y][x] = dp[y][x - 2]
				}
			}else {
				if(matches(y, x)) {
					dp[y][x] = dp[y - 1][x - 1];
				}else {
					dp[y][x] = false;
				}
			}
		}
	}
	return dp[m][n];
}

let result = dymanic('abcddbccc', 'a.c.*b.*');

console.log(result);