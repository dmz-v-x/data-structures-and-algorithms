## Sorting + Greedy Pattern 

### 1. Why This Pattern is Important

This is the **most commonly used greedy pattern** in DSA.

In fact:
- Around **70–80% of greedy problems** use this pattern  

If you master this:
- You will solve most greedy problems easily  

---

### 2. The Core Idea

The pattern is very simple:

1. Sort the data  
2. Traverse the data  
3. Make the best decision at each step  

---

### 3. Why Sorting First?

Sorting is the **key step**.

---

#### Why?

Because:
- It brings structure to the problem  
- It makes the “best choice” obvious  
- It helps you avoid complex decisions  

---

#### Without Sorting

- Data is random  
- Hard to decide what to pick  

---

#### With Sorting

- Data is organized  
- Greedy decision becomes clear  

---

### 4. General Pattern (Mental Model)

---

#### Step 1: Sort

Sort based on what helps your goal:

- By end time  
- By start time  
- By value  
- By ratio  

---

#### Step 2: Traverse

Loop through the sorted data

---

#### Step 3: Make Decision

At each step:
- Take or skip based on greedy condition  

---

### 5. Basic JavaScript Template

    arr.sort((a, b) => {
      // define sorting logic
    })

    for (let i = 0; i < arr.length; i++) {
      if (canTake(arr[i])) {
        // take it
      }
    }

---

### 6. Example 1 — Activity Selection (Classic)

---

#### Problem

You are given meetings with start and end times.  
Find maximum number of meetings you can attend.

---

#### Step 1: Sort

Sort by **end time**

    meetings.sort((a, b) => a.end - b.end)

---

#### Step 2: Traverse

Go through each meeting

---

#### Step 3: Decision

Pick a meeting only if:
- Its start time ≥ last selected meeting’s end time  

---

#### Code

    function maxMeetings(meetings) {
      meetings.sort((a, b) => a.end - b.end)

      let count = 1
      let lastEnd = meetings[0].end

      for (let i = 1; i < meetings.length; i++) {
        if (meetings[i].start >= lastEnd) {
          count++
          lastEnd = meetings[i].end
        }
      }

      return count
    }

---

#### Key Insight

- Sorting by end time ensures we always leave room for future meetings  
- Local decision = globally optimal  

---

### 7. Example 2 — Non-overlapping Intervals

---

#### Problem

Remove minimum intervals so that no intervals overlap

---

#### Step 1: Sort

Sort by end time

---

#### Step 2: Traverse

Check overlap with previous interval

---

#### Step 3: Decision

- If overlapping → remove one  
- Else → keep it  

---

#### Code

    function eraseOverlapIntervals(intervals) {
      intervals.sort((a, b) => a[1] - b[1])

      let count = 0
      let prevEnd = intervals[0][1]

      for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
          count++
        } else {
          prevEnd = intervals[i][1]
        }
      }

      return count
    }

---

#### Key Insight

- Sorting by end minimizes conflicts  
- Greedy decision avoids future overlaps  

---

### 8. Example 3 — Minimum Number of Arrows

---

#### Problem

Each balloon is an interval.  
Find minimum arrows to burst all balloons.

---

#### Step 1: Sort

Sort by end coordinate

---

#### Step 2: Traverse

Check overlap between balloons

---

#### Step 3: Decision

- If overlapping → same arrow  
- Else → new arrow  

---

#### Code

    function findMinArrowShots(points) {
      points.sort((a, b) => a[1] - b[1])

      let arrows = 1
      let end = points[0][1]

      for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
          arrows++
          end = points[i][1]
        }
      }

      return arrows
    }

---

#### Key Insight

- One arrow can cover overlapping intervals  
- Sorting ensures optimal grouping  

---

### 9. How to Decide Sorting Criteria (VERY IMPORTANT)

This is where beginners struggle.

---

#### Rule of Thumb

Ask:

> “What should I prioritize to make future choices easier?”

---

#### Common Strategies

- Sort by end → interval problems  
- Sort by start → merging problems  
- Sort by value → profit problems  
- Sort by ratio → knapsack  

---

### 10. Common Mistakes

---

#### Mistake 1: Wrong Sorting

Sorting by start instead of end can break solution

---

#### Mistake 2: Not Updating State

Forgetting to update:
- lastEnd  
- current value  

---

#### Mistake 3: Greedy Without Proof

Just assuming greedy works without reasoning

---

### 11. Time Complexity

- Sorting → O(n log n)  
- Traversal → O(n)  

Total → O(n log n)

---

### 12. Final Mental Model

Whenever you see a problem, think:

---

1. Can sorting help simplify decisions?  
2. What should I sort by?  
3. Can I make a decision while traversing?  
4. Will this decision always be safe?  

---

If YES → Sorting + Greedy pattern

---

### 13. Final Summary

Sorting + Greedy pattern:

- Sort data based on key criteria  
- Traverse the sorted array  
- Make optimal decision at each step  

