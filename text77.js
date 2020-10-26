/**
 * 链表合并 - 合并 K 个有序链表
 */
/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

来源: LeetCode第23题
 */

/**
 * 这里先定义一个合并两个链表
 */
function mergeTwoLink(l1, l2) {
    const merge = (l1, l2) => {
        if(l1 === null) return l2;
        if(l2 === null) return l1;

        if(l1.value >= l2.value) {
            l2.next = merge(l1, l2.next);
            return l2;
        }else {
            l1.next = merge(l1.next, l2);
            return l1;
        }
    }

    return merge(l1, l2);
}

function mergeKLinks(list) {
    const mergeK = (list, start, end) => {
        if(end - start < 0) return null;
        if(end - start === 0) return list[end];

        let mid = Math.floor((start + end) / 2);
        return mergeTwoLink(mergeK(list, start, mid), mergeK(list, mid + 1, end));
    }

    return mergeK(list, 0, list.length - 1);
}