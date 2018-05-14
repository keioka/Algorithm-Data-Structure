function maxStock(array) {

  if (array.length < 2) {
    return 0;
  }

  var min = array[0];
  var max = Math.max();
  var result = 0
  var i = 0;

  while (array.length > i) {
    if (array[i] - min > result) {
      result = array[i] - min;
    }

    if (array[i] < min) {
      min = array[i]
    }

    i++;
  }

  return result;
}

console.log(maxStock([120, 330, 10, 40, 50, 100, 200]));
