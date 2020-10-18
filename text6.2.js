/**
 * @description 堆排序
 */
class Sort{

    constructor() {
        this._heap = [];
        this._maxSize = 0;
        this._heapSize = 0;
    }

    heapSort(initNums, maxSize) {
        this._maxSize = maxSize;

        this._heap = this._buildHeap(initNums);

        console.log(this._heap);

        for(let i = this._heap.length - 1; i > 0; i--) {
            this._swap(this._heap, 0, i);
            this._shiftDown(this._heap, 0, i);
        }
    }

    _buildHeap(numsHeap) {
        let len = Math.floor((numsHeap.length - 1) / 2);
        for(let i = numsHeap.length - 1; i >= 0; i--) {
            this._shiftDown(numsHeap, i, numsHeap.length);
        }

        return numsHeap;
    }

    _shiftDown(numsHeap, k, heapSize) {
        while(this._left(k) < heapSize) {
            let j = this._left(k);
            if(this._right(k) < heapSize && numsHeap[this._right(k)] < numsHeap[j]) {
                j++;
            }

            if(numsHeap[k] < numsHeap[j]) {
                break;
            }

            this._swap(numsHeap, j, k);
            k = j;
        }
    }

    _swap(heap, j, i) {
        let temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }

    _left(k) {
        return 2 * k + 1;
    }

    _right(k) {
        return 2 * k + 2;
    }

    printHeap() {
        console.log(this._heap);
    }
}

let nums = [5,23,7,33,2,1,16,9];

let sort = new Sort();

sort.heapSort(nums, 8);

sort.printHeap();