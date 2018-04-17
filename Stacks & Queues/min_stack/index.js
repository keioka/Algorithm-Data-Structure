var MinStack = function() {
    this.stack = [];
    this.stackMin = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.stackMin.length === 0 || this.stackMin[this.stackMin.length - 1] > x) {
      this.stackMin.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var element = this.stack.pop();
    if (element === this.getMin()) {
      this.stackMin.pop()
    }
    return element;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stackMin[this.stackMin.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var stack = new MinStack();
stack.push(10);
stack.push(3);
stack.push(12);
stack.push(2);
stack.push(10);

console.log(stack.stack);
console.log(stack.stackMin);
console.log(stack.getMin());

stack.pop();
stack.pop();

console.log(stack.stack);
console.log(stack.stackMin);
console.log(stack.getMin());