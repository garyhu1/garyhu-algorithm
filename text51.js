/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

示例 1：

输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]
示例 2：

输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。
示例 3：

输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]
 */
/**
 * @description 动态规划 - 单词拆分 II
 */
function dymanic(s, dict) {
    const uniq = (arr) => {
        return Array.from(new Set(arr));
    }

    let uniqChars = uniq(s.split(''));
    let uniqDict = uniq(dict.join(''));

    if(uniqChars.length > uniqDict.length) {
        return [];
    }

    let len = s.length;
    if(!len) {
        return [];
    }

    let wordDict = new Set(dict);
    let dp = [];
    dp[0] = [''];

    for(let i = 1; i <= len; i++) {
        let res = [];
        for(let j = i; j >= 0; j--) {
            let str = s.slice(j,i);
            if(wordDict.has(str)) {
                if(dp[j] && dp[j].length) {
                    for(let prev of dp[j]) {
                        res.push(prev ? prev + ' ' + str : str);
                    }
                }
            }
        }
        dp[i] = res;
    }

    return dp[len];
}

let result = dymanic("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]);

console.log(result);