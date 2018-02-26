/*:
   8.1 A child is running up a staircase with n steps and can hop either 1, 2, or 3 steps at a time. 
   Count the number of ways the child can run up the stairs.
 */

/*

  n = 3

  1, 2, 3
  1, 3
  2, 3
  3

  n = 4

  1, 2, 3, 4
  1, 2, 4
  1, 3, 4
  1, 4
  2, 4
  3, 4
  4

  n = 5

  1, 2, 3, 4, 5
  1, 2, 4
  1, 3, 4
  1, 2, 5
  1, 3, 5
  1, 4, 5
  2, 4, 5
  3, 4, 5
  4, 5
*/

/*

4 
3 3 3 3
2 2 2 2
1 1 1 1


*/

var numWays = function(N) {
  var answer = 0;
  var recurse = function(number) {
    if (number === 0) {
      answer++;
    } else if (number > 0) {
      console.log('------------')
      console.log(answer, number)
      console.log('------------')
      recurse(number - 1);
      recurse(number - 2);
      recurse(number - 3);
    }
  };
  recurse(N);
  return answer;
};

/* TEST */

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
console.log(numWays(4), 7);
console.log(numWays(5), 13);
console.log(numWays(6), 24);
// var arr = []
// function tripleStep(n) {
//    if (n < 1) {
//    	 return 1
//    }

//    console.log(n)

//    tripleStep(n - 1)
//    tripleStep(n - 2)
//    tripleStep(n - 3)
   
//    return arr
// }

// tripleStep(6)