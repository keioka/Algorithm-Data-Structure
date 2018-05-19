function longestCommonPrefix(strs) {
    if (strs.length < 1) {
        return "";
    }

    var index = 0;
    var prefix = '';

    while (strs[0].length > index) {
        var letter = strs[0][index];
        var isMatched = true;

        for (var i = 0; i < strs.length; i++) {
            if (strs[i][index] !== letter) {
                isMatched = false;
                break;
            }
        }

        if (isMatched) {
            prefix += letter;
        } else {
            break;
        }

        index++;
    }

    return prefix;
};


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["aca", "cba"]));