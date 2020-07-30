/**
 * 给定一组单词 words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。

示例：

输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
输出： "dogwalker"
解释： "dogwalker"可由"dog"和"walker"组成。
提示：

0 <= len(words) <= 100
1 <= len(words[i]) <= 100
 */
/**
 * @description 动态规划 - 最长单词
 */
function dymanic(words) {

    // 先按长度降序，相同长度再按字典升序
    words.sort((a, b) => {
        let diff = b.length - a.length;
        if(diff !== 0) {
            return diff;
        }else {
            return a < b ? -1 : 1;
        }
    });
}

let result = dymanic(["cat","banana","dog","nana","walk","walker","dogwalker"]);

console.log(result);