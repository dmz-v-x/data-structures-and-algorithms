## Types of Graphs

## 1. Classification Based on Edge Direction

This classification depends purely on whether edges have direction.

### 1.1 Directed Graph (Digraph)

A graph where edges have direction.

If there is an edge from A to B:

A → B

This means:
- A points to B
- B does not necessarily point to A

Edges are ordered pairs:
(A, B)

---

### 1.2 Undirected Graph (Bidirectional Graph)

A graph where edges have no direction.

A —— B

This means:
- A is connected to B
- B is connected to A

Edges are unordered pairs:
{A, B}

---

### Important Clarification

In standard graph theory:

A graph is either:
- Directed  
or  
- Undirected  

It does not mix both types of edges.

If a graph contains both directed and undirected edges, it is typically called a **Mixed Graph**, which is a special case and usually not considered in basic DSA discussions.

So your understanding is correct in basic data structures context.

Directed and Undirected classification is based entirely on edge direction.

---

## 2. Classification Based on Edge Weights

This classification depends on whether edges carry values.

### 2.1 Weighted Graph

Edges have weights (cost, distance, time, etc.)

Example:

A —(5)— B

The number 5 is the weight.

Used in:
- Shortest path algorithms
- Cost optimization problems
- Network routing

---

### 2.2 Unweighted Graph

Edges do not have weights.

A —— B

All connections are treated equally.

---

## 3. Can Graph Types Be Combined?

Yes.

Direction and Weight are two independent properties.

One property defines:
- Whether edges have direction.

The other defines:
- Whether edges have weights.

So combinations are completely valid.

Your understanding is correct.

A graph can be:

1. Directed + Weighted  
2. Directed + Unweighted  
3. Undirected + Weighted  
4. Undirected + Unweighted  

All four combinations are valid.

Example breakdown:

- Google Maps: Directed + Weighted (one-way roads with distance)
- Facebook friendship: Undirected + Unweighted
- Twitter follow: Directed + Unweighted
- Road network (two-way with distances): Undirected + Weighted

So yes, your statement is correct.

---

## 4. Complete Graph

A Complete Graph is a graph in which every vertex is connected to every other vertex.

If there are n vertices:

Each vertex connects to n−1 vertices.

In an undirected complete graph:

Number of edges = n(n−1)/2

In a directed complete graph:

Number of edges = n(n−1)

Complete graphs are always fully connected.

---

## 5. Disconnected Graph

A Disconnected Graph is a graph where:

Some vertices cannot be reached from others.

It consists of multiple separate components.

Each separate connected part is called a Connected Component.

Even though it has multiple components, mathematically it is still one graph.

---

## 6. Euler Graph

An Euler Graph is a graph that contains an Eulerian Cycle.

An Eulerian Cycle is a cycle that:

- Starts and ends at the same vertex
- Visits every edge exactly once

Condition (for undirected graph):

Every vertex must have even degree.

If only two vertices have odd degree, then it has an Euler Path (not a cycle).

Euler concepts focus on edges.

---

## 7. Hamiltonian Graph

A Hamiltonian Graph contains a Hamiltonian Cycle.

A Hamiltonian Cycle:

- Starts and ends at the same vertex
- Visits every vertex exactly once

Important difference:

Euler → Every edge once  
Hamiltonian → Every vertex once  

Hamiltonian problems are generally harder than Euler problems.

---

## 8. Pseudo Graph

A Pseudo Graph is a graph that may contain:

- Self-loops (edge from a vertex to itself)
- Multiple edges between the same pair of vertices

Example:

A → A (self-loop)

Two separate edges between A and B.

---

## 9. Null Graph

A Null Graph is a graph with:

- n vertices
- 0 edges

There are nodes, but no connections at all.

Every vertex has degree 0.

---

## 10. Cyclic Graph

A Cyclic Graph is a graph that contains at least one cycle.

Example:

A → B → C → A

---

## 11. Acyclic Graph

A graph that contains no cycles.

Examples:

- Trees (undirected acyclic connected graphs)
- DAG (Directed Acyclic Graph)

If it is:
- Directed and acyclic → DAG
- Undirected and acyclic and connected → Tree

---

## Final Conceptual Organization

Graphs can be classified along multiple independent dimensions:

1. Based on Direction:
   - Directed
   - Undirected

2. Based on Weight:
   - Weighted
   - Unweighted

3. Based on Connectivity:
   - Connected
   - Disconnected

4. Based on Structure:
   - Complete
   - Cyclic
   - Acyclic
   - Null
   - Pseudo

5. Based on Special Properties:
   - Eulerian
   - Hamiltonian

These classifications are not mutually exclusive.  
A graph can belong to multiple categories simultaneously.

For example:

A graph can be:
Directed + Weighted + Cyclic + Disconnected
