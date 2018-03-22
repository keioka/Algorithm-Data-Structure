function Stack() {
  this.storage = [];
};

// O(1)
Stack.prototype.push = function(value) {
  this.storage.push(value)
};

// O(1)
Stack.prototype.pop = function() {
  return this.storage.pop();
};

// O(1)
Stack.prototype.size = function() {
  return this.storage.length;
};

Stack.prototype.isFull = function() {
  return this.storage.length >= 10;
};

Stack.prototype.isEmpty = function() {
  return this.storage.length === 0;
};


// var stack = new Stack()

// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(1)

// console.log(stack.min())



function SetOfStacks() {
  this.stacks = []
}

SetOfStacks.prototype.getLastStack = function() {
  return this.stacks[this.stacks.length - 1]  
}

SetOfStacks.prototype.isFull = function() {
  return currentStack.size() >= 10
}

SetOfStacks.prototype.push = function(value) {
  
  if (this.stacks.length === 0) {
    var s = new Stack()
    s.push(value)
    this.stacks.push(s)
    return 
  }
  
  var currentStack = this.getLastStack()
  
  
  if (currentStack.isFull()) {
    var s = new Stack()
    s.push(value)
    this.stacks.push(s)
  } else {
    currentStack.push(value)
  }
}

SetOfStacks.prototype.pop = function() {
  var currentStack = this.getLastStack()
  
  if (!currentStack.isEmpty()) {
    var element = currentStack.pop()
    return element
  } else {
    this.stacks.pop()
    currentStack = this.getLastStack()
    return currentStack.pop()
  }

}

var setOfStack = new SetOfStacks()
for (var i = 0; i < 50; i++) {
  setOfStack.push(i)
}

for (var j = 0; j < 30; j++) {
  setOfStack.pop()
}


for (var k = 20; k < 24; k++) {
  setOfStack.push(k)
}


console.log(setOfStack.stacks)