/**
 * @description 堆数据 (小根堆)
 */
class Heap {
	constructor(initNums, maxSize) {
		this._maxSize = maxSize;
		this._heapSize = 0;
		this._heap = [];

		for(let i = 0; i < initNums.length; i++) {
			this.insert(initNums[i]);
		}
	}

	/**
	 * @description 插入数据（插入到堆底）
	 */
	insert(num) {
		if(this._heapSize >= this._maxSize) {
			return; 
		}
		this._heap[this._heapSize] = num;
		this._shiftUp(this._heapSize);
		this._heapSize++;
	}

	/**
	 * @description 堆数据向上浮动
	 * @param {Number} k 角标 
	 */
	_shiftUp(k) {
		while(this._parent(k) >= 0 && this._heap[this._parent(k)] > this._heap[k]) {
			this._swap(k, this._parent(k));
			k = this._parent(k)
		}
	}

	/**
	 * @description 根据当前角标获取父节点角标
	 */
	_parent(k) {
		return Math.floor((k - 1) / 2);
	}

	/**
	 * @description 获取当前节点的左节点角标
	 * @param {Number} k 当前角标
	 */
	_left(k) {
		return 2 * k + 1;
	}

	/**
	 * @description 获取当前角节点的右节点角标
	 * @param {Number} k 当前角标 
	 */
	_right(k) {
		return 2 * k + 2;
	}

	/**
	 * @description 删除数据（从堆顶开始删除， 然后堆顶和堆尾交换数据）
	 */
	delete() {
		if(this._heapSize < 0) {
			throw new Error('This heap is already empty!');
		}
		let value = this._heap[0]; // 当前从堆顶删除的元素

		this._heapSize--;
		this._swap(0, this._heapSize);
		this._shiftDown(0);

		return value;
	}

	/**
	 * @description 向下浮动
	 */
	_shiftDown(k) {
		while(this._left(k) < this._heapSize) {
			let j = this._left(k);
			if(this._right(k) < this._heapSize && this.heap[this._right(k)] < this._heap[j]) {
				j++;
			}
			if(this._heap[k] < this._heap[j]) {
				break;
			}
			this._swap(j, k);
			k = j;
		}
	}

	/**
	 * @description 根据角标交换堆数组数据
	 * @param {Number} i 堆数组角标，
	 * @param {Number} j  堆数组角标
	 */
	_swap(i, j) {
		let temp = this._heap[i];
		this._heap[i] = this._heap[j];
		this._heap[j] = temp;
	}

	/**
	 * @description 打印堆
	 */
	printHeap() {
		console.log(this._heap);
	}
}

let nums = [10,33,1,4,3,29,5,8];

let heap = new Heap(nums, 8);

heap.printHeap();

try {
	console.log('try');
	return ;
}finally {
	console.log('finally');
}