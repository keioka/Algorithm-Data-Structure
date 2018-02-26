/*
  CicularQueue

  @property 
  @method enqueue
  @method dequeue

  @example
  Node { value: 1, next: Node { value: 2, next: Node { value: 3 } } }, 2, 3, 4, 5]
*/

var CicularQueue = function(length) {
  this.maxLength = length
  this.length = 0
  this.head = null
  this.tail = null
}

CicularQueue.prototype.enqueue = function(value) {
  var newNode = new Node(value)
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else if (!this.head.next) {
  	this.head.next = newNode
  	this.tail = newNode
  } else {
  	this.tail.next = newNode
  	this.tail = newNode
  }
  this.length++
}

CicularQueue.prototype.dequeue = function() {
}

CicularQueue.prototype.print = function() {
  var nextNode = this.head
  while(nextNode) {
  	console.log(nextNode.value)
  	console.log("Lenght is ", this.length)
    nextNode = nextNode.next    
  }
}

var Node = function(value) {
  this.value = value
  this.next = null
}

var queue = new CicularQueue(10)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()