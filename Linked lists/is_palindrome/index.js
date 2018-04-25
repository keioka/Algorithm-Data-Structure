function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var isPalindrome = function(head) {
    var node = head;
    var stack = [];
    while (node) {
        stack.push(node);
        node = node.next;
    }
    
    var node = head;
    
    while (stack.length > 0) {
        var reverseNode = stack.pop();
        if (node.val !== reverseNode.val) {
            return false
        }
        node = node.next;
    }
    
    return true;
};