/**
   给定一个正整数 n，生成一个包含 1 到 n*n 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]


思路： 顺时针螺旋可以按照：向右->向下->向左->向上  顺序不停的循环
 */
/**
 * @description 递归与回溯（4）- 螺旋矩阵I
 */
function getRect(n) {
	// x表示列，y表示行
	let result = [];
	let visit = [];

	// 方向
	let directs = [
		[0, 1],      // 向右
		[1, 0],      // 向下
		[0, -1],     // 向左
		[-1, 0]      // 向上
	];

	for(let y = 0; y < n; y++) {
		result.push([]);
		visit.push([]);
	}

	// 检验是否合法，范围不能超越，已经添加的不再添加
	const isVaild = (y, x) => {
		return y >= 0 && y < n && x >= 0 && x < n && !visit[y][x];
	}; 

	let curIndex = 0;
	let targetLen = n * n;

	const helper = (y, x, num) => {
		result[y][x] = num;
		if(num === targetLen) {
			return result;
		}

		visit[y][x] = true;
		let [diffY, diffX] = directs[curIndex % 4];
		let nextX = x + diffX;
		let nextY = y + diffY;
		if(!isVaild(nextY, nextX)) {
			// 该位置已经存放过元素，更换方向，重新排放
			curIndex++;
			[diffY, diffX] = directs[curIndex % 4];
			nextX = x + diffX;
			nextY = y + diffY;
		}
		helper(nextY, nextX, num+1);
	};

	helper(0, 0, 1);

	return result;
}

let result = getRect(3);

console.log(result);