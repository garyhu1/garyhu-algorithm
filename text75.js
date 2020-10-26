/**
 * 环形链表 - 验证是否为环形链表
 * 
 * 用Set验证是否有重复，重复就表示为环形
 * 
 * 第二种方法使用快慢指针，快指针和慢指针相遇时表示为环形
 */
// 用Set方法
function vaildCircleLink(head) {
    if(head === null) {
        return false;
    }
    let set = new Set();
    let p = head;
    while(p) {
        if(set.has(p)) {
            return true;
        }
        set.add(p);
        p = p.next;
    }

    return false;
}

// 使用快慢指针
function LinkNode() {
    this.value = null;
    this.next = null;
}
function vaildByDbPointer(head) {
    if(head === null) {
        return !!head;
    }
    let tempNode = new LinkNode();
    tempNode.next = head;
    let fast = tempNode;
    let slow = tempNode;
    if(fast.next === null || fast.next.next === null) {
        return false;
    }
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
}