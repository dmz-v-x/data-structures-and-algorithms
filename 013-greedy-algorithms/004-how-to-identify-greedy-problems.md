## How to Identify Greedy Problems

### 1. Why This Skill Matters

In DSA, the hardest part is not coding — it is:

> Identifying which approach to use

Greedy is powerful but risky:
- If used correctly → very fast solution  
- If used incorrectly → wrong answer  

So instead of guessing, you learn **signals (patterns)**.

---

### 2. Signal 1 — “Maximize / Minimize”

---

#### Core Idea

Most greedy problems involve:
- Maximizing something  
- Minimizing something  

---

#### Why This Matters

Greedy works by making the **best choice at each step**.

So if the problem says:
- Maximum profit  
- Minimum cost  
- Maximum number of tasks  

→ Greedy might work

---

#### Example 1 — Activity Selection

Problem:
You are given meetings with start and end times.  
Find the maximum number of meetings you can attend.

---

Greedy Thinking:
- To maximize count → pick meetings that end earliest  

---

#### Key Insight

Maximization + step-by-step decision → greedy candidate

---

#### Counter Example

Problem:
Maximum subarray sum

---

Why not greedy?
- You cannot make a local decision at each step  
- Needs prefix logic (Kadane’s Algorithm)

---

#### Lesson

Not all maximize/minimize problems are greedy  
But most greedy problems involve these keywords

---

### 3. Signal 2 — Sorting Helps

---

#### Core Idea

If sorting simplifies the problem → strong greedy signal

---

#### Why This Matters

Sorting:
- Organizes data  
- Makes “best choice” obvious  

---

#### Example 2 — Non-overlapping Intervals

Problem:
Remove minimum intervals so none overlap

---

Step:
- Sort intervals by end time  
- Always pick the earliest finishing interval  

---

#### Insight

Sorting + local decision → greedy

---

#### Example 3 — Fractional Knapsack

Problem:
Maximize value within weight limit

---

Step:
- Sort by value/weight ratio  
- Pick highest ratio first  

---

#### Insight

Sorting reveals optimal choice → greedy

---

#### Counter Example

Problem:
Longest Increasing Subsequence

---

Sorting helps? Yes  
But greedy fails → requires DP

---

#### Lesson

Sorting is a strong hint, not a guarantee

---

### 4. Signal 3 — No Need to Revisit Choices

---

#### Core Idea

Once you make a decision:
- You never need to change it  

---

#### Why This Matters

Greedy does:
- No backtracking  
- No re-evaluation  

---

#### Example 4 — Jump Game

Problem:
Can you reach the last index?

---

Greedy Thinking:
- Track farthest reachable position  
- Move forward  

---

#### Insight

No revisiting → greedy works

---

#### Example 5 — Gas Station

Problem:
Find starting station to complete circular tour

---

Greedy Thinking:
- If fuel becomes negative → reset start  

---

#### Insight

Forward-only decisions → greedy

---

#### Counter Example

Problem:
Generate all subsets

---

Why not greedy?
- Requires revisiting decisions  
- Uses backtracking  

---

#### Lesson

If the problem needs undo/try-again → not greedy

---

### 5. Signal 4 — Choices are Independent

---

#### Core Idea

Each decision should not heavily affect future decisions

---

#### Why This Matters

Greedy assumes:
- Current choice will not break future optimal choices  

---

#### Example 6 — Assign Cookies

Problem:
Assign cookies to children to maximize satisfied children

---

Greedy Thinking:
- Give smallest sufficient cookie  

---

#### Insight

Each assignment is independent → greedy works

---

#### Example 7 — Minimum Platforms

Problem:
Find minimum platforms needed for trains

---

Greedy Thinking:
- Sort arrivals and departures  
- Process events independently  

---

#### Insight

Independent decisions → greedy valid

---

#### Counter Example

Problem:
0/1 Knapsack

---

Why greedy fails:
- Taking one item affects future choices  
- Decisions are dependent  

→ Requires DP

---

#### Lesson

If choices strongly depend on each other → greedy fails

---

### 6. Putting It All Together

---

#### Greedy Detection Checklist

Ask these questions:

---

1. Is the problem asking to maximize or minimize something?  

2. Does sorting simplify the decision-making?  

3. Do I never need to revisit decisions?  

4. Are choices independent?  

---

If most answers are YES → greedy likely works

---

### 7. Full Example Walkthrough

---

Problem:
Minimum number of arrows to burst balloons

---

Step 1:
Minimize arrows → YES  

Step 2:
Sorting helps (by end time) → YES  

Step 3:
No revisiting decisions → YES  

Step 4:
Choices independent → YES  

---

Conclusion:
Greedy approach works

---

### 8. Final Mental Model

Whenever you see a problem, ask:

> “Can I make a decision now that I will never regret later?”

If YES → greedy
