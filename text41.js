/**
 * 给定一个字符串S,找到S中最长的回文字符串。
 * 你可以假设S的最大长度为1000
 * 
 * 示例：
 * 
 * 输入： "babad"
 * 输出： "bab"
 * 注意： "aba"也是个有效答案
 */
function dynamic(s) {
    let arr = s.split('');
    let len = arr.length;
    let result = [0, 0];
    // 定义一个二维数组，记录当前位置是否为回文字符串
    let dp = [];
    // 初始化边界条件
    for(let y = 0; y < len; y++) {
        dp[y] = [];
        for(let x = 0; x < len; x++) {
            if(x === y) {
                dp[y][x] = true;
            }
        }
    }

    let i = 1;
    while(i < len) {
        let j = i + 1;
        while(j < len) {
            if(j - i < 3) {
                if(arr[j] === arr[i]) {
                    dp[i][j] = true;
                    let [m, n] = result;
                    if((n - m) < (j - i)) {
                        result = [i, j]
                    }
                }else {
                    dp[i][j] = false;
                }
            }else {
                if(arr[j] === arr[i] && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    let [m, n] = result;
                    if((n - m) < (j - i)) {
                        result = [i, j]
                    }
                }else {
                    dp[i][j] = false;
                }
            }
            j++;
        }
        i++;
    }

    let [m, n] = result;

    return s.substring(m, n + 1);
}

let result = dynamic("babad");

console.log(result);