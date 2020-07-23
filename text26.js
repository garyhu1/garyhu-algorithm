/**
  在二维网格 grid 上，有 4 种类型的方格：

1 表示起始方格。且只有一个起始方格。
2 表示结束方格，且只有一个结束方格。
0 表示我们可以走过的空方格。
-1 表示我们无法跨越的障碍。
返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目，每一个无障碍方格都要通过一次。

示例 1：

输入：[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
输出：2
解释：我们有以下两条路径：
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
示例 2：

输入：[[1,0,0,0],[0,0,0,0],[0,0,0,2]]
输出：4
解释：我们有以下四条路径：
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
示例 3：

输入：[[0,1],[2,0]]
输出：0
解释：
没有一条路能完全穿过每一个空的方格一次。
请注意，起始和结束方格可以位于网格中的任意位置。
提示：

1 <= grid.length * grid[0].length <= 20

思路
先遍历一遍所有的格子，统计 0 出现的次数和 1 起点出现的位置。

然后就是和其他题目一样的递归回溯流程，从起点开始不断的向着上下左右四个方向扩散，
并且每次递归遇到 0 的格子都把当前记录的数量加1，并且传入下一次递归中。当到达了2 的时候，
查看走过的 0数量是否等于最开始统计的次数。如果相等，则记录为一次有效路径。
 */
/**
 * @description 递归与回溯（8）- 不同路径
 */
function combine(matrix) {
    let rowLen = matrix.length;
    if(!rowLen) {
        return [];
    }
    let columnLen = matrix[0].length;
    // 先找到零的个数和起点1位置、终点2位置
    let zeroNum = 0;
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    // 定义四个方向
    let directions = [
        [0, 1],  // 向右
        [0, -1], // 向左
        [1, 0],  // 向下
        [-1, 0]  // 向上
    ]

    // 定义集合，存放被访问过位置的状态
    let visited = [];
    // 定义结果长度
    let result = 0;

    for(let y = 0; y < rowLen; y++) {
        visited[y] = [];
        for(let x = 0; x < columnLen; x++) {
            let cur = matrix[y][x];
            if(cur === 1) {
                startX = x;
                startY = y;
            }else if(cur === 2) {
                endX = x;
                endY = y;
            }else if(cur === 0) {
                zeroNum++;
            }
        }
    }

    // 验证该位置是不是合法
    const isVaild = (x, y) => {
        // console.log(x, y)
        return x >= 0 && x < columnLen && y >= 0 && y < rowLen && !visited[y][x] && matrix[y][x] !== -1;
    };

    const helper = (x, y, passNum) => {
        let curVal = matrix[y][x];
        if(curVal === 2) {
            if(passNum === zeroNum) {
                result++;
            }
        }else if(curVal === 0) {
            passNum += 1;
        }

        // 往四个方向递归回溯
        for(let i = 0; i < directions.length; i++) {
            let [diffY, diffX] = directions[i];
            let nextX = x + diffX;
            let nextY = y + diffY;
            if(isVaild(nextX, nextY)) {
                visited[nextY][nextX] = true;
                helper(nextX, nextY, passNum);
                // 回溯后把之前的状态回归到false
                visited[nextY][nextX] = false;
            }
        }

    };

    visited[startY][startX] = true;

    helper(startX, startY, 0);

    return result;
}

let result = combine([[1,0,0,0],[0,0,0,0],[0,0,0,2]]);

console.log(result);