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

LinkedList.prototype.unique = function() {
  var node = this.head
  var dupMemo = {}
  var next
  while (node) {
    console.log('value', node.value)
    dupMemo[node.value] = true
    next = node.nextNode
    console.log('-----------')
    console.log('next', node.nextNode)
    if (!next) {
      node.nextNode = null
    } else {
     console.log(dupMemo)
    
      if (dupMemo[next.value]) {
        node.nextNode = next.nextNode ? next.nextNode.nextNode : null
      }
    }
   
    
    // Add value to memo
    
    node = next
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

sll.unique()
sll.forEach(function(node) { console.log(node.value) })
console.log(sll.palindrome())