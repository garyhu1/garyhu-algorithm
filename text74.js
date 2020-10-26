/**
 * 链表反转 - K个一组翻转链表
 */
/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
示例 :
给定这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5
复制代码说明 :

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

来源: LeetCode 第 25 题
 */

function reverseLink(head, k) {
    let p = head;
    // 下面的循环用来检查后面的元素是否能组成一组
    for(let i = 0; i < k; i++) {
        if(p === null) {
            return head;
        }
        p = p.next;
    }
    let prev = null;
    let cur = head;
    // 进行反转
    for(let i = 0; i < k; i++) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // prev 为当前最后一个节点，cur为下个区间的开始节点
    head.next = reverseLink(cur, k);

    return prev;
}