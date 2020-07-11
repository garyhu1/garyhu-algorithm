/**
 * 有一个m*n的网格，从一端走到另一端的方法个数，无障碍物的情况
 * 
 * 状态转移方程式： F(m,n) = F(m-1,n) + F(m,n-1)
 * 边界：F(2,2) = F(1,2) + F(2,1); F(1,2) = 1; F(2,1) = 1;
 * 
 * 推导： 草稿纸上画表格进行推导
 */
function getTotalStep(m, n) {
    let result = [[0]];
    // 求边界值
    for(let i = 1; i < m; i++) {
        result.push([1]);
    }
    for(let i = 1; i < n; i++) {
        let arr = result[0];
        arr.push(1);
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            let res = result[i - 1][j] + result[i][j - 1];
            let arr = result[i];
            arr.push(res);
        }
    }

    return result[m - 1][n - 1];
}

/**
 * 考虑有障碍物的情况： 网格中有障碍物，1表示障碍物
 */
function getTotalStepWith(m, n, grid) {
    let result = [[1]];
    // 求边界值
    for(let i = 1; i < m; i++) {
        let pre = result[i - 1][0];
        if(pre === 0) {
            result.push([0]);
        } else {
            let value = grid[i][0];
            if(value === 1) {
                result.push([0]);
            }else {
                result.push([1]);
            }
        }
    }
    for(let i = 1; i < n; i++) {
        let arr = result[0];
        let pre = arr[0];
        if(pre === 0) {
            arr.push(0);
        }else {
            let value = grid[0][i - 1];
            if(value === 1) {
                arr.push(0);
            }else {
                arr.push(1);
            }
        }
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            let value = grid[i][j];
            let arr = result[i];
            let res = result[i - 1][j] + result[i][j - 1];
            if(value === 1) {
                res = 0;
            }
            arr.push(res);
        }
    }

    return result[m - 1][n - 1];
}