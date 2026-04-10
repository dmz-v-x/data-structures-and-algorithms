// If a graph has `V` vertices, an adjacency matrix is:

// A 2D array of size `V × V`.

// Each cell `[i][j]` represents:

// - 1 (or true) → Edge exists
// - 0 (or false) → No edge exists

// Example:

// Vertices: A, B, C

// Matrix:

//   A  B  C
// A 0  1  0
// B 1  0  1
// C 0  1  0

// This means:
// - A connected to B
// - B connected to A and C
// - C connected to B

// How Do We Represent a Matrix in JavaScript?

// JavaScript does not have built-in matrices.

// We use a 2D array.

// Example of 3×3 matrix:


// [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0]
// ]

// Each inner array represents a row.

// 1. Add Vertex
// Step 1: Push Vertex to Vertices array
// Step 2: Iterate through matrix adding 0 column to each existing row
// Step 3: Creating a new row of size vertices.length and filling it with zero and pushing it to matrix

// Matrix always stays square

// // 2. Getting Vertex Index
// Since matrix Uses numeric Indices we must map vertex name to index

// If vertices = ['A', 'B', 'C']

// A → 0
// B → 1
// C → 2

// // 3. Adding an edge

// In undirected graph if A -- B exists then
// matrix[A][B] = 1
// matrix[B][A] = 1

// Step 1: Get the index of vertex v1 and v2
// Step 2: If vertex indexes v1 or v2 === -1 then vertex does not exists
// Step 3: this.matrix[i][j] = 1 and this.matrix[j][i] = 1

// // 4. Removing an Edge: Similar to adding an edge

// Step 1: Get the index of vertex v1 and v2
// Step 2: If vertex indexes v1 or v2 === -1 then vertex does not exists
// Step 3: this.matrix[i][j] = 0 and this.matrix[j][i] = 0

// // 5. Removing a Vertex

// Step 1: Get the index of vertex if -1 then vertex doesn't exists so return
// Step 2: Remove vertex using splice
// Step 3: Remove row using splice
// Step 4: Remove column from each row again using splice.

// // 6. Making a graph directed

// Step 1: Get the indexes of the vertices, if any one of them is -1 return;
// Step 2: Then just do this.matrix[i][j] = 1

// // 7. Making a graph weighted

// Step 1: Get the indexes of the vertices, if any one of them is -1 return;
// Step 2: Then just do this.matrix[i][j] = weight and this.matrix[j][i] = weight

// // 8. Check if edge exists

// Step 1: Get the indexes of the vertexes if any of them is -1 return false
// Step 2: check: return this.matrix[i][j] !== 0;

// // 9. Printing the Graph

// Step 1: Print Vertices
// Step2: Print Matrix

class Graph {
  constructor(){
    this.vertices = []; //stores actual vertex labels(list of vertices)
    this.matrix = []; // matrix stores edges relationship
  }

  // 1. Adding a Vertex

  addVertex(vertex){
    this.vertices.push(vertex);

    // Add a new column(0) to all existing rows
    for(let row of this.matrix){
      row.push(0);
    }

    const newRow = new Array(this.vertices.length).fill(0);
    this.matrix.push(newRow);
  }

  // 2. Getting Vertex Index

  getIndex(vertex){
    return this.vertices.indexOf(vertex);
  }

  // 3. Adding an Edges (Undirected Graph)

  addEdge(v1, v2){
    const i = this.getIndex(v1);
    const j = this.getIndex(v2);

    if(i === -1 || j === -1){
      console.log("Vertex not found");
      return;
    }

    this.matrix[i][j] = 1;
    this.matrix[j][i] = 1;
  }

  // 4. Removing an Edge

  removeEdge(v1, v2){
    const i = this.getIndex(v1);
    const j = this.getIndex(v2);

    if(i === -1 || j === -1) return;

    this.matrix[i][j] = 0;
    this.matrix[j][i] = 0;
  }

  // 5. Removing a Vertex

  removeVertex(vertex){
    const index = this.getIndex(vertex);
    if(index === -1) return;

    // Remove vertex
    this.vertices.splice(index, 1);

    // Remove row
    this.matrix.splice(index, 1);

    // Remove column
    for(let row of this.matrix){
      row.splice(index, 1);
    }
  }

  // 6. Adding and Edge (Directed Graph)

  addEdge(v1, v2){
    const i = this.getIndex(v1);
    const j = this.getIndex(v2);

    if(i === -1 || j === -1) return;

    this.matrix[i][j] = 1;
  }

  // 7. Adding an Edge (Weighted Graph)

  addEdge(v1, v2, weight = 1){
    const i = this.getIndex(v1);
    const j = this.getIndex(v2);

    if(i === -1 || j === -1) return;

    this.matrix[i][j] = weight;
    this.matrix[j][i] = weight; // remove for directed
  }

  // 8. Check if edge exists

  hasEdge(v1, v2){
    const i = this.getEdge(v1);
    const j = this.getEdge(v2);

    if(i === -1 || j === -1) return false;

    return this.matrix[i][j] !== 0;
  }

  // 9. Printing the Graph

  print(){
    console.log("Vertices:", this.vertices);
    console.log("Matrix:");
    console.table(this.matrix);
  }
  
}
