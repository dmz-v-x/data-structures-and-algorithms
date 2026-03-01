## Graph Terminologies

### 1. Vertex (Node)

A **vertex** (or node) represents an entity in a graph.

Examples:
- In a social network → a user
- In maps → a city
- In web graph → a webpage

Notation:
- If graph is G = (V, E)
- V = set of vertices

If V = {A, B, C}, then the graph has 3 vertices.

There is no restriction that vertices must form a circular structure.  
A graph can be completely open, disconnected, or partially connected.

---

### 2. Edge

An **edge** represents a relationship between two vertices.

Types:
- Undirected edge: A — B
- Directed edge: A → B

If E = {(A,B), (B,C)}, then those are the edges.

Edges can:
- Have direction
- Have weight
- Be unweighted

---

### 3. Path

A **path** is a sequence of vertices where each adjacent pair is connected by an edge.

Example:
A → B → C → D

This is a path from A to D.

Formal definition:
A path of length k has k edges.

Example:
A → B → C  
Length = 2 (because 2 edges)

---

### 4. Can a Node Appear Twice in a Path?

This depends on the type of path.

Simple Path:
A path in which no vertex appears more than once.

Why avoid repetition?
Because if a vertex repeats, it forms a cycle.

Example:
A → B → C → A

Here A appears twice.  
This is not a simple path. It forms a cycle.

In most shortest path algorithms (like BFS for unweighted graphs), we avoid revisiting nodes to prevent infinite loops.

---

### 5. Cycle in Graph

A **cycle** is a path that:
- Starts and ends at the same vertex
- Contains at least one edge

Example:
A → B → C → A

Important:
A graph does NOT need to be circular to contain a cycle.

A graph is just a structure.  
It may:
- Have cycles
- Have no cycles
- Be partially cyclic

---

### 6. Open Structure vs Circular Structure

Graphs are not required to be circular.

Possible structures:
- Linear chain
- Tree-like
- Fully connected
- Disconnected
- Cyclic
- Acyclic

So yes, a graph can absolutely be an open structure.

---

### 7. Degree of a Vertex

The **degree** of a vertex is the number of edges connected to it.

#### 7.1 In Undirected Graph

Degree(v) = number of edges incident to v

Example:
If A connects to B and C

A — B  
|  
C  

Degree(A) = 2

---

#### 7.2 In Directed Graph

We have two types:

Indegree(v):
Number of incoming edges.

Outdegree(v):
Number of outgoing edges.

Example:
A → B  
C → B  

Indegree(B) = 2  
Outdegree(B) = 0  

---

### 8. Total Degree of a Graph

For Undirected Graph:

Sum of all vertex degrees = 2 × Number of edges

Why?

Because each edge contributes to the degree of two vertices.

Example:
If edges = 3  
Total degree = 6

This is called the **Handshaking Lemma**.

For Directed Graph:

- Sum of all indegrees = Number of edges
- Sum of all outdegrees = Number of edges
- Total degree = 2 × Number of edges

---

### 9. Edge Weights

Edges can have weights.

A —5— B  

Weight can represent:
- Distance
- Time
- Cost
- Capacity

If weights are not given, we assume:
Each edge has unit weight (weight = 1)

This assumption is important in:
- BFS (shortest path in unweighted graph)
- Basic traversal problems

---

### 10. Adjacent Vertices

Two vertices are adjacent if there is an edge between them.

If A — B  
Then A and B are neighbors.

---

### 11. Adjacent Edge

An edge is adjacent to a vertex if it is connected to that vertex.

---

### 12. Connected Graph

A graph is connected if:
Every vertex is reachable from every other vertex.

If some vertices are isolated:
It is a disconnected graph.

---

### 13. Connected Component

In a disconnected graph:
Each separate connected part is called a connected component.

---

### 14. Strongly Connected Graph (Directed)

In directed graphs:
If every vertex can reach every other vertex following direction,
Then it is strongly connected.

---

### 15. Weakly Connected Graph

If ignoring directions makes the graph connected,
But directionally it is not fully reachable,
It is weakly connected.

---

### 16. Subgraph

A graph formed from:
- A subset of vertices
- A subset of edges

---

### 17. Self Loop

An edge from a vertex to itself.

A → A

In undirected graph:
Degree increases by 2.

In directed graph:
Indegree +1 and Outdegree +1.

---

### 18. Parallel Edges

Multiple edges between the same pair of vertices.

Allowed in:
- Multigraph

Not allowed in:
- Simple graph

---

### 19. Simple Graph

A graph with:
- No self loops
- No parallel edges

---

### 20. Complete Graph

Every pair of vertices has an edge.

For n vertices (undirected):

Edges = n(n-1)/2

---

### 21. Bipartite Graph

Vertices can be divided into two sets:
Such that no edge connects vertices of the same set.

Used in:
- Matching problems
- Scheduling
- Graph coloring

---

### 22. Directed Acyclic Graph (DAG)

A directed graph with no cycles.

Very important in:
- Topological sorting
- Task scheduling
- Dependency resolution

---

### 23. Bridge (Cut Edge)

An edge whose removal increases number of connected components.

---

### 24. Articulation Point (Cut Vertex)

A vertex whose removal increases number of connected components.

---

### 25. Density of Graph

Density = Actual edges / Maximum possible edges

Shows how sparse or dense the graph is.
