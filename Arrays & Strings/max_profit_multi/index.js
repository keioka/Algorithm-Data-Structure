var maxStockMulti = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    if (prices.length === 2) {
        return Math.max(prices[1] - prices[0], 0);
    }

    var min;
    var max;
    var set = [];
    var i = 0;
    while (prices.length - 1 > i)  {
        while (prices[i] > prices[i+1]) {
            i++;
        }

        min = prices[i];

        while (prices[i] <= prices[i+1]) {
            i++;
        }

        max = prices[i];

        set.push([min, max]);
    }

    return set.reduce((acc, crr) => acc + (crr[1] - crr[0]), 0);
};

console.log(maxStockMulti([120, 330, 10, 40, 50, 100, 200, 300]));
console.log(maxStockMulti([10, 330, 1000, 90, 50, 100, 2000]));
