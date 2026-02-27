## Graph Data Structure

## 1. What is a Graph?

A Graph is a data structure used to represent relationships between different entities.

In simple words:

A graph is a collection of nodes connected by edges.

If arrays store data linearly  
If trees store data hierarchically  

Then graphs store data in the form of connections.

---

## 2. Why Do We Need Graphs?

Many real-world systems are not linear and not strictly hierarchical.

Examples:

- Friends connected to friends  
- Cities connected by roads  
- Web pages connected by links  
- Computers connected in a network  
- Airline routes between airports  

These systems contain complex relationships. Trees cannot represent them properly because trees do not allow cycles and multiple arbitrary connections.

Graphs are needed to:

- Represent relationships
- Find shortest paths
- Detect cycles
- Model networks
- Optimize routes
- Analyze connectivity

---

## 3. Core Components of a Graph

A graph has two fundamental components:

Graph = Vertices (Nodes) + Edges

---

## 4. Nodes (Vertices)

A Node is a single element in a graph. It represents an entity.

Examples:

- A person in a social network
- A city in a map
- A computer in a network
- A webpage on the internet

Node and Vertex mean the same thing.

Node = Vertex  
Plural: Vertices

---

## 5. Edges

An Edge is a connection between two vertices.

If nodes represent objects, edges represent relationships.

Example:

If A and B are friends:

A ---- B

The line between them is an edge.

---

## 6. Types of Graphs

### 6.1 Undirected Graph

In an undirected graph, connections are mutual.

A ---- B

This means:
A is connected to B  
B is connected to A  

Example: Friendship network.

---

### 6.2 Directed Graph (Digraph)

In a directed graph, edges have direction.

A → B

This means:
A points to B  
But B may not point to A  

Example: Follow system in social media.

---

### 6.3 Weighted Graph

In a weighted graph, edges carry a value (weight).

Example:

Delhi —(200 km)— Jaipur

The value 200 is called weight.

Used in:

- Shortest path problems
- Navigation systems
- Network cost optimization

---

## 7. Degree of a Graph

### 7.1 Degree of a Vertex (Undirected Graph)

The degree of a vertex is the number of edges connected to it.

Example:

    B
    |
A -- C -- D

Degree of C = 3  
Degree of A = 1  

---

### 7.2 In Directed Graphs

We define:

- In-degree: Number of incoming edges
- Out-degree: Number of outgoing edges

Example:

A → B → C

For B:

In-degree = 1  
Out-degree = 1  

---

## 8. Important Graph Terminologies

### 8.1 Vertex

An entity in the graph.

### 8.2 Edge

Connection between vertices.

### 8.3 Adjacent Vertices

Two vertices connected by an edge.

### 8.4 Path

A sequence of vertices connected by edges.

Example:

A → B → C

### 8.5 Cycle

A path that starts and ends at the same vertex.

Example:

A → B → C → A

### 8.6 Connected Graph

Every vertex is reachable from every other vertex.

### 8.7 Disconnected Graph

Some vertices are not reachable from others.

### 8.8 Complete Graph

Every vertex is connected to every other vertex.

### 8.9 Sparse Graph

Graph with relatively few edges.

### 8.10 Dense Graph

Graph with a large number of edges.

---

## 9. Applications of Graph

### 9.1 Social Networks

People are nodes.  
Friendships are edges.

Used in:

- Friend suggestions
- Mutual connections
- Community detection
- Recommendation systems

---

### 9.2 Maps and Navigation

Cities are nodes.  
Roads are edges.

Used in:

- Finding shortest route
- Traffic optimization

---

### 9.3 Internet

Web pages are nodes.  
Hyperlinks are edges.

Used in:

- Search engine ranking algorithms

---

### 9.4 Computer Networks

Computers are nodes.  
Cables or connections are edges.

Used in:

- Routing algorithms
- Network optimization

---

### 9.5 Dependency Systems

Used in:

- Build systems
- Course prerequisites
- Task scheduling

---

## 10. Mathematical Representation

A graph is mathematically defined as:

G = (V, E)

Where:

V = Set of vertices  
E = Set of edges  

Example:

V = {A, B, C}  
E = {(A,B), (B,C)}

---

## 11. Advanced Concepts (Preview)

After mastering fundamentals, advanced topics include:

- Graph Traversal (BFS, DFS)
- Shortest Path Algorithms (Dijkstra, Bellman-Ford)
- Minimum Spanning Tree (Prim, Kruskal)
- Topological Sorting
- Strongly Connected Components
- Bipartite Graphs
- Union-Find
- Graph Coloring
- Network Flow Algorithms

---

## 12. Final Summary

- A graph stores data as nodes and edges.
- Node and Vertex mean the same thing.
- Edge represents relationship.
- Degree represents number of connections.
- Directed graphs have in-degree and out-degree.
- Graphs model real-world interconnected systems.

Graphs are one of the most powerful data structures because they can represent almost any complex relationship in the real world.
