/**
 * 链表反转 - 指定区间反转
 */
/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明: 1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
 */
function LinkNode() {
    this.value = null;
    this.next = null;
}
function reverseBwteen(head, m, n) {
    let tempNode = new LinkNode();
    let p = tempNode;
    let cur, prev, start, tail;
    p.next = head;
    for(let i = 0; i < m - 1; i++) {
        p = p.next;
    }

    // 记录区间前一个节点
    let front = p;
    // 记录区间首节点
    start = tail = p.next;

    cur = p.next;
    // 进行区间反转
    for(let i = 0; i < (n - m); i++) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    // 拼接链表
    front.next = prev;
    start.next = cur.next; // cur.next是区间后一个节点
    return tempNode.next;

}

// 递归方法
function reverseBwteen2(head, m, n) {}