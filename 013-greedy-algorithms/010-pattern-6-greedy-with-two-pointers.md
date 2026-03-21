## Greedy + Two Pointers — Pairing and Boundary Decision Pattern

### 1. What is Greedy + Two Pointers?

This pattern combines:

- Greedy decision making  
- Two pointers (usually left and right)

---

Instead of scanning with one pointer:
- You use two pointers to make optimal decisions  

---

### 2. When Does This Pattern Apply?

Use this when:

- You need to pair or group elements  
- You are working with sorted data  
- Decisions involve two ends (smallest + largest)  

---

### 3. Core Idea

- Sort the array  
- Use two pointers:
  - Left → smallest element  
  - Right → largest element  

At each step:
- Make the best greedy decision using both ends  

---

### 4. Why Two Pointers?

Because:

- One pointer alone cannot capture pairing decisions  
- You need to compare extremes to optimize  

---

### 5. Pattern

---

Step 1:
Sort the array  

---

Step 2:
Initialize:

- left = 0  
- right = n - 1  

---

Step 3:
While left <= right:

- Make greedy decision  
- Move pointers accordingly  

---

### 6. Example 1 — Assign Cookies

---

#### Problem

Each child has greed factor  
Each cookie has size  

Goal:
- Maximize number of satisfied children  

---

### 7. Greedy Insight

- Give smallest cookie that satisfies smallest greed  

---

### 8. Steps

1. Sort greed array  
2. Sort cookies  
3. Use two pointers  

---

### 9. Code

    function findContentChildren(g, s) {
      g.sort((a, b) => a - b)
      s.sort((a, b) => a - b)

      let i = 0
      let j = 0

      while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
          i++
        }
        j++
      }

      return i
    }

---

### 10. Key Insight

- Match smallest greed with smallest valid cookie  
- Avoid wasting large cookies  

---

### 11. Example 2 — Boats to Save People

---

#### Problem

Each person has weight  
Boat limit given  

Goal:
- Minimize number of boats  

---

### 12. Greedy Insight

- Pair lightest + heaviest if possible  

---

### 13. Steps

1. Sort weights  
2. left = 0, right = n - 1  
3. If sum ≤ limit:
   - move both pointers  
4. Else:
   - move right only  

---

### 14. Code

    function numRescueBoats(people, limit) {
      people.sort((a, b) => a - b)

      let left = 0
      let right = people.length - 1
      let boats = 0

      while (left <= right) {
        if (people[left] + people[right] <= limit) {
          left++
        }
        right--
        boats++
      }

      return boats
    }

---

### 15. Key Insight

- Always try to pair smallest with largest  
- This minimizes resource usage  

---

### 16. Example 3 — Two Sum (Sorted Variant)

---

#### Problem

Find two numbers that sum to target  

---

### 17. Greedy Insight

- Move pointers based on sum  

---

### 18. Code

    function twoSumSorted(arr, target) {
      let left = 0
      let right = arr.length - 1

      while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === target) return [left, right]
        else if (sum < target) left++
        else right--
      }

      return []
    }

---

### 19. Key Insight

- Sorted array allows directional movement  

---

### 20. Common Signals

You’ll see this pattern when:

- Pairing elements is required  
- You need to minimize/maximize groups  
- Extremes (smallest/largest) matter  

---

### 21. Common Mistakes

---

#### Mistake 1: Not sorting

Breaks entire logic  

---

#### Mistake 2: Wrong pointer movement

Moving wrong pointer leads to incorrect result  

---

#### Mistake 3: Ignoring greedy condition

Always validate condition before moving pointers  

---

### 22. Time Complexity

- Sorting → O(n log n)  
- Two pointers → O(n)  

Total → O(n log n)

---

### 23. Final Mental Model

Whenever you see:

- Pairing problem  
- Minimize/maximize groups  
- Smallest + largest interaction  

Think:

> “Sort + Two Pointers + Greedy”

---

### 24. Final Summary

Greedy + Two Pointers:

- Sort the array  
- Use two pointers  
- Make optimal decision using both ends  
- Move pointers strategically  
