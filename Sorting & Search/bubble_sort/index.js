function bubbleSort(array) {
  var current = array.length
  while (current !== 0) {
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


module.exports = bubbleSort

