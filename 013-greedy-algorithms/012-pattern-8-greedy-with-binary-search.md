## Greedy + Binary Search — Optimization Over Answer Pattern

### 1. What is Greedy + Binary Search?

This pattern is used when:

- You need to **optimize an answer** (minimize or maximize something)  
- The answer is not directly obvious  
- You can **check if a given answer is valid**

---

So instead of computing the answer directly:

> You **guess the answer** using Binary Search  
> And **verify it using Greedy**

---

### 2. When Does This Pattern Apply?

Use this pattern when:

- Problem asks:
  - Minimize maximum  
  - Maximize minimum  
- You can define a **validity check function**  
- The answer space is **monotonic**

---

### 3. Core Idea

Two parts:

---

#### Binary Search

Search over possible answers  

---

#### Greedy Check

For a given answer:
- Can we achieve it?

---

### 4. What is Monotonic Property?

This is very important.

---

A function is monotonic if:

- Once it becomes true → stays true  
OR  
- Once it becomes false → stays false  

---

Example:

If a distance works:
- Larger distances may also work  

OR

If a distance fails:
- Smaller distances will also fail  

---

### 5. Pattern

---

Step 1:
Define search space (low → high)

---

Step 2:
While low <= high:

- mid = possible answer  

---

Step 3:
Check if mid is valid using greedy  

---

Step 4:
- If valid → try better answer  
- Else → move search  

---

### 6. Example 1 — Aggressive Cows (Very Important)

---

#### Problem

You are given stall positions  
Place k cows such that minimum distance between cows is maximized  

---

### 7. Goal

Maximize minimum distance  

---

### 8. Greedy Insight

If distance = d:

- Place first cow at first stall  
- Place next cow at next position ≥ d  

---

### 9. Check Function

Can we place k cows with at least distance d?

---

### 10. Code

    function canPlace(stalls, k, dist) {
      let count = 1
      let last = stalls[0]

      for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - last >= dist) {
          count++
          last = stalls[i]
        }
      }

      return count >= k
    }

---

### 11. Binary Search

    function aggressiveCows(stalls, k) {
      stalls.sort((a, b) => a - b)

      let low = 1
      let high = stalls[stalls.length - 1] - stalls[0]
      let ans = 0

      while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (canPlace(stalls, k, mid)) {
          ans = mid
          low = mid + 1
        } else {
          high = mid - 1
        }
      }

      return ans
    }

---

### 12. Key Insight

- Binary search finds answer  
- Greedy checks feasibility  

---

### 13. Example 2 — Allocate Books

---

#### Problem

Allocate books to students such that maximum pages assigned is minimized  

---

### 14. Goal

Minimize maximum pages  

---

### 15. Greedy Check

Given maxPages:
- Assign books sequentially  
- If exceeding → assign to next student  

---

### 16. Code

    function canAllocate(arr, students, maxPages) {
      let count = 1
      let sum = 0

      for (let pages of arr) {
        if (sum + pages > maxPages) {
          count++
          sum = pages
        } else {
          sum += pages
        }
      }

      return count <= students
    }

---

### 17. Key Insight

- Greedy ensures minimal partitions  
- Binary search finds optimal limit  

---

### 18. Common Signals

You’ll see this pattern when:

- “Minimize maximum”  
- “Maximize minimum”  
- Answer lies in a range  
- Feasibility check is possible  

---

### 19. Common Mistakes

---

#### Mistake 1: Not identifying search space

Always define low and high correctly  

---

#### Mistake 2: Wrong greedy check

Check must be correct and efficient  

---

#### Mistake 3: Not using monotonic property

Binary search fails without monotonicity  

---

### 20. Time Complexity

- Binary search → O(log N)  
- Greedy check → O(N)  

Total → O(N log N)

---

### 21. Final Mental Model

Whenever you see:

- Optimization problem  
- Answer is not directly computable  
- You can validate an answer  

Think:

> “Binary search the answer + Greedy check”

---

### 22. Final Summary

Greedy + Binary Search:

- Binary search guesses answer  
- Greedy verifies correctness  
- Works on monotonic problems  
- Used for optimization problems  
