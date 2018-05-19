// function findMaxAverage(nums, k) {
//   var curr = 0;
//   var max = 0;
//   for (var i = 0; i < nums.length; i++) {
//     curr += nums[i]
    
//     if (i >= k) {
    
//      * Subtract number at the front because we want to caluculate next portion of array.
//      *         (i)     (k)
//      * [1, 12, -5, -6, 50, 3]
//      * <--- range --->
//      *
//      *                 (i)
//      * (i-k=0)         (k)
//      * [1, 12, -5, -6, 50, 3]
//      *     <--- range --->
//      *
     

//       curr -= nums[i - k]
//     }

//     // If the length of subarray is greater than K
//     if (i >= k - 1) {
//       max = Math.max(curr, max)
//     }
//   }

//   // Get average
//   return max / k;
// };

function findMaxAverage(nums, k) {
	// Iteration
	// - If index is greater than k, subtract the number at index - k
	// - If k index is greater than equal the length of k, get max
    var curr = 0;
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
       curr += nums[i];
       
       if (i >= k) {
         curr -= nums[i-k];
       } 

       if (i >= k - 1) {
         max = Math.max(curr, max);
       }
    }

    return max / 4;
}


var r = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log(r);






