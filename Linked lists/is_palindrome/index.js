var LinkedList = require('../single_linked_list').LinkedList;
var Node = require('../single_linked_list').Node;

var list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(4);
list.add(3);
list.add(2);
list.add(1);

function reverseLinkedList(node) {
  var head = null;
  var newNode;

  while (node) {

    // create new Node
    newNode = new Node(node.value);
    
    // add prev node to nextNode
    newNode.nextNode = head;
    
    // add new Node to new head

    head = newNode;

    // Iterate to new
    node = node.nextNode;
  }
  return head;
}

var isPalindrome = function(head) {
    var node = head;
    var nodeReverseList = reverseLinkedList(head);

    while (nodeReverseList && node) {
        if (node.value !== nodeReverseList.value) {
            return false;
        }
        node = node.nextNode;
        nodeReverseList = nodeReverseList.nextNode;
    }

    // If both of them are null, it means both of them end the loop at the same time.
    if (!node && !nodeReverseList) {
        return true;
    }

    // If either one is remained, it does not finish loop at the same time, which means not palindrome.
    return false;
};

console.log(isPalindrome(list.head));