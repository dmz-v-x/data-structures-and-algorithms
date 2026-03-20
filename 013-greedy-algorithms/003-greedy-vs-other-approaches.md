## Greedy vs Other Approaches 

### 1. Why This Comparison Matters

In DSA, many problems can be solved using multiple approaches:

- Greedy  
- Dynamic Programming (DP)  
- Backtracking  

Choosing the **correct approach** is the real skill.

If you choose:
- Greedy when it doesn’t work → wrong answer  
- DP when greedy works → unnecessary complexity  

So understanding the difference is critical.

---

### 2. Quick Comparison Table

| Approach     | Behavior                    |
| ------------ | --------------------------- |
| Greedy       | Picks best NOW              |
| DP           | Considers ALL possibilities |
| Backtracking | Explores everything         |

---

### 3. Greedy Approach 

#### Core Idea

- Always pick the best option at the current step  
- Never revisit or change decisions  

---

#### How It Works

Step-by-step:
1. Look at current choices  
2. Pick the best one  
3. Move forward  
4. Repeat  

---

#### Characteristics

- Fast  
- Simple  
- No backtracking  
- No storing of states  

---

#### Limitation

- May fail if local choice is not globally optimal  

---

### 4. Dynamic Programming

#### Core Idea

- Consider all possible solutions  
- Store results of subproblems  
- Build optimal solution  

---

#### How It Works

Step-by-step:
1. Break problem into subproblems  
2. Solve each subproblem  
3. Store results (memoization or tabulation)  
4. Combine results  

---

#### Characteristics

- Guarantees correct answer  
- Avoids recomputation  
- Uses memory  

---

#### Limitation

- Slower than greedy  
- More complex  

---

### 5. Backtracking 

#### Core Idea

- Try all possible combinations  
- Undo decisions when needed  

---

#### How It Works

Step-by-step:
1. Choose an option  
2. Explore further  
3. If invalid → backtrack  
4. Try next option  

---

#### Characteristics

- Explores entire solution space  
- Always finds correct answer  
- Very slow (exponential)  

---

#### Limitation

- Not efficient for large inputs  

---

### 6. Deep Intuition Comparison

---

#### Greedy

- Thinks only about the present  
- “What is the best I can do right now?”  

---

#### DP

- Thinks about all possibilities  
- “What is the best among all possible paths?”  

---

#### Backtracking

- Tries everything  
- “Let me explore all paths and see what works”  

---

### 7. Example Comparison 

Problem: Choose items to maximize value

---

#### Greedy Thinking

- Pick item with highest value first  
- Move forward  

---

#### DP Thinking

- Try all combinations  
- Store best results  

---

#### Backtracking Thinking

- Generate every possible subset  
- Check each one  

---

### 8. When to Use Each Approach

---

#### Use Greedy When

- Local optimal choice leads to global optimal  
- No need to revisit decisions  
- Problem involves sorting or simple choices  

---

#### Use DP When

- Overlapping subproblems exist  
- Greedy fails  
- Need guaranteed optimal solution  

---

#### Use Backtracking When

- Need all possible solutions  
- Constraints are small  
- Problem involves combinations/permutations  

---

### 9. Time Complexity Comparison

| Approach     | Time Complexity        |
| ------------ | ---------------------- |
| Greedy       | O(n log n) usually     |
| DP           | O(n²), O(n³), etc.     |
| Backtracking | O(2ⁿ), O(n!)           |

---

### 10. Key Differences Summary

---

Greedy:
- Fastest  
- Simplest  
- Not always correct  

---

DP:
- Always correct  
- Uses memory  
- Moderate complexity  

---

Backtracking:
- Always correct  
- Explores everything  
- Very slow  

---

### 11. Golden Rule

If greedy works → use greedy  

If greedy fails → try DP  

If DP is too complex or problem requires all solutions → use backtracking  
