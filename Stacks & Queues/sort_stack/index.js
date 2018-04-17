
function Stack(){
  this.stack = [];
};


/** 
 * @param {number} x
 * @return {void}
 */
Stack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
Stack.prototype.pop = function() {
    var element = this.stack.pop();
    return element;
};

Stack.prototype.length = function() {
    return this.stack.length;
};

/**
 * @return {number}
 */
Stack.prototype.top = function() {
  return this.stack[this.length() - 1];
};

/**
 * @return {boolean}
 */
Stack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};


function SortStack() {
    this.stackMain = new Stack();
    this.stackTemp = new Stack();
};

SortStack.prototype = Object.create(Stack.prototype);


SortStack.prototype.push = function(x) {
    this.stackMain.push(x);
};

/**
 * @return {void}
 */
SortStack.prototype.pop = function() {
    var element = this.stackMain.pop();
    return element;
};

/**
 * @return {number}
 */
SortStack.prototype.top = function() {
  return this.stackMain[this.stackMain.length - 1];
};

/**
 * @return {boolean}
 */
SortStack.prototype.isEmpty = function() {
    return this.stackMain.length() === 0;
};


/**
 * @return {number}
 */
SortStack.prototype.sort = function() {  
  while (!this.isEmpty()) {
    var temp = this.stackMain.pop();

    while (!this.stackTemp.isEmpty() && this.stackTemp.top() > temp) {

      this.stackMain.push(this.stackTemp.pop()); 
    }
    
    this.stackTemp.push(temp)
  };
  
  while (!this.stackTemp.isEmpty()) {
    var temp = this.stackTemp.pop();
    this.stackMain.push(temp);
  } 
  
};



var stack = new SortStack();
stack.push(10);
stack.push(3);
stack.push(12);
stack.push(2);
stack.push(2);
stack.push(10);
console.log(stack)

stack.sort();

console.log(stack.stackMain.stack);