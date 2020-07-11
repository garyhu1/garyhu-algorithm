/**
 * @description 给定两个整数n和k，返回1...n中所有可能的k个数的组合
 * 
 * 例如： n=4, k=2 返回[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 */

 function combine(n, k) {
	let result = [];
	const helper = (start, prev) => {
		let isEnd = prev.length  === k;
		if(isEnd) {
			result.push(prev);
		}else {
			for(let i = start; i <= n; i++){
				let cur = prev.concat(i);
				helper(i + 1, cur);
			}
		}
	}

	helper(1, []);

	return result;
 }

 let result = combine(5, 2);

 console.log(result);