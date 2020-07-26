/**
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

示例 1:

输入:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出: 3
解释: 
长度最长的公共子数组是 [3, 2, 1]。
说明:

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
 */
/**
 * @description 动态规划 - 最长重复子数组
 */
function dymanic(A, B) {
    let dp = [];
    let lenA = A.length;
    let lenB = B.length;

    // 初始化边界
    for(let y = 0; y < lenA; y++) {
        dp[y] = [];
        dp[y][0] = A[y] === B[0] ? 1 : 0;
    }

    for(let x = 0; x < lenB; x++) {
        dp[0][x] = A[0] === B[x] ? 1 : 0;
    }

    let max = 0;

    for(let y = 1; y < lenA; y++) {
        for(let x = 1; x < lenB; x++) {
            if(A[y] === B[x]) {
                dp[y][x] = dp[y - 1][x - 1] + 1;
                max = Math.max(max, dp[y][x]);
            }else {
                dp[y][x] = 0;
            }
        }
    }

    return max;
}

/**
 * @description 组合
 * @param {*} A 
 * @param {*} B 
 */
function combine(A, B) {
    let lenA = A.length;
    let lenB = B.length;

    let dp = [];
    let visited = [];
    for(let y = 0; y < lenA; y++) {
        visited[y] = [];
        for(let x = 0; x < lenB; x++) {
            if(A[y] === B[x]) {
                dp.push([y, x]);
            }
        }
    }

    const isValid = (y, x) => {
        return !visited[y][x];
    }

    let result = 0;
    for(let [y, x] of dp) {
        if(!isValid(y, x)) {
            continue;
        }
        let curVal = 0;
        while(y < lenA && x < lenB) {
            if(A[y] === B[x]) {
                visited[y][x] = true;
                curVal++;
                y++;
                x++;
            }else {
                break;
            }
        }
        result = Math.max(result, curVal);
    }

    return result;
}

let result = dymanic([1,2,3,2,1], [3,2,1,4,7]);

console.log(result);