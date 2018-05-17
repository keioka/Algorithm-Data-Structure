function Graph() {
	this.graph = {} // adjacency list 
}

Graph.prototype.addNode = function(value) {
	if (!this.graph[value]) {
    	this.graph[value] = [];
	}
}

Graph.prototype.connectNode = function(node1, node2) {
   	if (this.graph[node1] && this.graph[node2]) {
		this.graph[node1].push(node2);
		this.graph[node2].push(node1);
	}
}


Graph.prototype.depthFisrt = function(value, cb) {
 	if (!this.graph[value]) {
    	return null;
	}

	var queue = [...this.graph[value]];
    var visited = {};
	
	cb(value);
    visited[value] = true;

    while (queue.length > 0) {
      var node = queue.shift();
      if (!visited[node]) {
      	
      	cb(node);
      	visited[node] = true;

      	if (this.graph[node].length > 0) {
      	  queue = queue.concat(this.graph[node]);
      	}
      }
    }
}


var g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");
g.addNode("H");
g.addNode("I");
g.addNode("J");
g.addNode("K");
g.addNode("L");
g.connectNode("B", "A");
g.connectNode("B", "C");
g.connectNode("B", "L");
g.connectNode("A", "J");
g.connectNode("C", "I");
g.connectNode("E", "F");
g.connectNode("I", "H");
g.connectNode("G", "F");
g.connectNode("L", "I");
g.connectNode("H", "A");

g.depthFisrt("A", function(value) { console.log(value) });
