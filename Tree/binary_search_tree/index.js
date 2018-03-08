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

Tree.prototype.bfsTraverse　= function(cb) {
  var queue = [this]
  var node
  while (queue.length > 0) {
    node = queue.shift()
    cb(node)
    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }
}

Tree.prototype.dfsTraverse　= function(cb) {
  var stack = [this]
  var node 
  while (stack.length > 0) {
    console.log(stack)
    node = stack.pop()

    cb(node)

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right)
    }
  }
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

console.log("--- bfs ---")
rootNode.bfsTraverse(function(node) { console.log(node.value) })

console.log("--- dfs ---")
rootNode.dfsTraverse(function(node) { console.log(node.value) })

console.log(contain(rootNode, 15))








/*

 Solution 2
*/

/*
  - Add Edge
  - Add Vertex
  - Remove Vertex
  - 
  - DFS
  - BFS
*/

function Graph() {
  this._list = {}
}



/*
  Binary Search Tree
  
  - addNode
  - removeNode
  - getMax: Get Maximum number of the tree  
  - getMin: Get minimum number of tree  
  - maxHeight: Calculate Max Height of the tree  
  - isBalanced: Check if the tree is balanced or not. The difference of the height of tree should be 1. If it is more than 1, it is not balanced.  
  - BFS  Search nodes from the closest nodes  
  - DFS  Search nodes from the deepest nodes
    - InOrder
    - PreOrder
    - PostOrder
  
*/


function Tree(value) {
  this.value = value
  this.left = null
  this.right = null
}


Tree.prototype.add = function(value) {
  
  // This is in case of passed value is node tree object. For example if a node is deleted and its child need to be added.
  var value = value
  var newTreeNode 
  if (typeof value === "object") {
    newTreeNode = value
    value = newTreeNode.value
  }
  
  // IF value is less than current tree node value 
  // THEN put new value to left
      
  if(this.value > value) {
    // IF left is empty
    if(!this.left) {
      // IF newTreeNode is node exsists (Tree obejct is passed as argument)
      //   assign it without creating new Tree
      // IF NOT
      //   generate new Tree object.
      this.left = newTreeNode ? newTreeNode : new Tree(value)
      
    // IF left is not empty, go to left child
    } else if (this.left) {
      
      // Invoke add method on left node
      this.left.add(value)
    }
  } else if (this.value < value) {
    
    // IF left is empty
    if (!this.right) {
    
      this.right = newTreeNode ? newTreeNode : new Tree(value)
    } else if (this.right) {
      this.right.add(value)
    }
  }
}

Tree.prototype.deleteNode = function(value) {
  var node = this
  
  // Operation for deleting left child node
  
  // IF 
  //   * the node has left AND
  //   * the value of node's left child is equal to value
  if (node.left && value === node.left.value) {
    
    // save node which will be deleted to extract its child nodes
    var deleteNode = node.left
    
    // delete node left
    node.left = null
    
    if (deleteNode.left) {
      // node's left will be deleted so node's left child' left child need to added to current node if it exsists
      node.add(deleteNode.left)
    }
    
    if (deleteNode.right) {
      node.add(deleteNode.right)
    }
  }
  
  if (node.right && value === node.right.value) {
    
    var deleteNode = node.right
    
    node.right = null
    
    if (deleteNode.left) {
      node.add(deleteNode.left) 
    }
    
    if (deleteNode.right) {
      node.add(deleteNode.right)
    }
  
  }
  
  // operation for search
  // O(log n)
  if (node.left && node.value > value) {
    node.left.deleteNode()
  } else if (node.right && node.value < value) {
    node.right.deleteNode()
  }
}

Tree.prototype.search = function(value, cb) {
  if (this.value === value) {
    cb(this)
    return
  }
  
  if (this.right && this.value < value) {
    this.right.search(value, cb)
  }
  
  if (this.left && this.value > value) {
    this.left.search(value, cb)
  }
  
  return false
}


Tree.prototype.bfs = function(cb) {
  var queue = [this] 
  while (queue.length > 0) {
    var node = queue.shift()
    cb(node)
    if (node.left) {
      queue.push(node.left)
    } 
    
    if (node.right) {
      queue.push(node.right)
    }
  }
}

// Time: O(n) 
Tree.prototype._inOrder = function(cb) {
  if (this.left) {
    this.left._inOrder(cb)  
  } 
  
  cb(this)
  
  if (this.right) {
    this.right._inOrder(cb)
  }
}

// Time: O(n) 
Tree.prototype._preOrder = function(cb) {
  
  cb(this)

  if (this.left) {
    this.left._inOrder(cb)  
  } 
    
  if (this.right) {
    this.right._inOrder(cb)
  }
}

// Time: O(n) 
Tree.prototype._postOrder = function(cb) {
  
  if (this.left) {
    this.left._inOrder(cb)  
  } 
    
  if (this.right) {
    this.right._inOrder(cb)
  }
  
  cb(this)

}

// O(n) 
Tree.prototype.dfs = function(cb) {
  this._inOrder(cb)
}

// Time: O(log n) 
Tree.prototype.getMax = function() {
  var node = this
  while (node.right) {
    node = node.right 
  }
  
  return node.value
}

// Time: O(log n) 
Tree.prototype.getMin = function() {
  var node = this
  while (node.left) {
    node = node.left
  }
  
  return node.value 
}


// Time: O(n) 
Tree.prototype.getHeight = function(node) {
  if (!node) {
    return 0
  }
  var left = this.getHeight(node.left)
  var right = this.getHeight(node.right)
  
  return 1 + Math.max(left, right)
}


// Time: O(n)
Tree.prototype.isBalanced = function() {
  var left = this.getHeight(this.left)
  var right = this.getHeight(this.right)
  return Math.abs(left - right) < 1  
}

var tree = new Tree(41)
tree.add(98)
tree.add(2)
tree.add(31)
tree.add(23)

console.log("---------- bfs ------------")
tree.bfs(function(node) { console.log(node.value) })

console.log("---------- dfs ------------")
tree.dfs(function(node) { console.log(node.value) })


console.log("-------------------------")
console.log("Min Number", tree.getMin())
console.log("Max Number", tree.getMax())

console.log(tree.getHeight(tree))

console.log("----- isBalanced -------")
console.log(tree.isBalanced())

console.log("----- search -------")
tree.search(2, function(node) { console.log(node.value) })


console.log("                         ")
console.log("####### ! Delete ########")
tree.deleteNode(2)
tree.deleteNode(1)
tree.deleteNode(98)
tree.deleteNode(31)
tree.deleteNode(23)


console.log("---------- bfs ------------")
tree.bfs(function(node) { console.log(node.value) })

console.log("---------- dfs ------------")
tree.dfs(function(node) { console.log(node.value) })
console.log("Min Number", tree.getMin())
console.log("Max Number", tree.getMax()) 

