// Why Use Map Instead of Object?

// We use:

// Map because:

// - Keys can be any type (not just strings)
// - No prototype issues
// - Cleaner API (.set, .get, .has)
// - Better for large dynamic datasets

// Structure:

// Map {
//   vertex => Set of neighbors
// }

// Example:

// Map {
//   'A' => Set { 'B', 'C' },
//   'B' => Set { 'A' }
// }


class Graph{
  constructor(directed = false){
    this.adjacencyList = new Map();
    this.directed = directed
  }

  addVertex(vertex){
    if(!this.adjacencyList.has(vertex)){
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(v1, v2, weight = 1){
    if(!this.adjacencyList.has(v1)) this.addVertex(v1);
    if(!this.adjacencyList.has(v2)) this.addVertex(v2);

    this.adjacencyList.get(v1).add(v2, weight);

    if(!this.directed){
      this.adjacencyList.get(v2).add(v1, weight);
    }
    
  }

  removeEdge(v1, v2){
    this.adjacencyList.get(v1)?.delete(v2);

    if(!this.directed){
      this.adjacencyList.get(v2)?.delete(v1);
    }
  }

  removeVertex(vertex){
    if(!this.adjacencyList.has(vertex)) return;

    for(let neighbor of this.adjacencyList.get(vertex).keys()){
      this.adjacencyList.get(neighbor)?.delete(vertex);
    }
    this.adjacencyList.delete(vertex);
  }

  hasEdge(v1, v2){
    return this.adjacencyList.get(v1)?.has(v2) || false;
  }

  getNeighbors(vertex){
    return this.adjacencyList.get(vertex);
  }
}



















