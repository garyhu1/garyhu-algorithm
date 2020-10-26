/**
 * 二叉树层级遍历 - 二叉树的右视图
 */
/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
示例:
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
来源: LeetCode第199题
 */
function rightView(root) {
    if(!root) {
        return null;
    }
    let quene = [];
    let result = [];

    quene.push(root);
    while(quene.length) {
        result.push(quene[0].value);
        let size = quene.length;
        while(size > 0) {
            let front = quene.shift();
            if(front.right) quene.push(front.right);
            if(front.left) quene.push(front.left);
            size--;
        }
    }
    return result;
}