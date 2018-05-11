function maxRect (array) {
  var currentIndex = 0;
  var stack = []; // contains numbers represent index
  var maxRect = 0;
  
  while (currentIndex !== array.length) {
    var stackTopIndex = stack[stack.length - 1];
    var currentHeight = array[currentIndex];

    if (stack.length === 0 || array[stackTopIndex] < currentHeight) {
      stack.push(currentIndex);
      currentIndex++;
      continue;
    }

    while (array[stackTopIndex] > currentHeight) {
      var stackPopIndex = stack.pop();
      var height = array[stackPopIndex];
      var rightWidth = currentIndex - stackPopIndex;
      
      var leftWidth = 0
      
      if (stackPopIndex !== 0) {
        if (stack.length > 0) {
          var nextStackIndex = stack[stack.length - 1];
          leftWidth = stackPopIndex - (nextStackIndex + 1);
        } else {
          leftWidth = stackPopIndex
        }
      } 
      
      var width = rightWidth + leftWidth;
      var rect = width * height;

      stackTopIndex = stack[stack.length - 1];
      
      maxRect = Math.max(maxRect, rect);
    }
    
    stack.push(currentIndex);
    
    currentIndex++;
  }
  
  
  while (stack.length !== 0) {
      var stackPopIndex = stack.pop();
      var height = array[stackPopIndex];
      var rightWidth = currentIndex - stackPopIndex;
      var leftWidth = 0
      
      if (stackPopIndex !== 0) {
        if (stack.length > 0) {
          var nextStackIndex = stack[stack.length - 1];
          leftWidth = stackPopIndex - (nextStackIndex + 1);
        } else {
          leftWidth = stackPopIndex
        }
      } 
      
      var width = rightWidth + leftWidth;
      var rect = width * height;
    
      maxRect = Math.max(maxRect, rect);
  }
  
  return maxRect;
}

console.log(maxRect([4, 24, 30, 2, 5, 7, 1]));
console.log(maxRect([1, 2, 3, 4, 5, 6]));
console.log(maxRect([1, 2, 3, 5, 5, 6]));
console.log(maxRect([10, 7, 10]));