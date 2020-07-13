/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
示例:
输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。

提示：

皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自 百度百科 - 皇后 ）
 */
/**
 * @description 递归与回溯（6）： N皇后
 */
function solvedQueens(n) {
    let result = [];
    // 记录对角线(左下到右上)存放的Q
    let dia1 = [];
    // 记录对角线（左上到右下）存放的Q
    let dia2 = [];
    // 记录列上存放的Q
    let columns = [];

    // 记录状态
    const record = (rowIndex, columnIndex, bool) => {
        columns[columnIndex] = bool;
        dia1[rowIndex + columnIndex] = bool;
        dia2[rowIndex - columnIndex] = bool;
    }

    const putQueen = (rowIndex, prev) => {
        console.log(rowIndex)
        if(rowIndex === n) {
            console.log('开始返回')
            result.push(generateMatrix(prev));
            console.log('返回')
            return;
        }

        for(let i = 0; i < n; i++) {
            let columnNotConflict = !columns[i];
            let dia1NotConflict = !dia1[i+rowIndex];
            let dia2NotConflict = !dia2[rowIndex - i];

            if(columnNotConflict && dia1NotConflict && dia2NotConflict) {
                let cur = prev.concat(i);
                // 保存状态
                record(rowIndex, i, true);
                // 递归
                putQueen(rowIndex + 1, cur);
                // 回溯的时候清除状态，重新下一轮递归
                record(rowIndex, i, false);
            }
        }
    };

    putQueen(0, []);

    return result;
}

function generateMatrix(arr) {
    let n = arr.length;
    let result = [];
    for(let i = 0; i < n; i++) {
        let cur = '';
        for(let j = 0; j < n; j++) {
            if(j === arr[i]) {
                cur += 'Q';
            }else {
                cur += '.';
            }
        }
        result.push(cur);
    }
    return result;
}

let result = solvedQueens(5);

console.log(result);