/**
 * 二叉树层级遍历 - 二叉树的锯齿形层次遍历
 */
/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
例如：
给定二叉树 [3,9,20,null,null,15,7], 输出应如下:
    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：
[
  [3],
  [20,9],
  [15,7]
]
来源: LeetCode第103题
 */
function antiOrder(root) {
    if(!root) return [];

    let result = [];
    let quene = [root];
    let level = 0;
    let isRight = false;

    while(quene.length) {
        result.push([]);
        let size = quene.length;
        isRight = !isRight;
        while(size) {
            size--;
            let curNode = quene.shift();
            result[level].push(curNode.value);
            // 入列
            if(curNode.left) quene.push(curNode.left);
            if(curNode.right) quene.push(curNode.right);
        }

        if(level % 2) result[level].reverse(); 
        level++;
    }
    return result;
}