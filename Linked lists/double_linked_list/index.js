function DoubleLinkedList() {
  this.head = null
  this.tail = null
}

// O(1)
DoubleLinkedList.prototype.add = function(value) {
  var node = new Node(value)
  if (!this.head) {
  	this.head = this.tail = node
  } else {
  	this.tail.next = node
  	node.prev = this.tail
  	this.tail = node
  }
}

DoubleLinkedList.prototype.deleteByValue = function(value) {
  var node = this.head
  while (node) {
  	if (node.next && value === node.next.value) {

  	  if (node.next.next) {
  	  	node.next = node.next.next
        node.next.next.prev = node
  	  } else {
  	  	node.next = null
  	  }
   
  	}

  	node = node.next
  }
}

// O(n)
DoubleLinkedList.prototype.traverse = function(cb) {
  var node = this.head
  while (node) {
  	cb(node.value)
  	node = node.next
  }
}

// O(n)
DoubleLinkedList.prototype.findIndex = function(value) {
  var index = 0
  var node = this.head
  while (node) {
  	if (node.value === value) {
  	  return index
  	}
  	node = node.next
  	index++
  }
}


function Node(value) {
  this.value = value
  this.prev = null
  this.next = null
}

var list = new DoubleLinkedList()
list.add('a')
list.add('b')
list.add('c')
console.log("find Index of C: ", list.findIndex('c'))
list.traverse(function(value) { console.log(value) })
console.log('------ Delete C --------')
list.deleteByValue('c')
list.traverse(function(value) { console.log(value) })