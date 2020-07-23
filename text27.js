/**
 * @description 四数之和 
 * 给一个数组和一个target，求数组中四个数之和等于target的所有解，不得有重复组合
 * 
 * 利用双指针求 或者 递归回溯求解
 */
function fourSum(nums, target) {
    let result = [];

    nums.sort();

    let addArr = [];

    for(let i = 0; i < nums.length; i++) {
        if((nums.length - i -1) < 3) {
            break;
        }
        if(addArr.indexOf(nums[i]) !== -1) {
            continue;
        }
        let prev = [nums[i]];
        let start = nums[i];
        addArr.push(start);
        for(let j = i + 1; j < nums.length; j++) {
            let cur = nums[j];
            let left = j + 1;
            let right = nums.length - 1;
            while(left < right) {
                let sum = start + cur + nums[left] + nums[right];
                if(sum > target) {
                    right--;
                }else if(sum < target) {
                    left++;
                }else {
                    let curArr = prev.concat([cur, nums[left], nums[right]]);
                    result.push(curArr);
                    break;
                }
            }
        }
    }

    return result;
}

let result = fourSum([1,0,-1,0,2,-2], 0);

console.log(result);