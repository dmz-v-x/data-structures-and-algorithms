// Previously in DFS:

// We started from node 0  
// → and visited all reachable nodes

// But in a **disconnected graph**, some nodes are NOT reachable from 0.

// Example:


// Component 1: 0 — 1 — 2
// Component 2: 3 — 4

// If we run DFS(0):

// Result → [0, 1, 2]

// But nodes 3 and 4 are missed.

// Core Idea to Solve This

// Exactly like BFS case:

// We must run DFS **multiple times**.

// For every node:

// If it is NOT visited → start DFS from it.


// High-Level Algorithm

// 1. Create visited array  
// 2. Loop through all nodes (0 → n-1)  
// 3. If node is not visited:
//    - Run DFS from that node  
// 4. Collect traversal


// Why This Works

// Each DFS call explores one connected component.

// Loop ensures we cover all components.


// Step-by-Step Dry Run

// Graph:


// 0 — 1 — 2 3 — 4


// Adjacency list:

// [
//   [1],     // 0
//   [0, 2],  // 1
//   [1],     // 2
//   [4],     // 3
//   [3]      // 4
// ]

// Initial:

// Visited = [false, false, false, false, false]
// Result = []

// i = 0

// Not visited → DFS(0)

// DFS path:

// 0 → 1 → 2

// Result: [0, 1, 2]
// Visited: [true, true, true, false, false]

// i = 1, 2

// Already visited → skip

// i = 3

// Not visited → DFS(3)

// DFS path:

// 3 → 4

// Result: [0, 1, 2, 3, 4]
// Visited: [true, true, true, true, true]

// Done.

function dfsDisconnected(adj){
  const n = adj.length;

  const visited = new Array(n).fill(false);
  const result = [];

  function dfs(node){
    visited[node] = true;
    result.push(node);

    for(let neighbor of adj[node]){
      if(!visited[neighbor]){
        dfs(neighbor);
      }
    }
  }

  for(let i = 0; i<n; i++){
    if(!visited[i]){
      dfs(i);
    }
  }
  return result;
}
  
