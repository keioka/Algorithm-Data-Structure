// Divide array into 1 piece
// Switch 2 elements
// Merge

// base case: if list.length < 2, return 
// break the list into 
// Lsorted = mergeSort(L)
// Rsorted = mergeSort(R)

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  
  let middle = array.length / 2
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}


function merge(left, right) {
  // while left or right is remain, run loop
  let indexLeft = 0
  let indexRight = 0
  let result = []

  while (
    indexLeft < left.length && 
    indexRight < right.length
  ) {
    if (left[indexLeft] < right[indexRight] ) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  
  result = [
    ...result, 
    ...left.slice(indexLeft), 
    ...right.slice(indexRight)
  ]
  
  return result
}

console.log(mergeSort([22, 43, 2, 34, 1]))