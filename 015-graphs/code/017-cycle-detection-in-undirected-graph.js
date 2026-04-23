// Given an undirected graph, detect:

// “Does a cycle exist?”

// What is a cycle?

// Definition

// A cycle exists if:

// You can start from a node and come back to it
// without reusing the same edge immediately

// Example

// No cycle
// 0 --- 1 --- 2

// Cycle
// 0 --- 1
//  \   /
//    2

// 0 → 1 → 2 → 0

// Key challenge 

// In an undirected graph:

// Every edge is two-way

// So when you go:

// 0 → 1

// You will see:

// 1 → 0

// That does NOT mean cycle!

// The MAIN IDEA

// While traversing:

// If you visit a node that is already visited AND it is NOT your parent → cycle exists


// DFS Appraoch

function hasCycle(V, edges){
  let adj = Array(V).fill(0).map(() => []);

  for(let [u, v] of edges){
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(V).fill(false);

  function dfs(node, parent){
    visited[node] = true;

    for(let nei of adj[node]){
      if(!visited[nei]){
        if(dfs(nei, node)) return true;
      }else if(nei !== parent){
        return true;
      }
    }
    return false;
  }

  for(let i = 0; i<V; i++){
    if(!visited[i]){
      if(dfs(i, -1)) return false;
    }
  }

  return false;
}


// BFS Approach


function hasCycle(V, edges) {
  let adj = Array(V).fill(0).map(() => []);

  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      let queue = [[i, -1]];
      visited[i] = true;

      while (queue.length > 0) {
        let [node, parent] = queue.shift();

        for (let nei of adj[node]) {
          if (!visited[nei]) {
            visited[nei] = true;
            queue.push([nei, node]);
          } 
          else if (nei !== parent) {
            return true;
          }
        }
      }
    }
  }

  return false;
}







// Complexity
// Time
// O(V + E)
// Space
// O(V + E)








