var LinkedList = require('../single_linked_list').LinkedList;
var Node = require('../single_linked_list').Node;

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