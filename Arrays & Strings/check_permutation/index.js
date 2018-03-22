function permutation(string1, string2) {
  var counter = {}
  var arrayString1 = string1.split("")
  var arrayString2 = string2.split("")
  
  for (let i = 0; i < arrayString1.length; i++) {
    let char = arrayString1[i]
    if (counter[char]) {
      counter[char]++
    } else {
      counter[char] = 1
    }
  }
  
  for (let i = 0; i < arrayString2.length; i++) {
    let char = arrayString2[i]
    if (counter[char]) {
      counter[char]--
    } else {
      counter[char] = -1
    }

    if (counter[char] < 0) {
      return false
    }

  }
  
  return true
}

console.log(permutation("dog", "gosd"))