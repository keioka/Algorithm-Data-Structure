var LinkedList = require('../single_linked_list').LinkedList;

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

var sll = new LinkedList();
sll.add("a");
sll.add("b");
sll.add("c");
sll.add("c");
sll.add("b");
sll.add("a");
sll.add("c");
sll.add("c");
sll.add("b");
sll.add("a");
sll.add("c");
sll.add("c");
sll.add("b");
sll.add("d");
sll.add("a");

console.log("============")
sll.forEach(function(value) { console.log(value) });
console.log("============")

// sll.unique()
sll.uniqueNoBuffer();

console.log("============")

sll.forEach(function(value) { console.log(value) });
console.log("============")
