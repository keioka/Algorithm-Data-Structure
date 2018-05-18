var LinkedList = require('../single_linked_list').LinkedList;
var Node = require('../single_linked_list').Node;

function LinkedListLoop() {
    LinkedList.call(this);
}

LinkedListLoop.prototype = Object.create(LinkedList.prototype);

var list = new LinkedListLoop();
list.add(new Node(1));
list.add(new Node(2));
list.add(new Node(3));

var nodeLoopBack = new Node(4);
list.add(nodeLoopBack);
list.add(new Node(5));
list.add(new Node(6));

var nodeLoopFrom = new Node(7);
nodeLoopFrom.nextNode = nodeLoopBack;
list.add(nodeLoopFrom);


function loopDetection(head, cb) {
    var node = head;
    var slow = node.nextNode;
    var fast = node.nextNode.nextNode;
    var steps = 0;
    while (slow.nextNode && fast.nextNode && fast.nextNode.nextNode) {

        if (slow === fast) {
            break;
        }
        slow = slow.nextNode;
        fast = fast.nextNode.nextNode;
        steps++;
    }

    fast = head

    while (fast.nextNode && slow.nextNode) {
        if (fast === slow) {
            break
        }

        fast = fast.nextNode;
        slow = slow.nextNode;
    }

    cb(slow);
}

loopDetection(list.head, function(value) {
    console.log(value)
});