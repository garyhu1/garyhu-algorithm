// 二叉树, number类型
class BinaryTree {

	// 二叉树构造函数，大值的在右边，小值在左边
	constructor(data) {
		this.root = null;
		if(data) {
			this._createTree(data);
		}
	}

	// 构建二叉树节点对象
	_newTree(value, left, right) {
		let _obj = {};
		_obj.value = value;
		_obj.left = left;
		_obj.right = right;
		return _obj;
	}

	// 创建二叉树
	_createTree(data) {
		if(typeof data === 'number') {
			this.root = this._newTree(data, null, null);
		}else if(Array.isArray(data)) {
			data.forEach(item => {
				this.insert(item);
			});
		}
		
	}

	// 向二叉树中查入职
	insert(value) {
		if(this.root === null) {
			this.root = this._newTree(value, null, null);
		}else {
			let current = this.root;
			while(true) {
				if(current.value >= value) {
					if(current.left === null) {
						current.left = this._newTree(value, null, null);
						break;
					}else {
						current = current.left;
					}
				}else {
					if(current.right === null) {
						current.right = this._newTree(value, null, null);
						break;
					}else {
						current = current.right;
					}
				}
			}
		}
	}

	// 删除节点，（三种情况，当前删除的节点无左右字节点，父节点的指向null,有一个子节点，有两个字节点)
	remove(node) {
		if(this.root === null) {
			return null;
		}

		const findMinNode = (node, key) => {
			let node = node || this.root;
			if(node) {
				while(node && node.left !== null) {
					node = node.left;
				}
				return node;
			}
			return null;
		}

		const removeBykey = (key, node) => {
			if(node === null) {
				return null;
			}
			if(key < node.value) {
				removeBykey(key, node.left);
			}else if(key > node.value) {
				removeBykey(key, node.right);
			}else {
				if(node.left === null && node.right === null) {
					node = null;
					return node;
				}else if(node.left === null) {
					node = node.right;
					return node;
				}else if(node.right === null) {
					node = node.left;
					return node;
				}else {
					let aux = findMinNode(node.right);
					node.value = aux;
					node.right = removeBykey(aux.value, node.right);
					return node;
				}
			}
		}

		removeBykey(key, this.root);
	}

	// 查找结点
	search(key) {
		if(this.root === null) {
			return null;
		}
		let result = null;

		const searchByKey = (key, node) => {
			let d = null;
			if(!node) {
				return null;
			}
			if(key < node.value) {
				d = searchByKey(key, node.left)
			}else if(key > node.value) {
				d = searchByKey(key, node.right)
			}else {
				d = node;
			}
			return d;
		}

		result = searchByKey(key, this.root);

		return result;
	} 

	// 查找最大值
	max() {
		if(this.root === null) {
			return null;
		}
		let result = null;
		let current = this.root;
		while(true) {
			if(current.right === null) {
				result = current.value;
				break;
			}else {
				current = current.right;
			}
		}

		return result;
	}

	// 查找最小值
	min() {
		if(this.root === null) {
			return null;
		}
		let result = null;
		let current = this.root;
		while(true) {
			if(current.left === null) {
				result = current.value;
				break;
			}else {
				current = current.left;
			}
		}

		return result;
	}

	// 前序遍历(递归)
	preOrder() {
		if(this.root === null) {
			return [];
		}
		let result = [];
		const order = (node) => {
			if(node) {
				result.push(node.value);
				order(node.left);
				order(node.right);
			}
		}
		order(this.root);
		return result;
	}

	// 前序遍历(非递归)
	preOrderByStack() {
		if(this.root === null) {
			return [];
		}
		let result = [];
		let stack = [this.root];
		while(stack.length > 0) {
			let node = stack.pop();
			result.push(node.value);
			if(node.right) stack.push(node.right);
			if(node.left) stack.push(node.left);
		}

		return result;
	}

	// 中序遍历(递归)
	middleOrder() {
		if(this.root === null) {
			return [];
		}
		let result = [];
		const order = (node) => {
			if(node) {
				order(node.left);
				result.push(node.value);
				order(node.right);
			}
		}

		order(this.root);
 
		return result;
	}

	// 中序遍历(非递归)
	middleOrderByStack() {
		if(this.root === null) {
			return [];
		}
		let result = [];
		let stack = [];
		let node = this.root;
		while(stack.length > 0 || node) {
			if(node) {
				stack.push(node);
				node = node.left;
			}else {
				node = stack.pop();
				result.push(node.value);
				node = node.right;
			}
		}

		return result;
	}

	// 后序遍历(递归)
	lastOrder() {
		if(this.root === null) {
			return [];
		}
		let result = [];
		const order = (node) => {
			if(node) {
				order(node.left);
				order(node.right);
				result.push(node.value);
			}
		}

		order(this.root);

		return result;
	}

	// 后序遍历(非递归)
	lastOrderByStack() {
		if(this.root === null) {
			return [];
		}
		let result = [];

		let stack = [this.root];
		let tmp = null;
		let node = this.root;
		while(stack.length > 0) {
			tmp = stack[stack.length - 1];
			if(tmp.left && tmp.left !== node && tmp.right !== node) {
				stack.push(tmp.left);
				node = tmp.left;
			}else if(tmp.right && tmp.right !== node) {
				stack.push(tmp.right);
				node = tmp.right;
			}else {
				result.push(stack.pop().value);
				node = tmp;
			}
		}

		return result;
	}

	// 广度遍历
	normalOrder() {
		if(this.root === null) {
			return [];
		}
		let result = [];

		return result;
	}

	print() {
		console.log(JSON.stringify(this.root));
	}
}

let binaryTree = new BinaryTree([8,3,6,12,15,5,31]);

let maxValue = binaryTree.search(12);
console.log(maxValue);