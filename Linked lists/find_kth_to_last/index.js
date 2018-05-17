var LinkedList = require('../single_linked_list').LinkedList;

var list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(10);

function findKthToLast(node, k, cb) {

    // IF it ends to last Linked List, THEN return 0 as first index
    if (node === null) {
        return 0;
    }

    // Increment index by 1, first function going to return 0
    var index = findKthToLast(node.nextNode, k, cb) + 1;

    // IF k === index, TTHEN run callback

    if (index === k) {
        cb(node);
    }

    // IF not just pass it, and return incremented index.

    return index;
}


findKthToLast(list.head, 8, function(node) {
    console.log(node.value); // 3
})