var LinkedList = require('../single_linked_list');

function LinkedList() {
  this.head = null
  this.length = 0
}

function Node(value) {
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value)
  if (!this.head) {
    this.head = node
    return value
  }
  
  var currentNode = this.head

  while (currentNode.next) {
    currentNode = currentNode.next
  }
  
  currentNode.next = node
  this.length++
  return value
}

LinkedList.prototype.forEach = function(cb) {
  var node = this.head
  while(node) {
    cb(node.value)
    node = node.next
  }
}

LinkedList.prototype.display = function() {
  var result = []
  this.forEach((value) => result.push(value))
  return result
}

var list = new LinkedList();

list.add(13)
list.add(12)
list.add(11)
list.add(10)
list.add(9)
list.add(8)
list.add(7)
list.add(6)
list.add(5)
list.add(4)
list.add(3)
list.add(2)
list.add(1)

LinkedList.prototype.partition = function(value) {
  var node = this.head;
  var leftRoot;
  var rightRoot;
  
  var leftCur;
  var rightCur;

  while (node) {
  	if (node.value < value) {
  	  
  	  if (!leftRoot) {
  	  	leftRoot = new Node(node.value);
  	  	leftCur = leftRoot;
  	  } else {
  	  	leftCur.next = node;
        leftCur = leftCur.next;
  	  }
      
  	} else {

  	  if (!rightRoot) {
  	  	rightRoot = new Node(node.value);
  	  	rightCur = rightRoot;
  	  } else {
  	  	rightCur.next = node;
        rightCur = rightCur.next;
  	  }
  
  	}
  	node = node.next;
  }

  // Avoid circular linked list
  rightCur.next = null;

  // connect two linked list
  leftCur.next = rightRoot;

  // Switch a head to new head.
  this.head = leftRoot;
}

console.log(list.display());
console.log('partition x = 5');
list.partition(5)
console.log(list.display());