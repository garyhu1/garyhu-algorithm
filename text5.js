// 链表数据

class LinkNode {
	constructor(data) {
		this.root = null;

		if(data) {
			this._create(data);
		}
	}

	_newLink(data, next) {
		let _obj = {};
		_obj.value = data;
		_obj.next = null;
		return _obj;
	}

	_create(data) {
		if(Array.isArray(data)) {
			data.forEach(item => {
				this.insert(item);
			});
		}else {
			this.root = this._newLink(data, null);
		}
	}

	insert(data) {
		if(this.root === null) {
			this.root = this._newLink(data, null);
		}else {
			let current = this.root;
			while(true) {
				if(current.next) {
					current = current.next;
				}else {
					current.next = this._newLink(data, null);
					break;
				}
			}
		}
	}

	// 遍历
	order() {
		if(this.root === null) {
			return [];
		}

		let result = [];
		let current = this.root;
		while(true) {
			if(current) {
				result.push(current.value);
				current = current.next;
			}else {
				break;
			}
		}
		return result;
	}

	show() {
		console.log(JSON.stringify(this.root));
	}

	// 链表反转
	reserveLink() {
		if(this.root === null) {
			return null;
		}

		let temp = null;
		let current = this.root;
		let next = null;

		while(true) {
			next = current.next;
			current.next = temp;
			temp = current;
			current = next;
			if(current === null) {
				this.root = temp;
				break;
			}
		}
	}
}

let linkNode = new LinkNode([4, 12, 5, 8]);

// linkNode.show();
linkNode.reserveLink();
linkNode.show();
// console.log(res);