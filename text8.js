/**
 * @description 排列出所有可能
 * @param  {类数组} chunks 属性数组
 */
function combine(...chunks) {
	let result = [];
	const helper = (index, prev) => {
		let isLast = index === chunks.length -1;
		let chunk = chunks[index];
		for(let val of chunk) {
			let cur = prev.concat(val);
			if(isLast) {
				result.push(cur);
			}else {
				helper(index + 1, cur);
			}
		}
	};

	helper(0, []);

	return result;
}

let brands = ['Iphone XS', 'Iphone11'];

let colors = ['黑色', '白色', '灰色'];

let storages = ['64G', '128G'];

let result = combine(brands, colors, storages);

console.log(result);