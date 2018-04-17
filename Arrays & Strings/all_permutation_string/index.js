function permutation(string) {
    
    // Basecase
    if (string.length < 2) {
      // console.log('Return ', string)
      // console.log(string)
      return string; 
    }

    var permutations = []; // This array will hold our permutations

  
  
    for (var i = 0; i < string.length; i++) {
      
      
        var char = string[i];

        // Cause we don't want any duplicates:
        // if char is not matched, skip it this time
        // Because it generates duplicated string 
      
        // console.log('------------------')
        // console.log('char', char, 'index', string.indexOf(char))
      
        if (string.indexOf(char) != i) { 
          continue;           
        }
      
      
      
      
        // console.log('string =>', string)
        // console.log('string.slice(0,i) =>', string.slice(0,i))
        // console.log('string.slice(i+1,string.length) =>', string.slice(i+1,string.length))

      
        // Cut off current char and put it remainingString
        // Suppose string is ABC, remainingString will be 'BC' when index is 0
        // When index is 1, remainingString will be 'AC'
      
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 
      
      
      
      
        // console.log('remainingString =>', remainingString)

      
      
        // Call permut function recrucively and pass remainingString
        // If remainingString.legnth === 1, return string
        // 
      
        var tempResult = permutation(remainingString)
        // console.log('tempResult', tempResult)
      
        for (var subPermutation of tempResult) {
          
            // console.log('subPermutation', subPermutation)
          
          
            var result = char + subPermutation
          
            
            // console.log('result =>', result)
            
          
            permutations.push(result)
          
        }

      
      
    }
  
  
  
  
  
    return permutations;
  
  
}
