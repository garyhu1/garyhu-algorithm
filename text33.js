/**
 * 编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字  1-9  在每一行只能出现一次。
数字  1-9  在每一列只能出现一次。
数字  1-9  在每一个以粗实线分隔的  3x3  宫内只能出现一次。
空白格用  '.'  表示。

image

一个数独。

image

答案被标成红色。

Note:

给定的数独序列只包含数字  1-9  和字符  '.' 。
你可以假设给定的数独只有唯一解。
给定数独永远是  9x9  形式的。

思路：
又是一道 hard 难度的题，我感觉这题整体的思路不难找，但是要写很多代码，抽了几个函数以后代码量会少一点。

其实思路和 N 皇后问题类似，都是在每次递归求解下一项的时候（在这个问题里是求解下一个待填充的格子）需要保证以下几点：

当前行没有出现过这个数字。
当前列没有出现过这个数字。
当前所属的九宫格中没有出现过这个数字。

每个数字分别代表 x, y，比如 21 代表 grids 中的 grids[1][2]，并且这个 grids[1][2] 的值还是一个数组，这个数组的第 i 项就代表 i 这个数字是否在这个九宫格中出现过。
比如 grids[1][2][5] 代表 5 这个数字是否在 12 这个九宫格中出现过。

再用 pending 数组用来记录在第一次扫描中遇到的值为.的格子的坐标，作为待处理的坐标集合。
 */
/**
 * @description  递归与回溯 - 解独数
 */
function combine(matrix) {
    // 记录列、行和九宫格的二维数组
    let rows = generateMatrix(9);
    let columns = generateMatrix(9);
    let grids = generateMatrix(3);

    // 用来记录存在的数字
    const recordCell = (y, x, cell) => {
        rows[y][cell] = true;
        columns[x][cell] = true;
        let [gridY, gridX] = findNineLocation(y, x);
        if(!grids[gridY][gridX]) {
            grids[gridY][gridX] = new Map();
        }
        grids[gridY][gridX].set(cell, true);
    };

    const restoreCell = (y, x, cell) => {
        rows[y][cell] = false;
        columns[x][cell] = false;
        let [gridY, gridX] = findNineLocation(y, x);
        grids[gridY][gridX].set(cell, false);
    };

    // 记录待处理的空格
    let pending = [];

    // 记录出现的数字和'.'的位置
    for(let y = 0; y < 9; y++) {
        for(let x = 0; x < 9; x++) {
            let cell = matrix[y][x];
            if(cell === '.') {
                pending.push([y, x]);
                continue;
            }
            recordCell(y, x, cell);
        }
    }

    // 验证当前元素是否有效
    const isValid = (y, x, cell) => {
        let isRowConflict = rows[y][cell];
        let isColumnConflict = columns[x][cell];
        let [gridY, gridX] = findNineLocation(y, x);
        let grideMap = grids[gridY][gridX];
        let isGridsConflict = grideMap && grideMap.get(cell);
        return !isRowConflict && !isColumnConflict && !isGridsConflict;
    };

    const helper = (start) => {
        if(start === pending.length) {
            return true;
        }

        let [y, x] = pending[start];

        for(let i = 1; i <= 9; i++) {
            if(isValid(y, x, i)) {
                matrix[y][x] = i;
                recordCell(y, x, i);
                if(helper(start + 1)) {
                    return true;
                }else {
                    matrix[y][x] = '.';
                    restoreCell(y, x, i);
                }

            }
        }
    };

    helper(0);

    return matrix;
};

// 定义帮助函数
// 生成二位数组
function generateMatrix(length) {
    let arr = [];
    for(let i = 0; i < length; i++) {
        arr[i] = [];
    }
    return arr;
}

// 查询九宫格出现的位置
function findNineLocation(y, x) {
    return [Math.floor(y / 3), Math.floor(x / 3)];
}

let matirx = [
    [5,3,'.','.',7,'.','.','.','.'],
    [6,'.','.',1,9,5,'.','.','.'],
    ['.',9,8,'.','.','.','.',6,'.'],
    [8,'.','.','.',6,'.','.','.',3],
    [4,'.','.',8,'.',3,'.','.',1],
    [7,'.','.','.',2,'.','.','.',6],
    ['.',6,'.','.','.','.',2,8,'.'],
    ['.','.','.',4,1,9,'.','.',5],
    ['.','.','.','.',8,'.','.',7,9]
]
let result = combine(matirx);

console.log(result);