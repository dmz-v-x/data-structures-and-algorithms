// Connected Components in undirected graph

// You must return the actual components (nodes inside each group)

// Previous problem:

// Output → 2

// Now:

// Output → [[0,1,2], [3,4]]

// Input understanding
// V = 5

// edges = [[0,1], [2,1], [3,4]]

// Graph visualization
// 0 --- 1 --- 2     3 --- 4

// Components
// Component 1 → [0,1,2]
// Component 2 → [3,4]

// This is still connected components problem

// ONLY CHANGE:

// Instead of count++ → store nodes


// Strategy:

// Step 1: Build Adjacency List

// let adj = Array(V).fill(0).map(() => []);

// for (let [u, v] of edges) {
//   adj[u].push(v);
//   adj[v].push(u);
// }

// After building
// [
//  [1],
//  [0,2],
//  [1],
//  [4],
//  [3]
// ]

// Step 2: 

// Create visited
// Loop over all nodes
// If not visited:
// create empty array component
// run DFS
// collect nodes inside it
// Push component into result


function connectedComponents(V, edges){
  // Step 1: Build Graph

  let adj = Array(V).fill(0).map(() => []);

  for(let [u, v] of edges){
    adj[u].push(v);
    adj[v].push(u);
  }

  // Step 2: Visited
  let visited = new Array(V).fill(false);

  let result = [];

  // Step 3: DFS
  function dfs(node, component){
    visited[node] = true;
    component.push(node);

    for(let nei of adj[node]){
      if(!visited[nei]){
        dfs(nei, component);
      }
    }
  }

  // Step 4: Traverse all nodes
  for(let i = 0; i<V; i++){
    if(!visited[i]){
      let component = [];
      dfs(i, component);
      result.push(component);
    }
  }

  return result;
}




// BFS

function connectedComponents(V, edges) {
  let adj = Array(V).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(V).fill(false);
  let result = [];

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      let component = [];
      let queue = [i];
      visited[i] = true;

      while (queue.length > 0) {
        let node = queue.shift();
        component.push(node);

        for (let nei of adj[node]) {
          if (!visited[nei]) {
            visited[nei] = true;
            queue.push(nei);
          }
        }
      }

      result.push(component);
    }
  }

  return result;
}




// Complexity

// Time
// O(V + E)

// Space
// O(V + E)











