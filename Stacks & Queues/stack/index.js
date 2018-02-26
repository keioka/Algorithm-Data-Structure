/*
  @property storage

  @method push(value)
  @method pop()
  @method size()
*/

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

function StackString() {
  this.storage = "";
}

StackString.prototype.push = function(value) {
  this.storage = this.storage.concat("***", value)
};

StackString.prototype.pop = function() {
  var value = this.storage.slice(this.storage.lastIndexOf("***") + 3);
  return value;
};

StackString.prototype.size = function() {
  if (this.storage === "") {
    return 0;
  } else {
  	var arr = this.storage.split("***");
  	return arr.splice(1, arr.length).length;
  }
};

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
  var menu = new Stack();
  return menu.size()
}()), 0);


assertToBeTrue('push data', (function() { 
  var menu = new Stack();
  menu.push("onion");
  return menu.size();
}()), 1);


assertToBeTrue('pop data', (function() { 
  var menu = new Stack();
  menu.push("tomato");
  menu.push("onion");
  return menu.pop();
}()), "onion");


assertToBeTrue('get initial size', (function(){
  var menu = new StackString();
  return menu.size()
}()), 0);


assertToBeTrue('push data', (function() { 
  var menu = new StackString();
  menu.push("onion");
  return menu.size();
}()), 1);


assertToBeTrue('pop data', (function() { 
  var menu = new StackString();
  menu.push("tomato");
  menu.push("onion");
  return menu.pop();
}()), "onion", true);

















