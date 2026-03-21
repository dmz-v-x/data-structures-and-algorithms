## Greedy + Prefix Thinking 

### 1. What is Greedy + Prefix Thinking?

This pattern combines:

- Greedy decision making  
- Prefix accumulation (running total)

---

Instead of making decisions based on:
- Individual elements  

You make decisions based on:
- Accumulated effect up to that point  

---

### 2. When Does This Pattern Apply?

Use this pattern when:

- You move from left → right  
- You maintain a running value (prefix)  
- Decisions depend on cumulative effect  

---

### 3. Core Idea

At every step:

- Maintain a running value (prefix sum / reach / fuel)  
- Use that to decide whether to continue or reset  

---

### 4. What is Prefix?

Prefix means:

- Accumulating values as you move forward  

---

Example:

Array: [1, -2, 3, 4]

Prefix sum:
- 1  
- 1 + (-2) = -1  
- -1 + 3 = 2  
- 2 + 4 = 6  

---

### 5. Why Combine Prefix with Greedy?

Because:

- Local decisions depend on past accumulation  
- Not just current element  

---

Greedy decision becomes:

> “Based on what I’ve accumulated so far, what should I do next?”

---

### 6. Pattern

---

Step 1:
Initialize a running variable  

---

Step 2:
Traverse the array  

---

Step 3:
Update prefix value  

---

Step 4:
Make greedy decision:
- Continue  
- Reset  
- Update answer  

---

### 7. Example 1 — Jump Game

---

#### Problem

Given array where each element represents max jump length  
Can you reach last index?

---

### 8. Greedy + Prefix Insight

- Maintain maximum reachable index  

---

### 9. Steps

1. Initialize maxReach = 0  
2. Traverse array  
3. At index i:
   - If i > maxReach → cannot proceed  
   - Update maxReach = max(maxReach, i + nums[i])  

---

### 10. Code

    function canJump(nums) {
      let maxReach = 0

      for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false

        maxReach = Math.max(maxReach, i + nums[i])
      }

      return true
    }

---

### 11. Key Insight

- maxReach is a prefix-based value  
- Decision depends on accumulated reach  

---

### 12. Example 2 — Gas Station (VERY IMPORTANT)

---

#### Problem

You have gas and cost arrays  
Find starting index to complete circuit  

---

### 13. Greedy + Prefix Insight

- Track current fuel  
- If fuel becomes negative → reset  

---

### 14. Steps

1. total = 0  
2. current = 0  
3. start = 0  

Traverse:

- total += gas[i] - cost[i]  
- current += gas[i] - cost[i]  

If current < 0:
- Reset current = 0  
- start = i + 1  

---

### 15. Code

    function canCompleteCircuit(gas, cost) {
      let total = 0
      let current = 0
      let start = 0

      for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i]

        total += diff
        current += diff

        if (current < 0) {
          current = 0
          start = i + 1
        }
      }

      return total >= 0 ? start : -1
    }

---

### 16. Key Insight

- current → prefix fuel  
- If negative → cannot start from previous stations  

---

### 17. Why Reset Works

If prefix becomes negative:

- Any earlier start would also fail  
- So we safely discard previous choices  

---

### 18. Example 3 — Maximum Subarray (Related Idea)

---

#### Problem

Find maximum sum subarray  

---

### Insight

- Maintain running sum  
- Reset if negative  

---

This is Kadane’s Algorithm  
(Not pure greedy, but similar thinking)

---

### 19. Pattern Summary

---

Initialize:
- prefix variable  

---

Loop:
- Update prefix  
- Make decision:
  - Continue  
  - Reset  
  - Update answer  

---

### 20. Common Signals

You’ll see this pattern when:

- Running sum matters  
- You move linearly  
- Resetting is allowed  
- Past accumulation affects future  

---

### 21. Common Mistakes

---

#### Mistake 1: Ignoring prefix

Trying to decide using only current element  

---

#### Mistake 2: Resetting incorrectly

Reset only when prefix becomes invalid  

---

#### Mistake 3: Not tracking global result

Sometimes prefix is not final answer  

---

### 22. Time Complexity

- Single pass → O(n)  

---

### 23. Final Mental Model

Whenever you see:

- Running total / fuel / reach  
- Linear traversal  
- Reset condition  

Think:

> “Maintain prefix and decide greedily”

---

### 24. Final Summary

Greedy + Prefix Thinking:

- Maintain running value  
- Use it to make decisions  
- Reset when condition fails  
- Continue forward  

