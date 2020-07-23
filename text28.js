/**
 * @description 动态规划  或  栈的方式求解
 * 
 * 最长有效括号长度
 * 
 * 示例： 
 * ()(())
 * 输出
 * 6
 * 
 * 示例2：
 * 
 * ())(())
 * 
 * 输出
 * 4
 */
// 栈求解
function maxLenghtByStack(str) {
    let arr = str.split('');
    // console.log(arr);
    let stack = [];

    let maxLength = 0;
    let curLen = 0;

    for(let i = 0; i < arr.length; i++) {
        let s = arr[i];
        if(s === '(') {
            stack.push(s);
        }else {
            let prevS = stack.pop();
            // console.log(prevS);
            if(prevS) {
                curLen = curLen + 2;
                if(i === arr.length - 1) {
                    maxLength = Math.max(maxLength, curLen);
                }
            }else {
                maxLength = Math.max(maxLength, curLen);
                curLen = 0;
            }
        }
    }

    return maxLength;
}

// 动态规划求解
// 找到状态转移方程：为右括号时：  dp[i] = 2 + dp[i - 1] + dp[i - dp[i - 1] - 1]; 为左括号时： dp[i] = 0;
function maxLengthByDymic(str) {
    let arr = str.split('');

    if(arr.length === 1) {
        return 0;
    }
    let maxLen = 0;
    let prev = 0;
    let prevPrev = 0;
    let dp = [];
    for(let i = 0; i < arr.length; i++) {
        let s = arr[i];
        if(s === '(') {
            dp[i] = 0;
            continue;
        }
        if(i === 0) {
            prev = 0;
            prevPrev = 0;
            dp[0] = 0;
        }else {
            if(i - 1 < 0) {
                prev = 0;
            }else {
                prev = i - 1;
            }
            if(i - dp[prev] - 1 < 0) {
                prevPrev = 0;
            }else {
                prevPrev = i - dp[prev] - 1;
            }

            dp[i] = 2 + dp[prev] + dp[prevPrev];
            maxLen = Math.max(maxLen, dp[i]);
        }
    }

    return maxLen;
}


// let result = maxLengthByDymic('())(())');  // 4
let result = maxLenghtByStack('()(())');  // 6

// let result = maxLenghtByStack('()(())'); // 6
// let result = maxLenghtByStack('())(())'); // 4

console.log(result);