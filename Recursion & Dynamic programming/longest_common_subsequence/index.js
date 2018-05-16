// Intialize 2 demension array with count number 0.

// If i === 0 || j === 0, skip it, which means there is no count the line

// If word is mathced, increament 

// If the characters are not matched, change count number to max element comparing by neibors elements.
// array[i][j-1] and array[i-1][j]


// End of the loop, return right bottom corner element( array[str1.length][str2.length]) which is final result of calculation.
function lcs(str1, str2) {
  var array = [];

  // Intialize 2 demension array with count number 0.

  for (let i = 0; i < str1.length + 1; i++) {
    var subarray = []
    for (let j = 0; j < str2.length + 1; j++) {
      subarray.push(0);
    }
    array.push(subarray);
  }
  
  for (let i = 0; i < str1.length + 1; i++) {
    for (let j = 0; j < str2.length + 1; j++) {
      if (i === 0 || j === 0) { // If i === 0 || j === 0, skip it, which means keep number 0
        continue;
      } else if (str1[i - 1] === str2[j - 1]) { // If word is mathced, increament 
        array[i][j] = array[i - 1][j - 1] + 1
      } else { // If the characters are not matched, change count number to max element comparing by neibors elements.
// array[i][j-1] and array[i-1][j]
        array[i][j] = Math.max(array[i][j - 1], array[i-1][j]);
      }
    }
  }

  return array[str1.length][str2.length];
}


var str1A = "AGGTAB";
var str1B = "GXTXAYB";
console.log(lcs(str1A, str1B));

var str2A = "GGGGGGG";
var str2B = "GGGGGGG";
console.log(lcs(str2A, str2B));

var str3A = "G";
var str3B = "G";
console.log(lcs(str3A, str3B));

var str4A = "A";
var str4B = "G";
console.log(lcs(str4A, str4B));


var str5A = "ABCDEF";
var str5B = "GHIJKLMOKS";
console.log(lcs(str5A, str5B));
