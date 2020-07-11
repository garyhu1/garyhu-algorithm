// 队列数据

class Quene {

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
		return this.root.shift();
	}
}