// Breadth First Search

// Breadth First Search (BFS) is a graph traversal algorithm.

// Traversal means:
// Visiting all vertices of a graph.

// BFS explores the graph **level by level**.

// It does NOT go deep immediately.  
// It first visits all immediate neighbors, then their neighbors, and so on.

// Core Idea:

// From a starting vertex:

// 1. Visit the node
// 2. Visit all its neighbors
// 3. Then visit neighbors of neighbors
// 4. Continue until all nodes are visited

// Important rule:

// First come → First process

// This is why BFS uses a **Queue (FIFO)**.

// Why Do We Need BFS?

// BFS is used for:

// - Shortest path in unweighted graphs
// - Level order traversal
// - Finding connected components
// - Network broadcasting
// - Social network analysis

// Data Structures Needed

// To implement BFS, we need:

// 1. Queue → to process nodes level by level  
// 2. Visited set → to avoid revisiting nodes  

// Without visited:

// We may go into infinite loops in cyclic graphs.

// Start with a source node.

// Step 1: Mark it visited  
// Step 2: Add it to queue  

// Now repeat:

// Step 3: Remove node from queue  
// Step 4: Visit it (process it)  
// Step 5: Add all unvisited neighbors to queue  
// Step 6: Mark neighbors as visited  

// Repeat until queue becomes empty.

// A — B — D
// |   |
// C   E

// Adjacency List:

// {
//   A: ['B', 'C'],
//   B: ['A', 'D', 'E'],
//   C: ['A'],
//   D: ['B'],
//   E: ['B']
// }


bfs(start){
  const visited = new Set();
  const queue = [];
  const result = [];

  queue.push(start);
  visited.add(start);

  while(queue.length > 0){
    const current = queue.shift();
    result.push(current);

    for(let neighbor of this.adjacencyList.get(current)){
      if(!visited.has(neighbor)){
        visited.add(neightbor);
        queue.push(neighbor);
      }
    }
  }
}


//


bfs(adj) {
  let queue = [];
  let visited = new Set();
  let result =[];
  
  queue.push(0);
  visited.add(0);
  
  while(queue.length > 0){
    let current = queue.shift();
    result.push(current);
    
    for(let neighbor of adj[current]){
      if(!visited.has(neighbor)){
          visited.add(neighbor);
          queue.push(neighbor);
      }
    }
  }
  
  return result;
        
}














