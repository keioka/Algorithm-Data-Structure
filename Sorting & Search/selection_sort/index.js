var array = [8, 9, 1, 2, 3, 23]

function selectionSort(array) {
  // index points the first element on sorted array
  var index = 0
  while (index !== array.length) {
    var minIndex = 0
    var temp
    for (let i = index; i < array.length; i++) {
      if (minIndex === 0 || array[minIndex] > array[i]) {
        minIndex = i
      }
    }
    temp = array[index]
    array[index] = array[minIndex]
    array[minIndex] = temp
    index++
  }
  return array
}

console.log(selectionSort(array))