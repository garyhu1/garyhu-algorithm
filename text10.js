/**
 * @description 有效括号
 * 示例： '{([])}'有效； '{([))]'无效
 */
function vaildBrackets(str) {
	let bracketsMap = {
		'(': ')',
		'[': ']',
		'{': '}'
	}

	// 定义个栈
	const track = [];
	let flag = true;

	for(let key of str) {
		let val = bracketsMap[key];
		if(val) {
			track.push(key);
		}else {
			let curkey = track.pop();
			let curval = bracketsMap[curkey];
			if(curval !== key) {
				flag = false;
				break;
			} 
		}
	}

	if(track.length) {
		return false;
	}

	return flag;
}

let isVaild = vaildBrackets('{[(([]))]');

console.log(isVaild);