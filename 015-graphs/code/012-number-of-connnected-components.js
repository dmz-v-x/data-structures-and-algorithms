// You are given:

// V = 5
// edges = [[0,1], [2,1], [3,4]]

// Return number of connected components

// Count how many separate groups exist in the graph

// This is EXACTLY the same idea as provinces.

// Step 1: Understand the input format

// This time input is:

// edges = [[u, v], ...]

// This is called an edge list

// Important realization

// We CANNOT directly run DFS on this

// Because:

// We don’t know neighbors of a node directly
// We only have connections (edges)

// Step 2: Convert to adjacency list

// We convert edges → graph

// Create empty graph
// let adj = Array(V).fill(0).map(() => []);

// For V = 5:

// [
//  [], [], [], [], []
// ]

// Fill using edges
// for (let [u, v] of edges) {
//   adj[u].push(v);
//   adj[v].push(u); // because undirected
// }

// After filling
// [
//  [1],        // 0
//  [0,2],      // 1
//  [1],        // 2
//  [4],        // 3
//  [3]         // 4
// ]

// Visualization
// 0 --- 1 --- 2     3 --- 4

// STEP 3: Same idea as provinces

// We now:

// Keep visited array
// Traverse each node
// If not visited → new component
// Run DFS

function countComponents(V, edges){

  // Step 1: build graph
  let adj = Array(V).fill(0).map(() => []);

  for(let [u, v] of edges){
    adj[u].push(v);
    adj[v].push(u);
  }

  // Step 2: visited array

  let visited = new Array(V).fill(false);

  let count = 0;

  // Step 3: DFS function
  function dfs(node){
    visited[node] = true;

    for(let nei of adj[node]){
      if(!visited[nei]){
        dfs(nei);
      }
    }
  }

  // Step 4: Loop all nodes
  for(let i = 0; i< V; i++){
    if(!visited[j]){
      count++;
      dfs(i);
    }
  }

  return count;
}




// BFS Same logic


function countComponents(V, edges) {
  let adj = Array(V).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(V).fill(false);
  let count = 0;

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      count++;

      let queue = [i];
      visited[i] = true;

      while (queue.length > 0) {
        let node = queue.shift();

        for (let nei of adj[node]) {
          if (!visited[nei]) {
            visited[nei] = true;
            queue.push(nei);
          }
        }
      }
    }
  }

  return count;
}




// Complexity:

// Time
// Building graph → O(V + E)
// DFS traversal → O(V + E)

// Final:

// O(V + E)

// Space
// Adjacency list → O(V + E)
// Visited → O(V)
// Stack/Queue → O(V)










