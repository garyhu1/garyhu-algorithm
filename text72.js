/**
 * 栈 - 有效括号
 */
/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
示例:
输入: "()"
输出: true

来源: LeetCode第20题
 */
function vaild(s) {
    if(s.length < 2) {
        return false;
    }
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if(char === '[' || char === '(' || char === '{') {
            stack.push(char);
        }
        if(!stack.length) {
            // 栈为空时直接失败
            return false;
        }
        if(char === ')' && !stack.pop() === '(') return false;
        if(char === ']' && !stack.pop() === '[') return false;
        if(char === '}' && !stack.pop() === '{') return false;
        return true;
    }
}