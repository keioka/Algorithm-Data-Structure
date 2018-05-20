function permutationNum(array) {
    var result = [];

    function inner(currentArray, candidateArray) {
        // If candidateArray becomes empty
        if (candidateArray.length < 1) {
            result.push(currentArray.slice());
        } else {
            for (var i = 0; i < candidateArray.length; i++) {
                // Move element at index i of candidateArray to currentArray

                // create copy of array
                var nextCandidateSubarray = candidateArray.slice();

                // Add element from candidate.
                currentArray.push(candidateArray[i]);

                // Delete element which is pushed to currentArray.
                nextCandidateSubarray.splice(i, 1);

                // Call function with new candidate
                inner(currentArray, nextCandidateSubarray);

                // After calling the function, pop out the element, which means moving back.
                currentArray.pop();

            }
        }
    }
    inner([], array);
    return result
}

console.log(permutationNum([1, 2, 3]));