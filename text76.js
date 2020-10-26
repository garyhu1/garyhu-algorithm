/**
 * 链表合并 - 合并两个有序链表
 */
/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例:

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源: LeetCode第21题
 */
function LinkNode() {
    this.value = null;
    this.next = null;
}
// 递归法
function mergeLiink(node1, node2) {
    const merge = (l1, l2) => {
        if(l1 === null) {
            return l2;
        }
        if(l2 === null) {
            return l1
        }
        if(l1.value >= l2.value) {
            l2.next = merge(l1, l2.next)
            return l2;
        }else {
            l1.next = merge(l1.next, l2);
            return l1;
        }
    }

    return merge(node1, node2);
}

// 循环法
function mergeLink2(l1, l2) {
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    let tempNode = new LinkNode();
    let p = tempNode;
    let p1 = l1;
    let p2 = l2;

    while(p1 && p2) {
        if(p1.value >= p2.value) {
            p.next = p2;
            p = p.next;
            p2 = p2.next;
        }else {
            p.next = p1;
            p = p.next;
            p1 = p1.next;
        }
    }

    if(p1) {
        p.next = p1;
    }else {
        p.next = p2;
    }
    return tempNode;
}