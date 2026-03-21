## Greedy with Ratios — Fractional Decision Making Pattern

### 1. What is Greedy with Ratios?

This pattern is used when:

- Each item has:
  - Profit (value)
  - Weight (cost/resource)

And your goal is:
- Maximize total profit under constraints  

---

### 2. When Does This Pattern Apply?

Use this pattern when:

- You can take items **partially**  
- Value depends on **efficiency**, not just total value  

---

### 3. Core Idea

Instead of choosing:
- Highest value  
- Lowest weight  

You choose:

> Maximum value per unit weight

---

### 4. Ratio Concept (VERY IMPORTANT)

For each item:

ratio = value / weight

---

This tells you:

- How much value you get per unit weight  

---

### 5. Why Ratio Works

---

#### Intuition

If you pick items with higher ratio:
- You get more value per unit resource  

---

#### Example

Item A:
value = 100, weight = 50 → ratio = 2  

Item B:
value = 60, weight = 10 → ratio = 6  

---

Greedy choice:
- Pick B first  

Because:
- It gives more value per weight  

---

### 6. The Pattern

---

Step 1:
Calculate ratio for each item  

---

Step 2:
Sort items in descending order of ratio  

---

Step 3:
Traverse items  

---

Step 4:
- Take full item if possible  
- Else take fraction  

---

### 7. Classic Example — Fractional Knapsack

---

#### Problem

You have:
- Items with value and weight  
- A bag with capacity W  

Goal:
- Maximize total value  

---

#### Key Property

You CAN take fractions of items  

---

### 8. Step-by-Step Solution

---

#### Step 1: Compute Ratios

For each item:

value / weight  

---

#### Step 2: Sort by Ratio (Descending)

Highest ratio first  

---

#### Step 3: Traverse

For each item:

- If it fits → take full  
- Else → take fraction  

---

### 9. JavaScript Implementation

    function fractionalKnapsack(items, capacity) {
      // items = [{value, weight}]

      items.sort((a, b) => {
        return (b.value / b.weight) - (a.value / a.weight)
      })

      let totalValue = 0

      for (let i = 0; i < items.length; i++) {
        if (capacity === 0) break

        if (items[i].weight <= capacity) {
          totalValue += items[i].value
          capacity -= items[i].weight
        } else {
          let fraction = capacity / items[i].weight
          totalValue += items[i].value * fraction
          capacity = 0
        }
      }

      return totalValue
    }

---

### 10. Dry Run Example

Items:

| Value | Weight |
|------|--------|
| 60   | 10     |
| 100  | 20     |
| 120  | 30     |

Capacity = 50  

---

#### Step 1: Ratios

- 60/10 = 6  
- 100/20 = 5  
- 120/30 = 4  

---

#### Step 2: Sort

[6, 5, 4]

---

#### Step 3: Pick Items

- Take 60 (full) → capacity = 40  
- Take 100 (full) → capacity = 20  
- Take 120 (partial: 20/30) → value = 80  

---

Final Answer:
60 + 100 + 80 = 240  

---

### 11. Why Greedy Works Here

This is critical.

---

#### Reason

- Taking higher ratio always gives more benefit  
- Partial selection ensures no waste  

---

#### Key Property

Greedy Choice Property holds:
- Best ratio now → best overall  

---

### 12. When This Pattern Fails

---

#### Example: 0/1 Knapsack

You can only take full items (no fractions)

---

Items:
- High ratio item may block better combination later  

---

#### Result

Greedy fails → need DP  

---

### 13. Key Differences

---

Fractional Knapsack:
- Greedy works  

---

0/1 Knapsack:
- Greedy fails  
- Use DP  

---

### 14. Common Mistakes

---

#### Mistake 1: Sorting by value only

Wrong — must use value/weight  

---

#### Mistake 2: Ignoring fractions

This pattern only works when partial selection allowed  

---

#### Mistake 3: Integer division

Always use floating point division  

---

### 15. Time Complexity

- Sorting → O(n log n)  
- Traversal → O(n)  

Total → O(n log n)

---

### 16. Final Mental Model

Whenever you see:

- Value + Weight  
- Maximize value  
- Limited capacity  
- Partial selection allowed  

Think:

> “Sort by value per unit”

---

### 17. Final Summary

Greedy with Ratios:

- Used when efficiency matters (value/weight)  
- Sort by ratio  
- Pick highest ratio first  
- Take full or partial items  

