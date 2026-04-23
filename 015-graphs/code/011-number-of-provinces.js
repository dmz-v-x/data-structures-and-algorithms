// Number of Provinces

// What is given?

// You are given:

// isConnected = [
//   [1,1,0],
//   [1,1,0],
//   [0,0,1]
// ]

// This is an Adjacency Matrix

// isConnected[i][j] = 1 → city i is connected to city j
// 0 → not connected

// Goal

// Find how many provinces

// What is a province?

// A group of cities that are directly or indirectly connected

// Real-world intuition

// Think:

// Cities = nodes
// Roads = edges

// A province = one connected component

// Given:

// [
//   [1,1,0],
//   [1,1,0],
//   [0,0,1]
// ]

// Visualization
// City 0 ↔ City 1 (connected)
// City 2 is separate

// Graph looks like:

// 0 --- 1     2



**This problem = count connected components**


// Strategy:

// We will:

// Visit every node
// If not visited → start DFS/BFS
// Mark all reachable nodes
// Increase count

// Dry Run

// isConnected = [
//   [1,1,0],
//   [1,1,0],
//   [0,0,1]
// ]

// Initial state
// visited = [false, false, false]
// count = 0

// i = 0
// Not visited → new province

// count = 1

// Run DFS(0)

// DFS(0)

// Check row 0:

// [1,1,0]
// j = 0 → skip (self)
// j = 1 → connected → go DFS(1)

// DFS(1)

// Row 1:

// [1,1,0]
// j = 0 → already visited
// j = 1 → self
// j = 2 → 0 → ignore

// Done

// Now:

// visited = [true, true, false]
// i = 1

// Already visited → skip

// i = 2

// Not visited → new province

// count = 2

// Run DFS(2)

// DFS(2)

// Row:

// [0,0,1]

// No new nodes

// Final:

// count = 2

// DFS Approach

function findCircleNum(isConnected){
  let n = isConnected.length;
  let visited = new Array(n).fill(false);
  let count = 0;

  function dfs(node){
    visited[node] = true;

    for(let j = 0; j<n; j++){
      if(isConnected[node][j] === 1 && !visited[j]){
        dfs(j);
      }
    }
  }

  for(let i = 0; i<n; i++){
    if(!isVisited[i]){
      count++;
      dfs(i);
    }
  }
  return count;
}



// BFS Approach

function findCircleNum(isConnected){
  let n = isConnected.length;
  let visited = new Array(n).fill(false);
  let count = 0;

  for(let i = 0; i<n; i++){
    if(!visited[i]){
      count++;

      let queue = [i];
      visited[i] = true;

      while(queue.length > 0){
        let node = queue.shift();

        for(let j = 0; j<n; j++){
         if(isConnected[node][j] === 1 && !visited[j]){
           visited[j] = true;
           queue.push(j);
         }
        }
      }
    }
  }
  return count;
}


// | Approach | Time  |
// | -------- | ----- |
// | DFS      | O(n²) |
// | BFS      | O(n²) |

// | Approach | Space |
// | -------- | ----- |
// | DFS      | O(n)  |
// | BFS      | O(n)  |
























