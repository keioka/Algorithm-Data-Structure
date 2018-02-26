var i = 0;

var hanoi = function(disc, left, middle, right) {
  if (disc > 0) {
    hanoi(disc - 1, left, right, middle);
    console.log("Move disc " + disc + " from " + left + " to " + right + "   ");
    hanoi(disc - 1, middle, left, right);
  }
};

hanoi(3, "left", "middle", "right");