## Introduction to Greedy Algorithms

### 1. What is a Greedy Algorithm?

Let’s start from absolute zero.

A Greedy Algorithm is a way of solving problems where:

- At every step, you make the best possible choice **right now**
- You do not worry about future consequences
- You never go back and change your past decisions

Simple definition:

A Greedy Algorithm:
- Picks the best choice at the current step
- Never revisits or modifies previous decisions

---

### 2. Intuition Behind Greedy

Before coding, understanding intuition is critical.

Think of greedy as:

“You always take what looks best at the moment.”

---

Example:

You are picking items from a list one by one.

At each step:
- You choose the most beneficial option available
- You move forward without reconsidering

---

### 3. Local Optimum vs Global Optimum

This is the most important idea in greedy algorithms.

- Local Optimum = Best choice at the current step  
- Global Optimum = Best overall solution  

Greedy assumes:

If you keep choosing the best option at every step,  
you will end up with the best overall result.

---

### 4. Key Principle

Local optimum → Global optimum

This is the foundation of greedy algorithms.

---

### 5. Why “Never Reconsider” is Important

In greedy:

- Once a decision is made, it is final
- No backtracking
- No re-evaluation
- No revisiting

This makes greedy:
- Very fast
- Simple to implement

But also:
- Risky if the choice is wrong

---

### 6. Comparison with Other Approaches

Greedy is different from other problem-solving methods:

Greedy:
- Picks best option now
- Does not look back

Dynamic Programming:
- Considers multiple possibilities
- Stores results

Backtracking:
- Explores all paths
- Revisits decisions

---

### 7. When Greedy Works

Greedy works only when certain conditions are satisfied.

---

Condition 1: Greedy Choice Property

Making the best local choice always leads to the best global solution.

---

Condition 2: Optimal Substructure

The problem can be broken into smaller parts, and solving those parts helps build the final solution.

---

### 8. When Greedy Fails

Greedy does not always give the correct answer.

It fails when:
- A locally optimal choice leads to a poor global result

---

Example:

Coins = [1, 3, 4]  
Target = 6  

Greedy approach:
- Pick 4 → remaining 2  
- Pick 1 → remaining 1  
- Pick 1 → total 3 coins  

Optimal solution:
- 3 + 3 = 2 coins  

Greedy fails because the local best choice was not globally optimal.

---

### 9. How to Identify a Greedy Problem

Ask these questions:

- Is the problem asking to maximize or minimize something?
- Can I sort the input to simplify decisions?
- Can I make decisions step-by-step?
- Do I ever need to revisit a decision?

If decisions must be revisited → greedy is not suitable.

---

### 10. General Greedy Approach

Step-by-step process:

1. Understand the goal  
2. Decide what “best choice” means  
3. Sort data if needed  
4. Iterate and pick the best option  
5. Never revisit past decisions  

---

### 11. Basic JavaScript Pattern

    arr.sort((a, b) => {
      // define greedy order
    })

    for (let i = 0; i < arr.length; i++) {
      if (canTake(arr[i])) {
        // take the element
      }
    }

---

### 12. Common Greedy Strategies

Different problems use different greedy ideas:

- Pick smallest first (interval problems)
- Pick largest first (resource allocation)
- Sort by ratio (knapsack)
- Use heap for dynamic choices

---

### 13. Deep Insight (Advanced Thinking)

Greedy is not just intuition.

To truly master greedy:
- You must understand why it works
- You must recognize patterns
- You must know when it fails

Experts rely on:
- Pattern recognition
- Logical reasoning and proof

---

### 14. Greedy vs Brute Force

Brute Force:
- Tries all possibilities
- Always correct
- Slow

Greedy:
- Makes quick decisions
- Fast
- May fail if assumptions are wrong

---

### 15. Final Summary

A Greedy Algorithm:

- Makes the best choice at each step
- Never revisits decisions
- Assumes local optimum leads to global optimum

Works when:
- Greedy choice property exists
- Optimal substructure exists

Fails when:
- Local decisions harm the overall solution

