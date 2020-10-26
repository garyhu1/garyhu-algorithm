/**
 * 二叉树层级遍历 - 普通的层次遍历
 */
/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
示例:
  3
  / \
9  20
  /  \
  15   7
结果应输出:
[
  [3],
  [9,20],
  [15,7]
]
来源: LeetCode第102题
 */
function levelOrder(root) {
    if(!root) return [];
    let quene = [root];
    let result = [];
    let level = 0;

    while(queue.length) {
        result.push([]);
        let size = quene.length;
        while(size > 0) {
            size--;
            // 出列
            let curNode = quene.shift();
            result[level].push(curNode.value);

            // 入列
            if(curNode.left !== null) queue.push(curNode.left);
            if(curNode.right !== null) quene.push(curNode.right);
        }
        level++;
    }

    return result;
}