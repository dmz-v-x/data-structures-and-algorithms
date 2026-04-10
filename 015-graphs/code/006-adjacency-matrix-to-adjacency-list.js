function matrixToList(matrix){
  const n = matrix.length;
  const adjList = Array.from({length: n}, () => []);
  // It creates an array of length n where each element is a new empty array.

  for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
      if(matrix[i][j] !== 0){
        adjList[i].push(j);
      }
    }
  }
  return adjList;
}

const matrix = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0]
];

const adjList = matrixToList(matrix);
console.log(adjList);

OUTPUT:
[
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2]
]


// Weighted Graph Version

function matrixToWeightedList(matrix){
  const n = matrix.length;
  const adjList = Array.from({length: n}, () => []);

  for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
      if(matrix[i][j] !== 0){
        adjList[i].push({node: j, weight: matrix[i][j]});
      }
    }
  }
  return adjList;
}
