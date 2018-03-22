function flatten(array) {
  var newArray = []

  for (var ele of array) {
    if (Array.isArray(ele)) {
      newArray = newArray.concat(flatten(ele))
    } else {
      newArray.push(ele)
    }
  }
  
  return newArray
}

console.log(flatten([[1, 2], 3, [4, [[5]]]] ));


// - At last phase

// [1, 2]
// 3
// [4, 5]


// http://www.jstips.co/en/javascript/flattening-multidimensional-arrays-in-javascript/