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


function addDigitLinkedList (l1, l2, carryValue) {
  var result = new Node()
  var value = 0
  var newCarryValue
    
  if (l1 === null && l2 === null) {
    if (carryValue === 0) {
      return null
    } else {
      result.value = 1
      return result
    }
  }
  
  // IF node on LinkedList 1 exsists
  
  if (l1) {
    value += l1.value
  }

  // IF node on LinkedList 2 exsists

  if (l2) {
    value += l2.value
  }
  
  // IF carryValue exsists, add it to value
  if (carryValue) {
    value += carryValue
  }
  
  console.log('value', value)

  // Check if it is more than 10
  var newCarryValue = value > 10 ? 1 : 0
  
  console.log('newCarryValue', newCarryValue)

  // Get second digit and assign value property of node
  result.value = value %= 10
  
  if (l1 && l2) {
    var nextNode = addDigitLinkedList(l1.nextNode, l2.nextNode, newCarryValue)
    result.nextNode = nextNode
  }
  
  
  return result
  
}


var sll_1 = new LinkedList() 
var sll_2 = new LinkedList() 

// (2, 9, 3)
// (1, 2, 3)

// (3, 1, 7)
sll_1.add(new Node(2))
sll_1.add(new Node(9))
sll_1.add(new Node(3))

sll_2.add(new Node(1))
sll_2.add(new Node(2))
sll_2.add(new Node(3))

var linkedList = new LinkedList
linkedList.head = addDigitLinkedList(sll_1.head, sll_2.head, 0)
linkedList.forEach(function(node) { console.log(node.value) })



var sll_3 = new LinkedList() 
var sll_4 = new LinkedList() 

// (2, 9, 3)
// (1, 2, 3)

// (3, 1, 7)
sll_3.add(new Node(1))
sll_3.add(new Node(1))
sll_3.add(new Node(8))

sll_4.add(new Node(1))
sll_4.add(new Node(2))
sll_4.add(new Node(3))

var linkedList2 = new LinkedList
linkedList.head = addDigitLinkedList(sll_3.head, sll_4.head, 0)
linkedList.forEach(function(node) { console.log(node.value) })