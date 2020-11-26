/**
 * 滑动窗口 - 最小覆盖子串
 */
/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"
 */
function minSubStr(s, t) {
    let right = 0;
    let left = 0;
    let map = {};
    // 求解需要用到的变量
    let length = Infinity;

    // 遇到 t 中存在的字符时更新 match，注意 t 中存在的字符可能在 s 中出现多次
    // 因此并不是每次都需要更新 match
    let match = 0
    // 记录最短子串开始位置，不能用 left
    let start = 0
    // 把字符串 t 中的字符通过 hash 存储起来
    for(let i = 0; i < t.length; i++) {
        let char = t[i];
        if(char in map) {
            map[char] += 1;
        }else {
            map[char] = 1;
        }
    }

    while(right < s.length) {
        let char = s[right];
        if(char in map) {
            map[char] -= 1;
            if(map[char] >= 0) {
                match += 1;
            }
        }

        // 缩小窗口条件
        while(match === t.length) {
            // 寻找到更佳解，保存数据
            if (length > right - left + 1) {
                length = right - left + 1
                start = left
            }
            // 移动左指针并且更新数据
            const char = s[left++]
            if (char in map) {
                if (map[char] === 0) {
                    match -= 1
                }
                map[char] += 1
            }
        }

        // 移动右指针
        right++;
    }
    return length === Infinity ? '' : s.substring(start, start + length);
}

let s = 'ADOBECODEBANC';
let t = 'ABC';
let result = minSubStr(s, t);
console.log(result);