function permutationNum(array) {
    var result = [];

    function inner(currentArray, candidateArray) {
        // If candidateArray becomes empty
        if (candidateArray.length < 1) {
            result.push(currentArray.slice());
        } else {
            for (var i = 0; i < candidateArray.length; i++) {
                var nextSubarray = candidateArray.slice();
                currentArray.push(candidateArray[i]);
                nextSubarray.splice(i, 1);
                inner(currentArray, nextSubarray);
                currentArray.pop();
            }
        }
    }
    inner([], array);
    return result
}

console.log(permutationNum([1, 2, 3]));