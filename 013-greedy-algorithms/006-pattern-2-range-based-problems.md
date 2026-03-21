## Interval Greedy Pattern

### 1. What is Interval Greedy?

Interval greedy deals with problems where data is given as ranges:

[start, end]

Examples:
- Meetings (start time, end time)
- Tasks with duration
- Balloons (x-start, x-end)
- Train timings

---

### 2. Why Interval Problems Are Special

Intervals can:
- Overlap
- Touch
- Be completely separate

Your goal is usually:
- Maximize non-overlapping intervals  
- Minimize removals  
- Minimize resources  

---

### 3. The Core Pattern

This is the most important rule:

1. Sort intervals by end time  
2. Pick the earliest finishing interval  
3. Continue selecting non-overlapping intervals  

---

### 4. Why Sort by End Time?

This is the heart of the pattern.

---

#### Intuition

If you pick an interval that ends early:
- You free up time for future intervals  

If you pick one that ends late:
- You block future opportunities  

---

#### Key Idea

> Earlier finish → More space → More choices

---

### 5. Why Not Sort by Start Time?

Sorting by start time seems logical but fails.

---

#### Example

Intervals:
[1, 10], [2, 3], [4, 5]

---

If sorted by start:
- Pick [1, 10] → blocks everything  

Result: only 1 interval  

---

If sorted by end:
- Pick [2, 3], then [4, 5]  

Result: 2 intervals (optimal)

---

### 6. Greedy Decision Rule

After sorting:

Pick an interval only if:

current.start >= lastSelected.end

---

### 7. Example 1 — Activity Selection

---

#### Problem

Find maximum number of meetings that can be attended.

---

#### Steps

1. Sort by end time  
2. Pick first meeting  
3. For each next meeting:
   - If start ≥ last end → pick  

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

#### Insight

- Picking earliest finishing meetings maximizes count  

---

### 8. Example 2 — Non-overlapping Intervals

---

#### Problem

Remove minimum intervals so none overlap

---

#### Steps

1. Sort by end  
2. Traverse  
3. If overlap → remove  
4. Else → update last end  

---

#### Code

    function eraseOverlapIntervals(intervals) {
      intervals.sort((a, b) => a[1] - b[1])

      let remove = 0
      let prevEnd = intervals[0][1]

      for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
          remove++
        } else {
          prevEnd = intervals[i][1]
        }
      }

      return remove
    }

---

#### Insight

- Keeping intervals that end early reduces conflicts  

---

### 9. Example 3 — Minimum Arrows to Burst Balloons

---

#### Problem

Each balloon is an interval  
Find minimum arrows to burst all balloons  

---

#### Steps

1. Sort by end  
2. Start with one arrow  
3. If next balloon overlaps → same arrow  
4. Else → new arrow  

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

#### Insight

- One arrow can handle overlapping intervals  

---

### 10. General Template (VERY IMPORTANT)

    intervals.sort((a, b) => a[1] - b[1])

    let lastEnd = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] >= lastEnd) {
        // take interval
        lastEnd = intervals[i][1]
      } else {
        // skip or count overlap
      }
    }

---

### 11. Common Variations

---

#### Maximize count
- Activity selection  

---

#### Minimize removals
- Non-overlapping intervals  

---

#### Minimize resources
- Arrows, rooms, platforms  

---

### 12. Common Mistakes

---

#### Mistake 1: Sorting by start time

Leads to suboptimal results  

---

#### Mistake 2: Using wrong condition

Using:
start > lastEnd instead of start >= lastEnd  

---

#### Mistake 3: Not updating lastEnd

Breaks logic  

---

### 13. Time Complexity

- Sorting → O(n log n)  
- Traversal → O(n)  

Total → O(n log n)

---

### 14. Final Mental Model

Whenever you see intervals, think:

---

1. Can I sort by end time?  
2. Can I pick earliest finishing interval?  
3. Will that maximize/minimize my goal?  

---

If YES → Interval Greedy Pattern

---

### 15. Final Summary

Interval Greedy Pattern:

- Problems involve ranges [start, end]  
- Sort by end time  
- Pick earliest finishing interval  
- Continue selecting valid intervals  
