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


var sll_1 = new LinkedList() 
var sll_2 = new LinkedList() 
var interSection = new Node(7)

sll_1.add(new Node(-6))
sll_1.add(new Node(-5))
sll_1.add(new Node(-4))
sll_1.add(new Node(-3))
sll_1.add(new Node(-2))
sll_1.add(new Node(-1))
sll_1.add(new Node(1))
sll_1.add(new Node(2))
sll_1.add(new Node(3))
sll_1.add(new Node(4))
sll_1.add(new Node(5))
sll_1.add(new Node(6))
sll_1.add(interSection)
sll_1.add(new Node(8))
sll_1.add(new Node(9))
sll_1.add(new Node(10))

sll_2.add(new Node(1))
sll_2.add(new Node(2))
sll_2.add(new Node(3))
sll_2.add(new Node(4))
sll_2.add(new Node(5))
sll_2.add(new Node(6))
sll_2.add(interSection)



sll_1.forEach(function(node) {
  console.log(node.value)
})


console.log('----------------')


sll_2.forEach(function(node) {
  console.log(node.value)
})

// 1. Run though each linked list and check the length

// 2. Compare the tails. If they are different, return immediately because there is no intersection.

// 3. Set 2 pointers to start

// 4. Advance the pointer on the longer Linked List by the difference in lengths

// 5. traverse and if it is same

function checkLength(head) {
  var length =  0
  var node = head
  while (node) {
    length++
    node = node.nextNode
  }
  return length
}

console.log("---- length SLL 1-----", checkLength(sll_1.head))
console.log("---- length SLL 2-----", checkLength(sll_2.head))

function getLastElement(head) {
  if (!head.nextNode) {
    return head
  } 
  
  return getLastElement(head.nextNode)
}

function compareTail(sll_1, sll_2) {
  var tailSLL_1 = getLastElement(sll_1)
  var tailSLL_2 = getLastElement(sll_2)

  return tailSLL_1 === tailSLL_2
}

function intersectionLinkedList (sll_1, sll_2) {

  // IF the last element is differnt, RETURN false
  // O(n)
  var headSLL_1 = sll_1.head
  var headSLL_2 = sll_2.head
  
  
  // 2. Compare the tails. If they are different, return immediately because there is no intersection.
  if (!compareTail(headSLL_1, headSLL_2)) {
    return false
  }
  
  
  // 1. Run though each linked list and check the length
  
  var lengthSLL_1 = checkLength(headSLL_1)
  var lengthSLL_2 = checkLength(headSLL_2)
  
  // O(n)
  
  var indexSLL_1 = 0
  var indexSLL_2 = 0  
  
  
  // 3. Set 2 pointers to start
  
  var currentNodeSLL_1 = headSLL_1
  var currentNodeSLL_2 = headSLL_2
  
  
  // 4. Advance pointer on longer linked list
  if (lengthSLL_1 > lengthSLL_2) {
    indexSLL_1 = lengthSLL_1 - lengthSLL_2
    
    var indexIncrement = 0
    while (indexSLL_1 !== indexIncrement) {
      currentNodeSLL_1 = currentNodeSLL_1.nextNode   
      indexIncrement++
    }
  
  } else if (lengthSLL_1 < lengthSLL_2) {
    indexSLL_2 = lengthSLL_2 - lengthSLL_1
    
    var indexIncrement = 0
    while (indexSLL_2 !== indexIncrement) {
      currentNodeSLL_2 = currentNodeSLL_2.nextNode
      indexIncrement++
    }
  }
  
  // 5. Traverse
  
  while (currentNodeSLL_1.nextNode && currentNodeSLL_2.nextNode) {
    
    if (currentNodeSLL_1 === currentNodeSLL_2) {
      return currentNodeSLL_1
    }
    
    currentNodeSLL_1 = currentNodeSLL_1.nextNode
    currentNodeSLL_2 = currentNodeSLL_2.nextNode
    
   
  }
  
  return false
}

console.log(intersectionLinkedList(sll_1, sll_2))