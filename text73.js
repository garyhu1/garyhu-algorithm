/**
 * 链表反转 - 两个一组反转链表
 */
/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

来源: LeetCode 第 24 题

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

function LinkNode() {
    this.value = null;
    this.next = null;
}

function reverseLink(head) {
    if(head === null || head.next === null) {
        return head;
    }

    let node1, node2;
    let tempNode = new LinkNode();
    let p = tempNode;
    tempNode.next = head;
    
    while((node1 = p.next) && (node2 = p.next.next)) {
        node1.next = node2.next;
        node2.next = node1;
        p.next = node2;
        p = node1;

    }

    return tempNode;
}

// 递归形式
function reverseLink2(head) {
    if(head == null || head.next == null) {
        return head;
    }

    let node1 = head; 
    let node2 = head.next;
    node1.next = reverseLink2(node2.next);
    node2.next = node1;
    
    return node2;
}