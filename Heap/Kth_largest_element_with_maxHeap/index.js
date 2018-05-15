/*
 * LeetCode
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 *  - Example 1:
 *
 *  Input: [3,2,1,5,6,4] and k = 2
 *  Output: 5
 * 
 *  - Example 2:
 *
 *  Input: [3,2,3,1,2,4,5,5,6] and k = 4
 *  Output: 4
 *  Note: You may assume k is always valid, 1 ≤ k ≤ array's length.
 *  
 *  https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


function MaxHeap(array) {
  this._array = array;
}

MaxHeap.prototype.siftUp = function siftUp(i) {
  while (i !== 0 && this._array[i] > this._array[this.getParentNodeIndex(i)]) {
      this.swap(i, getParentNodeIndex(i));
      i = getParentNodeIndex(i);
  }
}

MaxHeap.prototype.siftDown = function siftDown(i) {
    var leftIndex = this.getLeftNodeIndex(i);
    var rightIndex = this.getRightNodeIndex(i);
    
    var rightNode = this._array[rightIndex];
    var leftNode = this._array[leftIndex];
    var currentNode = this._array[i];
    
    var largestIndex;
        
    if (!leftIndex && !rightIndex) {
        return;
    }
    
    if (!rightNode || rightNode <= leftNode) {
        largestIndex = leftIndex;
    } else if (!leftNode || leftNode < rightNode) {
        largestIndex = rightIndex;
    }
    
    if (this._array[largestIndex] <= this._array[i]) {
        largestIndex = i
    }
    
    if (largestIndex !== i) {
        this.swap(largestIndex, i);
        this.siftDown(largestIndex);
    }
}

MaxHeap.prototype.swap = function swap(index1, index2) {
    var temp = this._array[index1];
    this._array[index1] = this._array[index2];
    this._array[index2] = temp;
}

MaxHeap.prototype.getLeftNodeIndex = function getLeftNodeIndex(index)  {
    var leftIndex = 2 * index + 1;
    return leftIndex < this._array.length ? leftIndex : null;
}

MaxHeap.prototype.getRightNodeIndex = function getRightNodeIndex(index) {
    var rightIndex = 2 * index + 2;
    return rightIndex < this._array.length ? rightIndex : null;
}

MaxHeap.prototype.getParentNodeIndex = function getRightNodeIndex(index) {
    var parentIndex = Math.round(index / 2) - 1;
    return parentIndex < 0 ? 0 : parentIndex ;
}

MaxHeap.prototype.buildHeap = function buildHeap() {
    for (var i = Math.floor(this._array.length / 2); i >= 0; i--) {
        this.siftDown(i);
    }
}

MaxHeap.prototype.remove = function remove() {
   var top = this._array[0];
   this._array[0] = this._array[this._array.length - 1];
   this._array.splice(this._array.length - 1, 1);
   this.siftDown(0);
   return top;
}

var findKthLargest = function(nums, k) {
    var heap = new MaxHeap(nums);
    heap.buildHeap();
    for (var i = 0; i < k - 1; i++) {
       heap.remove();
    }
    
    return heap.remove();
};


var result = findKthLargest([3,2,1,5,6,4], 2);
console.log(result === 5);