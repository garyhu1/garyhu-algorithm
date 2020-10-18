/**
 * @description 链表反转
 */
// 定一个链表对象
class LinkNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkNodeList {
    constructor(list = []) {
        this.node = null;
        this.next = null;
        if(list && Array.isArray(list)) {
            this.generateNode(list);
        }
    }

    insert(element) {
        if(!this.root) {
            this.root = new LinkNode(element);
        }
        let curNode = this.root;
        while(curNode) {
            if(curNode.next) {
                curNode = curNode.next;
            }else {
                curNode.next = new LinkNode(element);
                break;
            }
        }
    }

    generateNode(list) {
        if(!list.length) {
            return;
        }
        list.forEach(ele => {
            this.insert(ele);
        });
    }
}

function reverseLink(linkNode) {
    if(!linkNode) {
        return null;
    }
    let prevNode = null;
    let curNode = linkNode;
    while(curNode) {
        let next = curNode.next;
        curNode.next = prev;
        prevNode = curNode;
        curNode = next;
    }
    return prevNode;
}

// 通过递归方法反转链表
function reverseList(linkNode) {
    const reverse = (prev, cur) => {
        if(!cur) {
            return prev;
        }
        let next = cur.next;
        cur.next = prev;
        reverse(cur, next);
    }

    return reverse(null, linkNode);
}

export default {
    LinkNode,
    LinkNodeList
}