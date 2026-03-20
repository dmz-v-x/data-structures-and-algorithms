## When Does Greedy Work? 

### 1. Why This Question is Important

Before applying greedy, you must answer one critical question:

> “Will greedy actually give the correct answer?”

Because:
- Greedy is fast and simple  
- But it is NOT always correct  

So instead of guessing, we rely on **two strict conditions**.

---

### 2. The Two Conditions Where Greedy Works

Greedy works **ONLY IF** both of these are true:

1. Greedy Choice Property  
2. Optimal Substructure  

If even one is missing → greedy may fail.

---

### 3. Greedy Choice Property (Core Idea)

#### Definition

A problem has the Greedy Choice Property if:

> Making the best local choice at each step leads to the best global solution.

---

#### Simple Meaning

At every step:
- You choose the best option available right now  
- This choice will never harm the final result  

---

#### Intuition

Think of building a solution step by step:

- At each step, you lock in the best decision  
- You never regret it later  
- No future decision will make this choice look bad  

---

#### Example: Activity Selection

You are given meetings with start and end times.

Goal:
- Attend the maximum number of meetings  

Greedy strategy:
- Always pick the meeting that ends earliest  

Why it works:
- It leaves maximum room for future meetings  
- Any other choice reduces your options  

So:
- Local best choice → Global best result  

---

#### Key Insight

If you can prove:

> “Choosing anything else will not give a better result”

Then greedy choice property holds.

---

### 4. How to Recognize Greedy Choice Property

Ask:

- If I pick the best option now, will it block better future choices?  
- Can I prove that other choices are worse or equal?  

If:
- It does not block future optimal choices  
- And alternatives are worse  

→ Greedy is valid

---

### 5. Optimal Substructure (Second Pillar)

#### Definition

A problem has optimal substructure if:

> The optimal solution can be built from optimal solutions of its subproblems.

---

#### Simple Meaning

- Solve a small part optimally  
- Solve the remaining part optimally  
- Combine them → overall optimal solution  

---

#### Intuition

Break the problem into smaller pieces:

- Each piece behaves like the original problem  
- Solving each piece correctly leads to the final answer  

---

#### Example: Activity Selection Again

After selecting one meeting:

- Remaining problem = choose from remaining meetings  
- This is the same type of problem  

So:
- Problem reduces into smaller subproblems  

---

### 6. Why Both Conditions Are Required

This is extremely important.

---

#### Only Greedy Choice Property (Not Enough)

Even if local decisions look good:
- If subproblems don’t combine properly → wrong result  

---

#### Only Optimal Substructure (Not Enough)

Dynamic Programming problems also have this:
- But greedy still fails  

Example:
- Coin Change (general case)

---

### 7. Example Where Greedy Fails

Coins: [1, 3, 4]  
Target: 6  

Greedy:
- Pick 4 → remaining 2  
- Pick 1 → remaining 1  
- Pick 1 → total 3 coins  

Optimal:
- 3 + 3 = 2 coins  

---

#### Why Greedy Failed

- Greedy Choice Property is violated  
- Local best choice (4) was not globally optimal  

---

### 8. Visual Understanding

Greedy working case:

Step 1 → Best choice  
Step 2 → Best choice  
Step 3 → Best choice  

Final → Optimal result  

---

Greedy failing case:

Step 1 → Best choice (wrong long-term impact)  
Step 2 → Forced bad decisions  
Final → Suboptimal result  

---

### 9. Mental Model to Apply Greedy

Whenever you see a problem:

---

Step 1:
What is the best choice at each step?

---

Step 2:
If I pick this:
- Will it block better future options?

---

Step 3:
Can I prove:
- Any other choice is worse?

---

Step 4:
Does the problem reduce into smaller similar problems?

---

If all answers are YES → greedy works

---

### 10. Advanced Insight (Expert Level Thinking)

Experts do not guess greedy.

They either:
- Recognize known patterns  
- Or logically prove correctness  

---

### 11. Final Summary

Greedy works ONLY when:

1. Greedy Choice Property  
   - Local best choice leads to global best  

2. Optimal Substructure  
   - Problem can be broken into subproblems  

---

If either condition fails:
- Greedy is not reliable  
