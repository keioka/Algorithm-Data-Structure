function palindrome(str) {
  var count = {};

  var array = str.split("").map(s => s.toLowerCase());

  for (var i = 0; i < array.length; i++) {
  	var char = array[i];
  	if (char !== ' ') {
  		if (!count[char] && !Number.isInteger(count[char])) {
          count[char] = 1;
  		} else {
  		  count[char]++;
  		}
  	}
  }
  
  var oddCount = Object.keys(count)
  	.map(key => count[key])
  	.filter(count => count % 2 !== 0)
  	.length

  if (oddCount < 2) {
  	return true;
  } else {
  	return false;
  }
}

console.log(palindrome("Tact Coa"));
console.log(palindrome("TactCoa"));
console.log(palindrome("Tactooa"));
console.log(palindrome("Tactooaaaa"));
console.log(palindrome("Tatooaaaa"));
console.log(palindrome("abcb"));
console.log(palindrome("abb"));