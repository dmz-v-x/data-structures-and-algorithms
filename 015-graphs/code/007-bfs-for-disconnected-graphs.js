// Problem Understanding: What Is a Disconnected Graph?

// Till now, we assumed:

// Starting from node 0 → we can reach all nodes.

// That means the graph was **connected**.

// But in reality, graphs can be **disconnected**.

// Example:

// Component 1: 0 — 1 — 2
// Component 2: 3 — 4

// Adjacency List: 

// [
//   [1],     // 0
//   [0, 2],  // 1
//   [1],     // 2
//   [4],     // 3
//   [3]      // 4
// ]

// From node 0 → we can only visit: 0,1,2
// Nodes 3 and 4 are unreachable from 0.

// // Core Idea to Solve this:

// We need to:

// Run BFS multiple times.

// For every node:

// If it is NOT visited → start BFS from it.


// Algorithm:

// High-Level Algorithm
// Create visited array
// Loop through all nodes (0 → n-1)
// If node is not visited:
// Run BFS from that node
// Collect all results

// Why This Works

// Each BFS call covers one connected component.

// Loop ensures we cover all components.

// Dry Run:

// Initial:

// Visited = [false, false, false, false, false]  
// Result = []

// ---

// #### i = 0

// Not visited → run BFS(0)

// Result becomes: [0,1,2]  
// Visited = [true, true, true, false, false]

// ---

// #### i = 1,2

// Already visited → skip

// ---

// #### i = 3

// Not visited → run BFS(3)

// Result becomes: [0,1,2,3,4]  
// Visited = [true, true, true, true, true]


function bfsDisconnected(adj){
  const n = adj.length;

  const visited = new Array(n).fill(false);
  const result = [];

  for(let i = 0; i<n; i++){
    if(!visited[i]){
      const queue = [];
      queue.push(i);
      visited[i] = true;

      while(queue.length > 0){
        const node = queue.shift();
        result.push(node);

        for(let neighbor of adj[node]){
          if(!visited[neighbor]){
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  result; 
}































