function maxSubarray(array) {
    var currentMax = -Number.MAX_VALUE;
    var max = 0;
    for (var i = 0; i < array.length; i++) {
      
      // Compare 0 and currentMax + array[i]
      // IF it is less than 0, it is going to be 0 (Reset)
      //    it is more than 0, it will be currentMax + next element
      currentMax = Math.max(0, currentMax + array[i]);
      
      
      // Compare max or currentMax value, pick up one.
      max = Math.max(max, currentMax);
      
    }
  
    // Return max at the end of loop
    return max;
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))


