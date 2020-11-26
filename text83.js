/**
 * 滑动窗口 - 最长不重复子串
 */

/**
 * 寻找出无重复字符的最长子串
 */
function maxSubStrFn(s) {
    let result = 0;

    let map = {};
    let left = 0;
    let right = 0;

    while(right < s.length) {
        let char = s[right];
        // 根据题意我们需要寻找不重复的最长子串
        // 当 char 出现时我们需要移动左指针到重复字符的下一位
        if(map[char]) {
            left = Math.max(left, map[char] + 1);
        }

        result = Math.max(result, right - left);

        map[char] = right;
        // 移动右指针
        right++;
        // map[char] = right;
    }

    return result;
}

let s = 'agratsdnkiuufsdsd';
// let s = 'abacdefgg';
let result = maxSubStrFn(s);
console.log(result);