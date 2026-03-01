## What are Connected Components

### 1. Introduction: Why Connected Components Matter

In graph problems, one of the most fundamental ideas is:

“Is everything connected?”

But in reality, graphs are not always fully connected.

A graph:
- May be fully connected
- May be partially connected
- May be completely disconnected
- May consist of multiple separate pieces

Each separate piece is called a **Connected Component**.

Understanding connected components is extremely important because:
- Many graph problems depend on connectivity.
- Traversal must handle disconnected graphs.
- Algorithms like DFS, BFS, Union-Find rely on this concept.

This blog will take you from absolute zero to advanced understanding.

---

### 2. What Is a Connected Component?

Let’s start simple.

A **Connected Component** in an undirected graph is:

A group of vertices such that:
- Every vertex is reachable from every other vertex inside that group.
- No vertex in that group is connected to vertices outside the group.

In simple words:

A connected component is one “separate island” inside a graph.

---

### 3. A Graph Can Have Multiple Pieces

Important concept:

A graph does NOT need to be fully connected to be valid.

Example:

Component 1:
1 — 2 — 3  

Component 2:
4 — 5  

Component 3:
6  

This is still one graph.

It just has:
3 connected components.

Think of it like:
- Separate friend groups in a social network.
- Separate networks of computers.
- Separate clusters in a map.

Graph = Entire structure  
Connected component = One connected piece

---

### 4. Why Normal Traversal Is Not Enough

Suppose we run DFS from node 1.

We will only reach:
1, 2, 3

We will NOT reach:
4, 5, 6

Why?

Because they belong to different components.

So if we just start traversal from a single node,  
we might miss other components.

That is why we use a visited array and loop through all nodes.

---

### 5. The Core Idea to Find Connected Components

Step-by-step logic:

1. Create a visited array of size (n + 1)  
   Initialize all values to false (or 0)

2. Loop from node 1 to n

3. If visited[i] == false:
   - Start DFS or BFS from node i
   - Mark all reachable nodes as visited
   - That entire traversal is ONE connected component

4. Continue until loop ends

Each time we start a new traversal,
we discovered a new connected component.

---

### 6. Why We Use Visited Array

Without visited:

- We might revisit nodes infinitely (in cyclic graphs).
- We cannot avoid duplicate traversal.
- We cannot count components properly.

The visited array ensures:

- Each node is processed exactly once.
- We don’t re-traverse same component.
- We correctly identify new components.

---

### 7. Example Walkthrough

Graph:

1 — 2  
3 — 4  
5  

Nodes = 5

visited = [0, 0, 0, 0, 0, 0]  
(assuming 1-based indexing)

Loop:

i = 1  
visited[1] = 0 → Start DFS  
Marks 1 and 2 as visited  

Component count = 1  

i = 2  
Already visited → skip  

i = 3  
Not visited → Start DFS  
Marks 3 and 4  

Component count = 2  

i = 4  
Visited → skip  

i = 5  
Not visited → Start DFS  
Marks 5  

Component count = 3  

Final answer:
3 connected components

---

### 8. DFS Implementation (JavaScript)

Assume adjacency list representation.

    function dfs(node, adj, visited) {
        visited[node] = true;

        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, adj, visited);
            }
        }
    }

Main function:

    function countComponents(n, adj) {
        let visited = new Array(n + 1).fill(false);
        let count = 0;

        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i, adj, visited);
            }
        }

        return count;
    }

Time Complexity:
O(V + E)

Why?
Each node visited once.
Each edge processed once.

---

### 9. BFS Approach

Instead of DFS, we can use BFS.

    function bfs(start, adj, visited) {
        let queue = [];
        queue.push(start);
        visited[start] = true;

        while (queue.length > 0) {
            let node = queue.shift();

            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

Logic remains identical:
If visited[i] is false → start BFS → increment component count.

---

### 10. Connected Components in Directed Graph

Important distinction:

In directed graphs, we have two types:

1. Weakly Connected Components  
   If we ignore directions and graph becomes connected.

2. Strongly Connected Components (SCC)  
   Every vertex is reachable from every other vertex following direction.

Strongly connected components require advanced algorithms:
- Kosaraju’s Algorithm
- Tarjan’s Algorithm

---

### 11. Advanced Concept: Union-Find (Disjoint Set)

Another powerful way to find connected components is:

Disjoint Set Union (DSU)

Idea:
- Initially every node is its own component.
- For every edge (u, v):
  union(u, v)

Finally:
Number of unique parents = number of connected components.

Time Complexity:
Almost O(1) per operation (with path compression).

Used in:
- Kruskal’s algorithm
- Dynamic connectivity problems
- Network merging problems

---

### 12. Applications of Connected Components

Connected components are used in:

- Network clustering
- Social community detection
- Image processing (blob detection)
- Counting islands in a grid
- Malware spread detection
- Graph coloring problems

Classic Problem:
Number of Islands (grid as graph)

---

### 13. Grid as Graph (Important Pattern)

In many DSA problems:

Grid cells are treated as nodes.
Connections exist if adjacent cells match condition.

Then:
Use DFS/BFS
Count connected components.

This is extremely common in interviews.

---

### 14. Common Mistakes

1. Forgetting visited array
2. Not looping through all nodes
3. Starting traversal from only one node
4. Not handling 1-based vs 0-based indexing
5. Forgetting to initialize adjacency list properly

---

### 15. Complexity Analysis

Using DFS or BFS:

Time Complexity:
O(V + E)

Space Complexity:
O(V) for visited
O(V) recursion stack (DFS worst case)

Using DSU:
Nearly O(V + E)
