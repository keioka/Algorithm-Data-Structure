function LinkedList() {
  this.head
  this.length = 0
}

function Node(value) {
  this.value = value
  this.nextNode = null
}

LinkedList.prototype.add = function(node) {
  if (!this.head) {
    this.head = node
    return node
  }
  
  var currentNode = this.head

  while (currentNode.nextNode) {
    currentNode = currentNode.nextNode
  }
  
  currentNode.nextNode = node
  this.length++
  
  return node
}

LinkedList.prototype.forEach = function(cb) {
  var node = this.head
  while(node) {
    cb(node)
    node = node.nextNode
  }
}

// ('A', 'B', 'C', 'D')
// ('D', 'C', 'B', 'A')


// 1:   *   [*]  [next]
//    ('A', 'B', 'C', 'D')


LinkedList.prototype.reverse = function(cb) {
  var previousNode = null 
  var currentNode = this.head // A
  var nextNode = null 

  while (currentNode) {
    
    // Keep the pointer to nextNode before it will be deleted
    nextNode = currentNode.nextNode 
    // nextNode === B
    
    // currentNode === A, previousNode === null
    // At first round, assign null to A's nextNode pointer because A will be tail.
    currentNode.nextNode = previousNode
    
    // previousNode === A
    previousNode = currentNode 
    
    // currentNode === B
    currentNode = nextNode
  }
  
  this.head = previousNode
}


var linkedList = new LinkedList()

linkedList.add(new Node("A"))
linkedList.add(new Node("B"))
linkedList.add(new Node("C"))
linkedList.add(new Node("D"))


linkedList.reverse()
linkedList.forEach(function(node) { console.log(node.value) })