function minSizeSubarray(nums, s) {
    var sum = 0;
    var minLength = Math.min();
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        sum += num;

        while (sum >= s) {
            minLength = Math.min(minLength, i - j + 1);
            sum -= nums[j];
            j++;
        }

    }

    return minLength === Math.min() ? 0 : minLength;
}

var result = minSizeSubarray([2, 3, 1, 2, 4, 3], 7);
// var result = minSizeSubarray([1,2,3,4,5], 15);