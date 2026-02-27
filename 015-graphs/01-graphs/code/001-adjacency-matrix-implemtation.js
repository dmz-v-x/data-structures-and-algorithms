class Graph {
  constructor(){
    this.vertices = [];
    this.matrix = [];
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
}
