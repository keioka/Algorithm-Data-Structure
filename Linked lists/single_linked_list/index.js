// add O(1)
// delete O(1)
// Search O(n)

function LinkedList() {
  this.head = null
  this.length = 0
}

function Node(value) {
  this.value = value
  this.nextNode = null
}

LinkedList.prototype.add = function(value) {
  var node = value instanceof Node ? value : new Node(value);
  
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

LinkedList.prototype.delete = function(position) {
  var index = 0
  
  var node = this.head
  while (node) {
    if (index + 1 === position) {
      node.nextNode = node.nextNode.nextNode
      return
    }
    
    node = node.nextNode
    index++
  }
}

LinkedList.prototype.display = function() {
  var result = []
  this.forEach((value) => result.push(value))
  return result
}


LinkedList.prototype.search = function(position) {
  if (position > this.length) {
    throw 'Should be less than length'
    return
  }
  
  var index = 0
  var result 
  this.forEach((value) => {
    if (position === index) {
      result = value
    }
    index++
  })
  
  return result
}

module.exports = {
  LinkedList: LinkedList,
  Node: Node,
}