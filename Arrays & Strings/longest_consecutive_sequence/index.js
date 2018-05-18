function longestConsecutive(array) {
  // Declare variable to keep max length
  //.var max = 0;
  //
  // Use object (hashtable) to keep track the number
  //   { numberOfElement: countOfRange }
  //   { 1: 1 }
  //
  // Let's call the object keeps track "memo";
  // 
  // var memo = {}
  //
  // Iterate array
  //   If the number exists in memo, skip
  //   If not, check next and previous number of the current number, add
  //     For example array[i] is 2, check 1 and 3.
  //     
  //     - Add numbers => 1 + memo[array[i] - 1] + memo[array[i] + 1]
  //     - Assign sum value to memo[i]
  //     - Compare biggest number Math.max(memo[i], max)

  var max = 0;
  var memo = {};

  for (var i = 0; i < array.length; i++) {
  	var number = array[i];
  	if (!memo[number]){
  		var leftRange = memo[number - 1] || 0;
  		var rightRange = memo[number + 1] || 0;
        var sum = 1 + leftRange + rightRange;

        memo[number] = sum
  		
  		max = Math.max(sum, max);
  		
        memo[number-leftRange]= sum
        memo[number+rightRange]= sum
  	}
  }

  return max;
}

console.log(longestConsecutive([10, 4, 20, 1, 3, 2]))
// console.log(longestConsecutive([1,2,0,1, 20]))

// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
