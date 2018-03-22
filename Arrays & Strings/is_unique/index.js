function isUnique(string) {
  var counter = {}
  
  for (let i = 0; i < string.length; i++) {
    var char = string[i]
    if (counter[char]) {
      return false
    } else {
      counter[char] = true
    }
  }
  
  return true
}

console.log(isUnique("dow"))