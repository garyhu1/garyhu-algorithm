/**
   给定一个包含  m x n  个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
/**
 * @description 递归与回溯（4）- 螺旋矩阵II
 */
function getArr(rects) {
    let result = [];
    let directs = [
        [0, 1],   // 向右
        [1, 0],   // 向下
        [0, -1],  // 向左
        [-1, 0]    // 向上
    ];
    // 定义一个数组记录取过值的位置
    let visit = [];
    for(let y = 0; y < rects.length; y++) {
        visit[y] = [];
    }

    let m = rects.length;
    let n = rects[0].length;
    let targetLen = m * n;

    // 验证边界和是否已取过值
    const isVaild = (y, x) => {
        return y >= 0 && y < m && x < n && x >= 0 && !visit[y][x];
    }

    let curIndex = 0;

    const helper = (y, x) => {
        result.push(rects[y][x]);
        if(result.length === targetLen) {
            return result;
        }

        visit[y][x] = true;   // 标记已取过值

        let [diffY, diffX] = directs[curIndex % 4];
        let nextX = x + diffX;
        let nextY = y + diffY;
        if(!isVaild(nextY, nextX)) {
            curIndex++;
            [diffY, diffX] = directs[curIndex % 4];
            nextX = x + diffX;
            nextY = y + diffY;
        }

        helper(nextY, nextX);
    };

    helper(0, 0);
    return result;
}

let result = getArr([[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]]);

console.log(result);