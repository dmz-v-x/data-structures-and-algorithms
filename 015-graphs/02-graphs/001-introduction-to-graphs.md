## Introduction to Graphs

### 1. Introduction of Graph

When we talk about data structures, most of them store data in a linear or hierarchical way.

Array → linear  
Linked List → linear  
Stack / Queue → linear  
Tree → hierarchical  

But what if relationships are not linear and not strictly hierarchical?

For example:
- A user can follow multiple users.
- A city can connect to many cities.
- A webpage can link to multiple webpages.

This is where **Graph** comes in.

A Graph is a non-linear data structure that represents relationships between entities.

It consists of:

1. Vertices (also called Nodes)
2. Edges (connections between nodes)

If we define it mathematically:

G = (V, E)

Where:
- V = Set of vertices
- E = Set of edges

Example:

A -- B  
|  
C  

Here:
Vertices: A, B, C  
Edges: (A,B), (A,C)

Think of graph as:
"Objects + Relationships between them"

Real life analogy:
- People in a social network
- Cities connected by roads
- Computers connected in a network


---

### 2. Graph Use Cases

Graphs are extremely powerful because most real-world problems are about relationships.

Let’s explore practical use cases.

#### 2.1 Social Networks

Example:
Instagram, LinkedIn, Facebook

- Users → Nodes
- Follow / Friend relation → Edges

Used for:
- Mutual connections
- Friend suggestions
- Detecting communities
- Influencer ranking

---

#### 2.2 Maps & Navigation

Example:
Google Maps

- Cities / Locations → Nodes
- Roads → Edges
- Distance → Edge Weight

Used for:
- Shortest path (Dijkstra)
- Route optimization
- Traffic analysis

---

#### 2.3 Computer Networks

- Devices → Nodes
- Cable/WiFi connections → Edges

Used for:
- Packet routing
- Network topology design
- Failure detection

---

#### 2.4 Web Crawling

Search engines like Google:

- Webpages → Nodes
- Hyperlinks → Edges

Used for:
- PageRank algorithm
- Crawling internet structure
- Ranking websites

---

#### 2.5 Dependency Management

Example:
- Package managers (npm)
- Build systems

- Modules → Nodes
- Dependency → Edge

Used for:
- Detect circular dependency
- Topological sorting
- Build ordering

---

#### 2.6 Recommendation Systems

- Users → Nodes
- Products → Nodes
- Interactions → Edges

Used for:
- "People who bought this also bought..."
- Collaborative filtering


Graphs are everywhere. If your problem has relationships, it probably involves a graph.


---

### 3. Types of Graphs

Graphs can be categorized in multiple ways.

#### 3.1 Undirected Graph

Edges do NOT have direction.

A — B means:
A is connected to B  
B is connected to A  

Example:
Friendship network

---

#### 3.2 Directed Graph (Digraph)

Edges have direction.

A → B means:
A points to B  
But B does NOT necessarily point to A  

Example:
Twitter follow system

---

#### 3.3 Weighted Graph

Edges have weights (cost, distance, time, etc.)

A --5-- B

Used in:
- Shortest path problems
- Network cost calculation

---

#### 3.4 Unweighted Graph

Edges have no weight.

Used in:
- Basic connectivity
- BFS traversal problems

---

#### 3.5 Cyclic Graph

Contains at least one cycle.

A → B → C → A

Used in:
- Network loops
- Graph theory problems

---

#### 3.6 Acyclic Graph

No cycles.

Example:
Tree  
DAG (Directed Acyclic Graph)

Used in:
- Topological sorting
- Scheduling
- Build systems

---

#### 3.7 Connected Graph

All nodes are reachable from any node.

---

#### 3.8 Disconnected Graph

Some nodes are isolated or form separate components.

---

#### 3.9 Complete Graph

Every node is connected to every other node.

If there are N nodes:
Edges = N(N-1)/2 (undirected)
