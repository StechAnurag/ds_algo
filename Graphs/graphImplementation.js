class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this;
  }

  addEdge(node1, node2) {
    // Undirected Graph : so, make connections two way
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;
  }

  showConnections() {
    for (let el in this.adjacentList) {
      // const value = this.adjacentList[el].toString().split(',').join('  ');
      // console.log(`${el} ---> ${value}`)
      console.log(`${el} ---> ${this.adjacentList[el].toString()}`);
    }
  }
}

const myGraph = new Graph();
// Adding Vertex
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

// Adding Edges
myGraph.addEdge('0', '1');
myGraph.addEdge('0', '2');

myGraph.addEdge('1', '2');
myGraph.addEdge('1', '3');

myGraph.addEdge('3', '4');

myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');

myGraph.addEdge('5', '6');

myGraph.showConnections();
