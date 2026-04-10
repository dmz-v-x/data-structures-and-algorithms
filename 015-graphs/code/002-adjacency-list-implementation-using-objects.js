// 1. In adjacency matrix:

// We stored all possible vertex pairs.

// 2.In adjacency list:

// We store only actual neighbors.

// If a vertex has 3 neighbors,
// we store only those 3 — nothing else.

// 3. How Do We Represent It in JavaScript?

// We need:

// - A collection of vertices
// - For each vertex → a list of neighbors

// Best structure in JavaScript:

// Use an **Object** (or Map).

// Structure:
// {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A'],
//   D: ['B']
// }

// Each key is a vertex.
// Each value is its neighbor list.

// This is memory efficient.

// 4. Basic minimal graph structure:

// class Graph{
//   constructor(){
//     this.adjacencyList = {};
//   }
// }

// Explanation:

// adjacencyList stores entire graph.
// Keys → vertices
// Values → neighbor arrays

// 5. Adding a Vertex:

// Step 1: Check if it already exists
// Step 2: If not create an empty array

// addVertex(vertex){
//   if(!this.adjacencyList[vertex]){
//     this.adjacencyList[vertex] = [];
//   }
// }

// If we add A:

// {
//   A: []
// }

// A exists but no edges yet.

// 6. Adding an Edge (Undirected Graph)

// Step 1: If A -- B exists
// Add B in A's list
// Add A is B's list

// Step 2: First check if vertex exists if not then call addVertex and add vertex

// Step 3: Then push vertex to list of v1 and v2 as neighbors

// addEdge("A", "B")

// Structure becomes:

// {
//   A: ['B'],
//   B: ['A']
// }

// 7. Removing an Edge:

// remove each vertex from other's list

// 8. Removing a Vertex

// Step 1: Remove all edges connected to it
// Step 2: Delete the vertex

// 9. Directed Graph

// if A --> B
// Add B in A's list

// Just push in v2 in v1

// 10. Weighted Graph:

// Add weight along with the edge when calling addEdge

// 11. Check if Edge exists

// Check if vertex exists and then check if it includes another vertex?





class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  // 1. Add Vertex

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  // 2. Add Edge (Undirected Graph)

  addEdge(v1, v2){
    if(!this.adjacencyList[v1]) this.addVertex(v1);
    if(!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // 3. Removing an Edge

  removeEdge(v1, v2){
    this.adjacencyList[v1] = 
      this.adjacencyList[v1].filter(v => v !== v2);

    this.adjacencyList[v2] =
      this.adjacencyList[v2].filter(v => v !== v1)
  }

  // 4. Remove an Vertex

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]) return;

    for(let neighbor of this.adjacencyList[vertex]){
      this.removeEdge(vertex, neighbor);
    }

    delete this.adjacencyList[vertex];
  }

  // 5. Directed graph

  addEdge(v1, v2){
    if(!this.adjacencyList[v1]) this.addVertex(v1);
    if(!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
  }

  // 6. Weighted Graph

  addEdge(v1, v2, weight=1){
    if(!this.adjacencyList[v1]) this.addVertex(v1);
    if(!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacnecyList[v2].push({node: v1, weight});
  }

  // 7. Check if edge exists

  hasEdge(v1, v2){
    return this.adjacencyList[v1]?.includes(v2);
  }

  // 8. Printing Graph

  print(){
    console.log(this.adjacencyList);
  }
}
