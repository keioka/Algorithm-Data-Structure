function isBalanced(s) {
    // Complete this function
    var array = s.split('')
    var mid = Math.round(array.length / 2)
    // IF the length of the array is not even, TEHN return false
    if (array.length % 2 !== 0) {
        return 'NO'
    }
    
    var left = array.slice(0, mid)
    var right = array.slice(mid, array.length)
    while (left.length > 0 && right.length > 0) {
        var leftEle = left.pop()
        var rightEle = right.shift()

        switch(leftEle) {
            case '(':
                if (rightEle !== ')') {
                    return 'NO'
                }
                break
            case '[':
                if (rightEle !== ']') {
                    return 'NO'
                }
                break
            case '{':
                if (rightEle !== '}') {
                    return 'NO'
                }
                break
        }
    }
    
    return 'YES'
}