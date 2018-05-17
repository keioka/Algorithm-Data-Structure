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

// O(n)
LinkedList.prototype.unique = function() {
  var node = this.head
  var dupMemo = {}
  var next
  while (node) {
    dupMemo[node.value] = true
    next = node.nextNode
    if (next) {
      var runner = next;
      while (runner && dupMemo[runner.value]) {
        runner = runner.nextNode;
      }
      node.nextNode = runner;
    }
    // Add value to memo
    node = node.nextNode;
  }
}

LinkedList.prototype.uniqueNoBuffer = function() {
  var node = this.head
  while (node) {
    var runner = node;
    while (runner && runner.nextNode) {
      if (node.value === runner.nextNode.value) {
        runner.nextNode = runner.nextNode.nextNode;
        // runner stays same position if next node is changed.
      } else {
        runner = runner.nextNode;
      }
    }
    node = node.nextNode;
  }
}

LinkedList.prototype.palindrome = function() {
  var node = this.head
  var head = node
  return _palindrome(node, head)
}

function _palindrome(node, head) {
  if (!node.nextNode) {
    return node.value === head.value
  }
  
  const prevResult = _palindrome(node.nextNode, head)
  
  if (prevResult) {
    return node.value === head.value
  } else {
    return false
  }
    
}

var sll = new LinkedList()
sll.add(new Node("a"))
sll.add(new Node("b"))
sll.add(new Node("c"))
sll.add(new Node("c"))
sll.add(new Node("b"))
sll.add(new Node("a"))
sll.add(new Node("c"))
sll.add(new Node("c"))
sll.add(new Node("b"))
sll.add(new Node("a"))
sll.add(new Node("c"))
sll.add(new Node("c"))
sll.add(new Node("b"))
sll.add(new Node("d"))
sll.add(new Node("a"))

console.log("============")
sll.forEach(function(node) { console.log(node.value) })
console.log("============")

// sll.unique()
sll.uniqueNoBuffer()

console.log("============")

sll.forEach(function(node) { console.log(node.value) })
console.log("============")
