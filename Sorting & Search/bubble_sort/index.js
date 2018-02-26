var array = [8, 9, 1, 2, 3, 23]

function bubbleSort(array) {
  var current = array.length
  while (current !== 0) {
  	console.log(array)
  	for(let i = 0; i < current; i++) {
  	  if (array[i] > array[i+1]) {
        var temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
	  }
  	}
	current--;
  }
  return array
}


console.log(bubbleSort(array))


