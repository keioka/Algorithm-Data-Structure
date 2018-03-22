var data = require('../unsorted_array.json')
var mergeSort = require('./merge_sort/index.js')
var selectionSort = require('./selection_sort/index.js')
var bubbleSort = require('./bubble_sort/index.js')


function bench(cb, options) {
  options = options || { name: 'N/A', arrayLength: 'N/A'}
  var start = new Date()
  cb()
  var end = new Date() - start
  console.log("               ")
  console.log("Algo: %s, Length: %s", options.name, options.arrayLength)
  console.log("Time: %dms", end)
}

bench(function() { mergeSort(data) }, { name: 'mergeSort', arrayLength: data.length })
bench(function() { selectionSort(data) }, { name: 'selectionSort', arrayLength: data.length })
bench(function() { bubbleSort(data) }, { name: 'bubbleSort', arrayLength: data.length })

