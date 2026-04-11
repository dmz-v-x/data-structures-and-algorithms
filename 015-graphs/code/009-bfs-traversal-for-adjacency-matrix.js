// Input Format (Matrix)

// let matrix = [
//   [1,1,0],
//   [1,1,0],
//   [0,0,1]
// ];

// Meaning:

// matrix[i][j] === 1 → edge exists

// Core Idea of BFS

// Use queue
// Use visited
// Start from a node
// Explore neighbors

function bfs(matrix, start){
  let n = matrix.length;

  let queue = [];
  let visited = new Set();
  let result = [];

  queue.push(start);
  visited.add(start);

  while(queue.length > 0){
    let current = queue.shift();
    result.push(current);

    // scan entire row to find neighbors
    for(let j = 0; j<n; j++){
      if(matrix[current][j] === 1 && !visited.has(j)){
        visited.add(j);
        queue.push(j);
      }
    }
  }
  return result;
}























