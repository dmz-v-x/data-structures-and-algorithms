// What is a “complete component”

// A component is complete if:

// Every node is connected to every other node

// Example

// Complete
// 0 --- 1
//  \   /
//    2

// Nodes = 3
// Edges = 3

// All pairs connected → COMPLETE

// Not complete
// 0 --- 1     2

// Node 2 not connected → NOT complete

// Key Insight

// For a component with:

// k nodes

// Maximum edges possible:

// k * (k - 1) / 2

// This is the condition

// A component is complete if:

// actual_edges === k * (k - 1) / 2

// Input
// n = 6
// edges = [[0,1], [0,2], [1,2], [3,4]]


// Graph
// Component 1: 0-1-2 (triangle) → complete
// Component 2: 3-4 → complete
// Component 3: 5 → single node → complete

// Answer = 3

// Strategy:

// We will:

// Build adjacency list
// Find each component using DFS
// For each component:
// Count nodes (k)
// Count edges
// Check if complete

// DFS Approach

function countCompleteComponents(n, edges){
  let adj = Array(n).fill(0).map(() => []);

  for(let [u, v] of edges){
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(n).fill(false);

  let result = 0;

  function dfs(node){
    let stack = [node];
    visited[node] = true;

    let nodes = 0;
    let degreeSum = 0;

    while(stack.length > 0){
      let curr = stack.pop();
      nodes++;

      degreeSum += adj[curr].length;

      for(let nei of adj[curr]){
        if(!visited[nei]){
          visited[nei] = true;
          stack.push(nei);
        }
      }
    }

    let edges = degreeSum / 2;

    return {nodes, edges};
  }

  for(let i = 0; i < n; i++){
    if(!visited[i]){
      let {nodes, edges} = dfs(i);

      if(edges === (nodes * (nodes - 1)) / 2){
        result++;
      }
    }
  }
}

Complexity
Time
O(n + e)
Space
O(n + e)



// Using BFS

function countCompleteComponents(n, edges) {
  let adj = Array(n).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(n).fill(false);
  let result = 0;

  function bfs(start) {
    let queue = [start];
    visited[start] = true;

    let nodes = 0;
    let degreeSum = 0;

    while (queue.length > 0) {
      let node = queue.shift();
      nodes++;

      degreeSum += adj[node].length;

      for (let nei of adj[node]) {
        if (!visited[nei]) {
          visited[nei] = true;
          queue.push(nei);
        }
      }
    }

    return { nodes, edges: degreeSum / 2 };
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let { nodes, edges } = bfs(i);

      if (edges === (nodes * (nodes - 1)) / 2) {
        result++;
      }
    }
  }

  return result;
}




