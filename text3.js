/*
 * 
 * 题目： 把一个数拆分成两个或以上的正整数的和，求拆分的数乘积最大值?
 * 
 * 分析： 省略分析过程，最优拆分是3，拆成多个3，遇到1的时候就把其中一个3加1
 * 
 * 
 */

function getMaxValue(n) {
    if(n === 1) {
        return 1;
    }
    if(n === 2) {
        return 1;
    }
    if(n === 3) {
        return 2
    }
    if(n === 4) {
        return 4;
    }
    // 除以3取整
    let x = Math.floor(n / 3);
    // 除以3取余
    let y = n % 3;
    if(y === 0) {
        return Math.pow(3, x);
    }else if(y === 1) {
        return Math.pow(3, (x - 1)) * 4
    }else {
        return Math.pow(3, x) * 2;
    }
}

console.log(getMaxValue(10));