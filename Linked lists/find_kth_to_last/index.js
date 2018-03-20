function LinkedList() {
  this.head
  this.length = 0
}

function Node(value) {
  this.value = value
  this.nextNode = null
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value)
  if (!this.head) {
    this.head = node
    return value
  }
  
  var currentNode = this.head

  while (currentNode.nextNode) {
    currentNode = currentNode.nextNode
  }
  
  currentNode.nextNode = node
  this.length++
  return value
}

LinkedList.prototype.forEach = function(cb) {
  var node = this.head
  while(node) {
    cb(node.value)
    node = node.nextNode
  }
}


var sll = new LinkedList() 

sll.add(1)
sll.add(2)
sll.add(3)
sll.add(4)
sll.add(5)
sll.add(6)
sll.add(7)
sll.add(8)
sll.add(9)
sll.add(10)




function findKthToLast(node, k, cb) {
  
  // IF it ends to last Linked List, THEN return 0 as first index
  if (node === null) {
    return 0
  }
  
  // Increment index by 1, first function going to return 0
  var index = findKthToLast(node.nextNode, k, cb) + 1
  
  // IF k === index, TTHEN run callback
  
  if (index === k) {
    cb(node)
  }
  
  // IF not just pass it, and return incremented index.
  
  return index
}


findKthToLast(sll.head, 8, function(node) {
  console.log(node.value) // 3
})