// 栈数据

class Stack {

	constructor(data) {
		this.root = [];
		if(data) {
			this._create(data);
		}
	}

	_create(data) {
		if(Array.isArray(data)) {
			this.root = data;
		}else {
			this.root.push(data);
		}
	}

	push(data) {
		this.root.push(data);
	}

	pop() {
		return this.root.pop();
	}

	search(key) {
		if(key > this.root.length - 1) {
			throw new Error('Error: Array is indexOutOfBound');
		}
		return this.root[key];
	}
}