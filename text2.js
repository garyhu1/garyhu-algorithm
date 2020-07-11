/**
 * 有一个书架，可以容纳10本书，一次可以放两本或放一本书，问有多少种方法?
 * 
 * 最优子结构： F(10) = F(9) + F(8)
 * 
 * 边界： F(1) = 1; F(2) = 2
 * 
 * 状态转移方程式： F(n) = F(n-1) + F(n-2)
 * 
 * 推导：
 * 1： 1
 * 2： 2
 * 3： 3
 * 4： 5
 * 5： 8
 * ...
 * 10: F(9) + F(8)
 * 总结： 下一个结果是前面两个的和，与其他没有关系
 */
function getSum(n) {
    let a = 1, b = 2;
    let temp = 0;
    for(i= 2; i < n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}

let sum = getSum(4)

console.log(sum);
 