/**
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

注意:

可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

示例 1:

输入: [ [1,2], [2,3], [3,4], [1,3] ]

输出: 1

解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:

输入: [ [1,2], [1,2], [1,2] ]

输出: 2

解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:

输入: [ [1,2], [2,3] ]

输出: 0

解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
 */
/**
 * @description 动态规划 - 无重叠区间
 */
function dymanic(matrix) {
    let len = matrix.length;

    if(!len) {
        return 0;
    }

    matrix.sort((a, b) => {
        return a[0] - b[0];
    });

    let dp = [];
    dp[0] = 1; // 表示最大无重叠区间的个数

    for(let i = 1; i < len; i++) {
        let [start1, end1] = matrix[i];
        let max = 1;
        for(let j = 0; j < i; j++) {
            let [start2, end2] = matrix[j];
            if(start1 >= end2) {
                max = Math.max(dp[j] + 1, max);
            }
        }

        dp[i] = max;
    }

    return len - Math.max(...dp);

}

let result = dymanic([ [1,2], [2,3], [3,4], [1,3] ]);

console.log(result);