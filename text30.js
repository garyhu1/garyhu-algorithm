/**
 * 你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为  m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。

为了使收益最大化，矿工需要按以下规则来开采黄金：

每当矿工进入一个单元，就会收集该单元格中的所有黄金。
矿工每次可以从当前位置向上下左右四个方向走。
每个单元格只能被开采（进入）一次。
不得开采（进入）黄金数目为 0 的单元格。
矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止。

示例 1：

输入：grid = [[0,6,0],[5,8,7],[0,9,0]]
输出：24
解释：
[[0,6,0],
 [5,8,7],
 [0,9,0]]
一种收集最多黄金的路线是：9 -> 8 -> 7。
示例 2：

输入：grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
输出：28
解释：
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
一种收集最多黄金的路线是：1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7。
 */
/**
 * @description 递归与回溯 - 黄金矿工
 */
function combine(matrix) {
	let rowLen = matrix.length;
	if(!rowLen) {
		return 0;
	}
	let columnLen = matrix[0].length;

	// 定义一个方向数组
	let directions = [
        [0, 1],  // 向右
        [0, -1], // 向左
        [1, 0],  // 向下
        [-1, 0]  // 向上
	];
	
	let maxVal = 0;

	// 定义一个存放空格不为零的矩阵
	let grid = [];
	// 定义一个存放被访问过的数组
	let visited = [];

	for(let y = 0; y < rowLen; y++) {
		visited[y] = [];
		for(let x = 0; x < columnLen; x++) {
			if(matrix[y][x] !== 0) {
				grid.push([y, x]);
			}
		}
	}

	// 定义个函数验证该空格是否合法
	const isVaild = (y, x) => {
		return x >= 0 && x < columnLen && y >= 0 && y < rowLen && !visited[y][x] && matrix[y][x] !== 0;
	};

	const helper = (y, x, val) => {
		let curVal = matrix[y][x] + val;
		maxVal = Math.max(maxVal, curVal);

		for(let i = 0; i < directions.length; i++) {
			let [diffY, diffX] = directions[i];
			let nextX = x + diffX;
			let nextY = y + diffY;
			if(isVaild(nextY, nextX)) {
				visited[nextY][nextX] = true;
				helper(nextY, nextX, curVal);
				visited[nextY][nextX] = false;
			}
		}
	};

	// 从不为零的位置出发
	for(let i = 0; i < grid.length; i++) {
		let [y, x] = grid[i];
		visited[y][x] = true;
		helper(y, x, 0);
		visited[y][x] = false;
	}

	return maxVal;
}

// let result = combine([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]); // 28

let result = combine([[0,6,0],[5,8,7],[0,9,0]]); // 24

console.log(result);