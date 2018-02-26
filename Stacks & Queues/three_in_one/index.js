/*
  Three in One: Describe how you could use a single array to implement three stacks
  
  - https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/
  - https://stackoverflow.com/questions/4770627/how-to-implement-3-stacks-with-one-array

  Fixed division

  Split one array into three parts.
  Stack1: [0, n/3]
  Stack2: [n/3 , 2n/3]
  Stakc3: [2n/3, n]
*/

/*

@property numberOfStack: Integer
@property stackCapacity: Integer
@property values: Array<Integer>
@property sizes: Object<Integer>

@method push
@method pop
@method isEmpty

*/
 
function Stack() {
  this.values = [];
  this.sizes = {
  	stack1: 0,
  	stack2: 0,
  	stack3: 0,
  }
}

/*

@params stackNum: Integer

*/

Stack.prototype.push = function(stackNum, value) {

}

Stack.prototype.pop = function(stackNum) {
  
}

Stack.prototype.isEmpty = function(stackNum) {

}

Stack.prototype.isFull = function(stackNum) {
  
}
