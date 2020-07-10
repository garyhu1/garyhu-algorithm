/**
 * @description  滑动窗口问题
 * 
 * @field 无重复字符的最长子串，给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 * 
 * 示例  1:
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 复制代码示例 2:
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 复制代码示例 3:
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
function getMaxSubStr(str) {
    let result = 0;
    let map = new Map();
    let arr = str.split('');
    let base = 0;
    while(base < arr.length) {
        map.clear();
        map.set(arr[base], 1);
        let curLength = 1;
        for(let i = base + 1; i < arr.length; i++) {
            if(map.has(arr[i])) {
                result = Math.max(result, curLength);
                break;
            }
            map.set(arr[i], 1);
            curLength++;
        }
        base++;
        if((arr.length - base + 1) <= result) {
            return result;
        }
    }

    return result;
}

let result = getMaxSubStr('bbbb');

console.log(result);