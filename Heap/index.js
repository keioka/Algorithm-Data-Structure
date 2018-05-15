function Heap(array) {
  this.array = array;
}

Heap.prototype.leftIndex = function(i) {
  var indexLeftNode = 2 * i + 1;
  return indexLeftNode < this.array.length ? indexLeftNode : null;
} 

Heap.prototype.rightIndex = function(i) {
  var indexRightNode = 2 * i + 2;
  return indexRightNode < this.array.length ? indexRightNode : null;
} 

Heap.prototype.parentIndex = function(i) {
  if (i === 0) return null;
  
  var indexParentNode = Math.floor((i - 1) / 2);
  return indexParentNode < this.array.length ? indexParentNode : 0;
}

Heap.prototype.isEmpty = function() {
  return this.array.length === 0;
}

Heap.prototype.swap = function(index1, index2) {
  var temp = this.array[index1];
  this.array[index1] = this.array[index2]; 
  this.array[index2] = temp;
}

Heap.prototype.getElementIndexAt = function(index) {
  return this.array[index];
}

Heap.prototype.getHeap = function(index) {
  return this.array;
}

Heap.prototype.heapifySiftUp = function() {
  for (var i = this.array.length / 2; i >= 0; i--) {
    this.heapify(i);
  }
}

Heap.prototype.buildHeap = function() {
  for (var i = this.array.length / 2; i >= 0; i--) {
    this.siftDown(i);
  }
}

Heap.prototype.insert = function(value) {
  this.array.push(value);
  this.siftUp();
}


/*
 * MinHeap
 *
 */

function MinHeap(array) {
  Heap.call(this, array);
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.siftUp = function() {
  var i = this.array.length - 1;
  while (i !== 0 && this.array[i] < this.array[this.parentIndex(i)]) {
    this.swap(i, this.parentIndex(i));
    i = this.parentIndex(i);
  }
}

/*
 * siftDown
 *
 * Time: O(n)
 *
 */

MinHeap.prototype.siftDown = function(i) {
  // Get left and right child node
  var left = this.leftIndex(i);
  var right = this.rightIndex(i);
  
  
  if (!left && !right) {
    return;
  }
  
  var selfNode = this.array[i];
  var leftNode = this.array[left];
  var rightNode = this.array[right];
  
  // pick largest number among 
  
  var smallestIndex;
  if (!rightNode || rightNode > leftNode) {
      smallestIndex = left;
  } 
  
  if (!leftNode || leftNode > rightNode) {
      smallestIndex = right;
  }
  
  if (this.array[smallestIndex] > this.array[i]) {
      smallestIndex = i;
  }
  // compare larger child and selfNode
  
  // If child is larger than self node, swap it, call heapify recursively with larger node index.
  if (smallestIndex !== i) {
      this.swap(smallestIndex, i);
      this.siftDown(smallestIndex);
  }
}

/*
 * MaxHeap
 *
 */

function MaxHeap(array) {
  Heap.call(this, array);
}

MaxHeap.prototype = Object.create(Heap.prototype);

MaxHeap.prototype.siftUp = function() {
  var i = this.array.length - 1;
  while (i !== 0 && this.array[i] > this.array[this.parentIndex(i)]) {
    this.swap(i, this.parentIndex(i));
    i = this.parentIndex(i);
  }
}

MaxHeap.prototype.siftDown = function(i) {
  // Get left and right child node
  var left = this.leftIndex(i);
  var right = this.rightIndex(i);
  
  var selfNode = this.array[i];
  
  if (!left && !right) {
    return;
  }
  
  var leftNode = this.array[left];
  var rightNode = this.array[right];
  
  // pick largest number among 
  
  var largestIndex;
  if (!rightNode || rightNode < leftNode) {
      largestIndex = left;
  } 
  
  if (!leftNode || leftNode < rightNode) {
      largestIndex = right;
  }
  
  if (this.array[largestIndex] < selfNode) {
    largestIndex = i;
  }

  // compare larger child and selfNode
  
  // If child is larger than self node, swap it, call heapify recursively with larger node index.
  if (largestIndex !== i) {
    this.swap(largestIndex, i)
    this.siftDown(largestIndex)
  }
}

Heap.prototype.removeTop = function() {
  var max = this.array[0];
  this.array[0] = this.array[this.array.length - 1];
  this.array.splice(this.array.length - 1, 1);
  this.siftDown(0);
  return max;
}


var maxHeap = new MaxHeap([1, 2, 3, 4, 5, 6, 7, 8]);
var minHeap = new MinHeap([8, 5, 7, 4, 1, 6, 3, 2]);

console.log(maxHeap.leftIndex(1) === 3)
console.log(maxHeap.leftIndex(10) === null)

console.log(maxHeap.rightIndex(1) === 4)
console.log(maxHeap.rightIndex(10) === null)

console.log(maxHeap.parentIndex(2) === 0)
console.log(maxHeap.parentIndex(20) === null)

console.log("====== MaxHeap ======")
console.log(" ")

console.log(maxHeap.getHeap());
// console.log("- buildHeap");
// maxHeap.buildHeap();

console.log("- siftUp");
// maxHeap.insert(20);

maxHeap.buildHeap();

console.log(maxHeap.getHeap());
console.log(maxHeap.removeTop());
console.log(maxHeap.getHeap());

console.log(" ")
console.log("====== MinHeap ======")

console.log(minHeap.getHeap());
console.log("- siftupHeapify");
minHeap.buildHeap();

console.log(minHeap.getHeap());
console.log(minHeap.removeTop());
console.log(minHeap.getHeap());

console.log(" ")