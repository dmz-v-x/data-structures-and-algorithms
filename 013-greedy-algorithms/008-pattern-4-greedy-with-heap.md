## Greedy + Min/Max Heap 

### 1. Why Do We Need Heap in Greedy?

So far in greedy:
- We sorted once  
- Then made decisions  

But some problems are different:

- Choices keep changing dynamically  
- New elements come in while processing  
- We must repeatedly pick the best option  

---

This is where **Heap (Priority Queue)** comes in.

---

### 2. What is the Problem Here?

In many problems:
- You cannot decide everything upfront  
- You need to:
  - Add elements dynamically  
  - Remove best element repeatedly  

---

Sorting once is not enough.

You need a data structure that:
- Always gives best element quickly  

---

### 3. Heap to the Rescue

A Heap helps you:

- Get min or max element in O(1)  
- Insert/remove in O(log n)  

---

### 4. Types of Heap

---

#### Min Heap

- Smallest element on top  
- Used when you want minimum  

---

#### Max Heap

- Largest element on top  
- Used when you want maximum  

---

### 5. When to Use Greedy + Heap

Use this pattern when:

- You need to repeatedly pick best element  
- Data is dynamic (changing over time)  
- Decisions depend on current state  

---

### 6. Pattern

---

Step 1:
Process elements one by one  

---

Step 2:
Push elements into heap  

---

Step 3:
Pop best element when needed  

---

Step 4:
Make greedy decision  

---

### 7. Example 1 — Connect Ropes (Minimum Cost)

---

#### Problem

You are given ropes with lengths.

You can connect two ropes:
- Cost = sum of their lengths  

Goal:
- Minimize total cost  

---

### 8. Greedy Insight

Always connect:
- The two smallest ropes  

---

Why?
- Smaller sums reduce future costs  

---

### 9. Steps

1. Insert all ropes into min heap  
2. While more than one rope:
   - Remove two smallest  
   - Add their sum to cost  
   - Push result back  

---

### 10. JavaScript Implementation

    class MinHeap {
      constructor() {
        this.heap = []
      }

      push(val) {
        this.heap.push(val)
        this.bubbleUp()
      }

      bubbleUp() {
        let idx = this.heap.length - 1
        while (idx > 0) {
          let parent = Math.floor((idx - 1) / 2)
          if (this.heap[parent] <= this.heap[idx]) break
          ;[this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
          idx = parent
        }
      }

      pop() {
        if (this.heap.length === 1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
      }

      bubbleDown() {
        let idx = 0
        const length = this.heap.length

        while (true) {
          let left = 2 * idx + 1
          let right = 2 * idx + 2
          let smallest = idx

          if (left < length && this.heap[left] < this.heap[smallest]) {
            smallest = left
          }

          if (right < length && this.heap[right] < this.heap[smallest]) {
            smallest = right
          }

          if (smallest === idx) break

          ;[this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
          idx = smallest
        }
      }

      size() {
        return this.heap.length
      }
    }

---

### 11. Using Heap

    function minCostToConnectRopes(arr) {
      let heap = new MinHeap()

      for (let num of arr) {
        heap.push(num)
      }

      let cost = 0

      while (heap.size() > 1) {
        let first = heap.pop()
        let second = heap.pop()

        let sum = first + second
        cost += sum

        heap.push(sum)
      }

      return cost
    }

---

### 12. Example 2 — Task Scheduler

---

#### Problem

You are given tasks with frequencies.

You must:
- Schedule tasks  
- Maintain cooldown  

---

### 13. Greedy Insight

- Always pick task with highest frequency  

---

### 14. Use Max Heap

- Store frequencies  
- Always pick largest  

---

### 15. General Idea

1. Count frequencies  
2. Push into max heap  
3. Pick highest  
4. Reduce count  
5. Reinsert if needed  

---

### 16. Why Heap Works Here

Because:
- Best choice keeps changing  
- Sorting once is not enough  

---

### 17. Key Differences from Normal Greedy

---

Sorting + Greedy:
- Static data  
- One-time decision  

---

Heap + Greedy:
- Dynamic data  
- Continuous best selection  

---

### 18. Common Problems Using This Pattern

- Connect ropes  
- Task scheduler  
- Reorganize string  
- K largest elements  
- Median in stream  

---

### 19. Common Mistakes

---

#### Mistake 1: Using sorting instead of heap

Sorting every time → slow  

---

#### Mistake 2: Wrong heap type

Using min heap instead of max heap (or vice versa)  

---

#### Mistake 3: Not updating heap

Forgetting to push back updated values  

---

### 20. Time Complexity

- Insert → O(log n)  
- Remove → O(log n)  

Total:
- O(n log n)

---

### 21. Final Mental Model

Whenever you see:

- Repeated best choice  
- Dynamic input  
- Continuous updates  

Think:

> “I need a heap”

---

### 22. Final Summary

Greedy + Heap:

- Used when decisions are dynamic  
- Heap helps pick best element efficiently  
- Min heap → smallest  
- Max heap → largest  
