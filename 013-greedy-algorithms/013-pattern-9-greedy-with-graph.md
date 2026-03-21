## Greedy + Graph Concepts — Minimum Spanning Tree (MST) and Beyond

### 1. Why Greedy in Graphs?

Graphs often involve:
- Connecting nodes  
- Minimizing cost  
- Avoiding cycles  

Many of these problems can be solved efficiently using **greedy algorithms**.

---

### 2. Where Greedy is Used in Graphs

The most important application:

- Minimum Spanning Tree (MST)

---

### 3. What is a Minimum Spanning Tree (MST)?

---

#### Definition

Given:
- A connected, weighted, undirected graph  

Goal:
- Connect all nodes  
- With minimum total edge weight  
- Without forming cycles  

---

#### Key Properties

- Includes all vertices  
- Has exactly (n - 1) edges  
- No cycles  
- Minimum total cost  

---

### 4. Why Greedy Works in MST

Because:

- Choosing the smallest edge at each step  
- Does not break optimal solution  

---

This satisfies:
- Greedy Choice Property  
- Optimal Substructure  

---

### 5. Two Main Greedy Algorithms for MST

---

### 6. Kruskal’s Algorithm (Edge-Based Greedy)

---

#### Core Idea

- Always pick the smallest edge  
- Avoid cycles  

---

#### Steps

1. Sort all edges by weight  
2. Initialize Disjoint Set (Union-Find)  
3. Traverse edges:
   - If edge does not form cycle → take it  
   - Else → skip  

---

#### Code (JavaScript)

    class DSU {
      constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i)
      }

      find(x) {
        if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
      }

      union(x, y) {
        let px = this.find(x)
        let py = this.find(y)

        if (px !== py) {
          this.parent[px] = py
          return true
        }
        return false
      }
    }

---

    function kruskal(n, edges) {
      edges.sort((a, b) => a[2] - b[2])

      let dsu = new DSU(n)
      let cost = 0

      for (let [u, v, w] of edges) {
        if (dsu.union(u, v)) {
          cost += w
        }
      }

      return cost
    }

---

#### Key Insight

- Pick smallest edge  
- Only if it does not form a cycle  

---

### 7. Prim’s Algorithm (Node-Based Greedy)

---

#### Core Idea

- Start from any node  
- Always pick smallest edge connecting to new node  

---

#### Steps

1. Start from node 0  
2. Use min heap  
3. Pick smallest edge  
4. Add new node  
5. Repeat  

---

#### Code (Conceptual)

    function prim(n, graph) {
      let visited = new Array(n).fill(false)
      let minHeap = [[0, 0]] // [weight, node]
      let cost = 0

      while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0])
        let [weight, node] = minHeap.shift()

        if (visited[node]) continue

        visited[node] = true
        cost += weight

        for (let [next, w] of graph[node]) {
          if (!visited[next]) {
            minHeap.push([w, next])
          }
        }
      }

      return cost
    }

---

#### Key Insight

- Grow tree step-by-step  
- Always pick smallest connecting edge  

---

### 8. Kruskal vs Prim

| Algorithm | Approach        | Data Structure |
|----------|----------------|---------------|
| Kruskal  | Edge-based     | Union-Find    |
| Prim     | Node-based     | Min Heap      |

---

### 9. When to Use Which?

---

#### Use Kruskal When

- Edges are given explicitly  
- Graph is sparse  

---

#### Use Prim When

- Graph is dense  
- Adjacency list available  

---

### 10. Greedy in Other Graph Problems

---

#### Dijkstra’s Algorithm

- Shortest path  
- Uses greedy + min heap  

---

#### Why Greedy Works

- Always pick closest node  
- Never revisit  

---

---

### 11. Common Signals

You’ll see greedy in graphs when:

- Minimize cost  
- Connect all nodes  
- Avoid cycles  
- Use smallest edge repeatedly  

---

### 12. Common Mistakes

---

#### Mistake 1: Ignoring cycles

Must avoid cycles in MST  

---

#### Mistake 2: Not sorting edges (Kruskal)

Breaks greedy logic  

---

#### Mistake 3: Not using heap in Prim

Leads to inefficiency  

---

### 13. Time Complexity

---

Kruskal:
- Sorting edges → O(E log E)  
- Union-Find → near O(1)  

---

Prim:
- Heap operations → O(E log V)  

---

### 14. Final Mental Model

Whenever you see:

- Graph + minimize cost  
- Connect nodes  
- Avoid cycles  

Think:

> “Greedy + MST (Kruskal / Prim)”

---

### 15. Final Summary

Greedy + Graph:

- Used in MST problems  
- Kruskal → sort edges + union-find  
- Prim → grow tree + min heap  
- Always pick smallest valid edge  

