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
    console.log(previousNode)

    // currentNode === B
    currentNode = nextNode
  }
  this.head = previousNode
}


var linkedList = new LinkedList()

linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
linkedList.add("D");

linkedList.reverse()
linkedList.forEach(function(value) { console.log(value) })