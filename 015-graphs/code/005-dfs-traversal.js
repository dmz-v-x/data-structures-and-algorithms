// DFS: Depth First Search (DFS) is a graph traversal algorithm.

// Traversal means:
// Visiting all vertices of a graph.

// DFS explores the graph **as deep as possible first**, then backtracks.

// Unlike BFS (level by level), DFS goes:

// Deep → deeper → deepest → then comes back.


// Core Idea of DFS

// From a starting node:

// 1. Visit the node
// 2. Go to one unvisited neighbor
// 3. Repeat until no more neighbors
// 4. Backtrack
// 5. Continue with remaining neighbors

// What do we need

// 1. Visited array → avoid cycles  
// 2. Result array → store traversal  

// No queue.

// When vertex are 0 to n-1 use array when vertex are "A" and so on use set

// DFS Traversal of Adjacency List

function dfs(adj){
  const n = adj.length;

  const visited = new Array(n).fill(false);
  const result = [];

  function dfsHelper(node){
    visited[node] = true;
    result.push(node);

    for(let neighbor of adj[node]){
      if(!visited[neighbor]){
        dfsHelper(neighbor);
      }
    }
  }

  // Start from node 0

  dfsHelper(0);

  return result;

  
}

// DFS Traversal of Adjacency Matrix

function dfs(matrix, start){
  let n = matrix.length;

  let visited = new Array(n).fill(false);

  let result = [];

  function traverse(node){
    // mark visited
    visited[node] = true;

    // process node
    result.push(node);

    for(let neighbor = 0; neighbor < n; neighbor++){
      // edge exists and unvisited

      if(matrix[node][neighbor] === 1 && !visited[neighbor]){
        traverse(neighbor);
      }
    }
  }

  traverse(start);
  return result;
}




