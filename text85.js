/**
 * 滑动窗口 - 找到字符串中所有字母异位词
 */
/**
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。
示例 1:

输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 示例 2:

输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 */
function findDiffWord(s, p) {
    let result = [];
    let left = 0;
    let right = 0;

    // 首先把p字符串的每个字符出现的次数统计下
    let map = {};
    for(let i = 0; i < p.length; i++) {
        let char = p[i];
        if(char in map) {
            map[char] = map[char] + 1;
        }else {
            map[char] = 1;
        }
    }

    while(right < s.length) {
        let char = s[right];
        if(map[char] > 0) {
            map[char] = map[char] - 1;
            right++;
        }else if(map[s[left]] >= 0) {
            map[s[left]] = map[s[left]] + 1;
            left++;
        }else {
            // left = right += 1;
            left++;
            right++;
        }

        if(right - left === p.length) {
            result.push(left);
        }
    }

    return result;
}

let s = 'cbaebabacd';
let p = 'abc';
let result = findDiffWord(s, p);
console.log(result);