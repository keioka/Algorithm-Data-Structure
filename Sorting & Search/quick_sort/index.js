function quickSort(arr, leftIndex, rightIndex){
    
  // leftIndex and rightIndex could be "-1" or "undefined"
  // so -1 is "falsy" so || operator does not work
  // Instead of that, use Number.isInteger().
  
  var left = Number.isInteger(leftIndex) ? leftIndex : 0;
  var right = Number.isInteger(rightIndex) ? rightIndex : arr.length - 1;

  var partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  
  return arr;
}

function partition(arr, left, right){
  var pivot = right;
  var pivotValue = arr[pivot];
  var partitionIndex = left;
    
  for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
  swap(arr, i, partitionIndex);
  return partitionIndex;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(quickSort([21, 2, 5, 4, 3, 44, 11, 12]));
