function Tree(value) {
  this.value = value
  this.left = null
  this.right = null
}


Tree.prototype.add = function(value) {
  console.log(this)
  if (value <= this.value) {
  	if (this.left) {
  	  this.left.add(value)
  	} else {
  	  this.left = new Tree(value)
  	}
  } else if (value > this.value) {
  	if (this.right) {
      this.right.add(value)
  	} else {
  	  this.right = new Tree(value)
  	}
  }

  return this
};

Tree.prototype.display = function() {
  console.log(this.value)
}

/*
  InOrder

  1. Traverse the left subtree, i.e., call Inorder(left-subtree)
  2. Visit the root.
  3. Traverse the right subtree, i.e., call Inorder(right-subtree)
*/


function printInOrder(node) {
  if (node.left) {
    printInOrder(node.left)
  }
  
  node.display()
  
  if (node.right) {
    printInOrder(node.right)
  }
}

/*
  PreOrder
  
  1. Visit the root.
  2. Traverse the left subtree, i.e., call Preorder(left-subtree)
  3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
*/


function printPreOrder(node) {
  node.display()
  
  if (node.left) {
    printPreOrder(node.left)
  }

  if (node.right) {
    printPreOrder(node.right)
  }
}

/*
  PostOrder

  1. Traverse the left subtree, i.e., call Postorder(left-subtree)
  2. Traverse the right subtree, i.e., call Postorder(right-subtree)
  3. Visit the root.
*/

function printPostOrder(node) {
  
  if (node.left) {
    printPostOrder(node.left)
  }

  if (node.right) {
    printPostOrder(node.right)
  }

  node.display()
}

function contain(node, value) {
  if (node.value === value) {
  	console.log("--- Find the value ---")
  	console.log(node.value)
    return true
  }

  if (node.value > value) {
  	if (node.left) {
  	  return contain(node.left, value)
  	} else {
  	  return false
  	}
  }

  if (node.value < value) {
  	if (node.right) {
  	  return contain(node.right, value)
  	} else {
  	  return false
  	}
  }
}


/*
+ Example

        10
      2    15
    1   3
*/

var rootNode = new Tree(10)
rootNode.add(2)
rootNode.add(3)
rootNode.add(1)
rootNode.add(15)
console.log("--- InOrder ---")
printInOrder(rootNode)
console.log("--- PreOrder ---")
printPreOrder(rootNode)
console.log("--- PostOrder ---")
printPostOrder(rootNode)


console.log(contain(rootNode, 15))
