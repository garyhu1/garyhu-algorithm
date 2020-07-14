/**
  给定一个  m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？

思路
先遍历一次，记录所有刚开始为 0 的点，这点很重要，不能边处理边找 0 点，因为找到一个 0 点后同一行和同一列都会变成 0，会错乱掉。

之后就是遍历所有的 0 点，把排和列全部变成 0，并且把处理过的行和列记录在缓存表中优化性能。
 */
/**
 * @description 递归与回溯（7）- 矩阵置零
 */
function combine(matrix) {
    let rowLen = matrix.length;
    if(!rowLen) return;
    let columnLen = matrix[0].length;

    // 记录零的位置
    let zeroLocation = [];
    for(let y = 0; y < rowLen; y++) {
        for(let x = 0; x < columnLen; x++) {
            let val = matrix[y][x];
            if(val === 0) {
                zeroLocation.push([y, x]);
            }
        }
    }

    // 定义两个变量，处理同一行和列多次置零，消耗性能
    let handleRow = [];
    let handleColumn = [];

    // 把位置为零的行列置零
    for(let [y, x] of zeroLocation) {
        // 把行置零
        if(!handleRow[y]) {
            for(let i = 0; i < columnLen; i++) {
                matrix[y][i] = 0;
            }
            handleRow[y] = true;
        }
        // 把列置零
        if(!handleColumn[x]) {
            for(let i = 0; i < rowLen; i++) {
                matrix[i][x] = 0;
            }
            handleColumn[x] = true;
        }
    }
}


let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
combine(matrix);

console.log(matrix);