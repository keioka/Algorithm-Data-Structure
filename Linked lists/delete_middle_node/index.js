var LinkedList = require('../single_linked_list').LinkedList;

var list = new LinkedList();

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.add(9)
list.add(10)
list.add(11)
list.add(12)
list.add(13)
console.log(list.display())

function deleteMiddle(list) {
  var head = list.head;
  var prev = head;
  var slow = head.nextNode;
  var fast = head.nextNode.nextNode;

  while(fast.nextNode && fast.nextNode.nextNode) {
  	prev = slow;
  	slow = slow.nextNode;
    fast = fast.nextNode.nextNode;
  }
  
  prev.nextNode = prev.nextNode.nextNode;
}

deleteMiddle(list);

console.log(list.display())
