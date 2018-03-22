// aaabbbcddddaaa

function compress(str) {
  var array = str.split("")
  var stringCompressed = ""
  var count = 0
  
  for (let i = 0; i < array.length; i++) {
    count += 1
    if (
      i + 1 > array.length || // index is biger than array length which means end of array
      array[i] !== array[i+1] // If the char is different 
    ) {
      stringCompressed += array[i]
      stringCompressed += count
      count = 0
    } 
    
    
  }

  return str.length < stringCompressed.length ? str : stringCompressed
}

console.log(compress("lllllllo"))
console.log(compress("abcdefghijk"))