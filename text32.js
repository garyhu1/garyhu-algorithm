/**
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。
提示:

你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 
前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现Trie（前缀树）。
 */
/**
 * @description 递归与回溯 - 单词搜索
 * 
 * 采用前缀树 Trie
 */
function combine(words, board) {
  let rowLen = board.length;
  if(!rowLen) {
	return [];
  }
  let columnLen = board[0].length;

  // 定义方向
  let directions = [
	[0, 1],  // 向右
	[0, -1], // 向左
	[1, 0],  // 向下
	[-1, 0]  // 向上
  ];

  //生成Trie
  let nodeTrie = new Trie();
  for(let word of words) {
	  nodeTrie.insert(word);
  }

  // 定义已个访问过的数组和结果数组
  let visited = [];
  let result = [];
  for(let y = 0; y < rowLen; y++) {
	  visited[y] = [];
  }

  // 验证当前空格是否有效，即可以访问
  const isValid = (y, x) => {
	  return y >= 0 && y < rowLen && x >= 0 && x < columnLen && !visited[y][x];
  }

  const helper = (y, x, node) => {
	  let char = board[y][x];
	  let children = node.children;
	  let curNode = children.get(char);
	  if(curNode) {
		  if(curNode.word) {
			  result.push(curNode.word);
			  curNode.word = null;
		  }
		  visited[y][x] = true;
		  for(let dir of directions) {
			  let [diffY, diffX] = dir;
			  let nextX = x + diffX;
			  let nextY = y + diffY;
			  if(isValid(nextY, nextX)) {
				  helper(nextY, nextX, curNode);
			  }
		  }
		  visited[y][x] = false;  
	  }
  };

  for(let y = 0; y < rowLen; y++) {
	  for(let x = 0; x < columnLen; x++) {
		  helper(y, x, nodeTrie.root);
	  }
  }

  return result;
  
}

// 定义一个前缀树，帮助解题
class TrieNode {
  constructor() {
	this.children = new Map();
	this.word = null;
	this.isEnd = false;
  }
}

class Trie {
  constructor() {
	this.root = new TrieNode();
  }

  insert(word) {
	let node = this.root;

	for(let i = 0; i < word.length; i++) {
	  let char = word[i];

	  let { children } = node;
	  let trieNode = children.get(char);
	  if(!trieNode) {
		trieNode = new TrieNode();
		children.set(char, trieNode);
	  }

	  node = trieNode;

	  if(i === word.length - 1) {
		node.isEnd = true;
		node.word = word;
	  }
	}
  }
}

let result = combine(["oath","pea","eat","rain"], [
	['o','a','a','n'],
	['e','t','a','e'],
	['i','h','k','r'],
	['i','f','l','v']
  ]);

console.log(result);