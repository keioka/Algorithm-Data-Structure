/*
  @property queue: array

  @method push
  @method pop
  @method size

*/

function Queue() {
  this.queue = []
}

Queue.prototype.enqueue = function(value) {
  this.queue.push(value);
}

Queue.prototype.dequeue = function() {
  return this.queue.shift();
}

Queue.prototype.size = function() {
  return this.queue.length;
}

/*
  Test
*/
function assertToBeTrue(message, a, b, verbose) {
  if (verbose) {
  	console.log(a);
  	console.log(b);
  }

  if (a === b) {
  	console.log('Passed: ' + message);
  } else {
  	console.log('Failed: ' + message);
  }
}


assertToBeTrue('get initial size', (function(){
  var menu = new Queue();
  return menu.size()
}()), 0);


assertToBeTrue('push data', (function() { 
  var menu = new Queue();
  menu.enqueue("onion");
  return menu.size();
}()), 1);


assertToBeTrue('pop data', (function() { 
  var menu = new Queue();
  menu.enqueue("tomato");
  menu.enqueue("onion");
  return menu.dequeue();
}()), "tomato");


// https://github.com/kuychaco/algoClass
