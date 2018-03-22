function QueueWithTwo() {
  this.stack = []
  this.tempStack = []
}


QueueWithTwo.prototype.enqueue = function(value) {
  this.stack.push(value)
}


// Time: O(2n), Space: O(1)
QueueWithTwo.prototype.dequeue = function() {
  var index = 0
  // Iterate array.length - 1 times 
  var stackLength = this.stack.length - 1
  for (var i = 0; i < stackLength; i++) {
  	this.tempStack.push(this.stack.pop())
  }

  var queuedElement = this.stack.pop()
  var tempStackLenght = this.tempStack.length
  for (var j = 0; j < tempStackLenght; j++) {
    this.stack.push(this.tempStack.pop())
  }

  return queuedElement
}

QueueWithTwo.prototype.print = function() {
  console.log(this.stack)
  console.log(this.tempStack)
}

var queue = new QueueWithTwo()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log("------- print -------")
queue.print()

console.log('queued item', queue.dequeue())

console.log("------- print -------")
queue.print()