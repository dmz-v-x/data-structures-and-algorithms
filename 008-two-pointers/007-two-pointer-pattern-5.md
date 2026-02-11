# Most Important Two Pointers Patterns (High Frequency in Interviews)

# ⭐ Pattern 1 — Pair Problems (Sorted Array)

## ✅ How to Recognize This Pattern

Look for:

✔ Sorted input  
✔ Find pair / sum / difference  
✔ Two elements relationship  

Typical phrases:

- "Find pair with target sum"
- "Two numbers whose difference is X"
- "Closest pair"

---

## ✅ Strategy

Classic opposite pointers:

If sum too small → move left  
If sum too large → move right  

Why this works:

👉 Sorted order gives direction.

---

## ✅ Example Problem

**Find pair with target sum**

    function hasPair(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right];

            if (sum === target) return true;

            if (sum < target) left++;
            else right--;
        }

        return false;
    }

---

## 🧠 Interview Insight

Whenever input is sorted…

👉 **Two pointers should scream in your head**

---

# ⭐ Pattern 2 — Remove / Compress / Deduplicate

## ✅ How to Recognize This Pattern

Look for:

✔ "Modify array in place"  
✔ "Remove duplicates"  
✔ "Return new length"  

This is a HUGE interview favorite.

---

## ✅ Strategy

One pointer reads  
One pointer writes  

Read → scans everything  
Write → builds valid result  

---

## ✅ Example Problem

**Remove duplicates**

    function removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let write = 1;

        for (let read = 1; read < nums.length; read++) {
            if (nums[read] !== nums[read - 1]) {
                nums[write] = nums[read];
                write++;
            }
        }

        return write;
    }

---

## 🧠 Interview Insight

Write pointer = boundary of clean data.

---

# ⭐ Pattern 3 — Sliding Window (MOST IMPORTANT)

🔥 Highest ROI pattern in interviews.

---

## ✅ How to Recognize This Pattern

Look for:

✔ Subarray / substring  
✔ Longest / shortest / count  
✔ Continuous region  

Trigger words:

- Longest
- Minimum
- At most K
- Without repeating
- Window

---

## ✅ Strategy

Expand window → right++  
Shrink window → left++  

Window is dynamic.

---

## ✅ Example Problem

**Longest substring without repeating**

    function lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLen = 0;
        let set = new Set();

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }

---

## 🧠 Interview Insight

Sliding window = Hidden two pointers.

---

# ⭐ Pattern 4 — Partitioning

Extremely common in array manipulation problems.

---

## ✅ How to Recognize This Pattern

Look for:

✔ Move elements based on condition  
✔ Reorder without sorting fully  

Examples:

- Move zeros
- Sort colors
- Separate positives/negatives

---

## ✅ Strategy

Maintain regions.

Pointers divide array into zones.

---

## ✅ Example 1 — Move Zeroes

    function moveZeroes(nums) {
        let write = 0;

        for (let read = 0; read < nums.length; read++) {
            if (nums[read] !== 0) {
                nums[write] = nums[read];
                write++;
            }
        }

        while (write < nums.length) {
            nums[write] = 0;
            write++;
        }
    }

---

## ✅ Example 2 — Sort Colors (Dutch Flag)

    function sortColors(nums) {
        let low = 0, mid = 0, high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] === 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++; mid++;
            } 
            else if (nums[mid] === 1) {
                mid++;
            } 
            else {
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
            }
        }
    }

---

## 🧠 Interview Insight

Partitioning = Managing boundaries.

---

# ⭐ Pattern 5 — Cycle Detection (Slow & Fast)

Classic linked list / structure problems.

---

## ✅ How to Recognize This Pattern

Look for:

✔ Linked list loops  
✔ Repeated structure  
✔ "Find duplicate" style problems  

---

## ✅ Strategy

Slow = 1 step  
Fast = 2 steps  

Collision → Cycle detected

---

## ✅ Example Problem

    function hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) return true;
        }

        return false;
    }

---

## 🧠 Interview Insight

No extra memory needed.

---

# 🏆 The Ultimate Interview Skill

Strong candidates don’t memorize problems.

They recognize patterns.

Whenever you see:

✔ Sorted array → Pair pattern  
✔ In-place modification → Read/Write pattern  
✔ Subarray / substring → Sliding window  
✔ Reordering → Partitioning  
✔ Linked list loops → Slow/Fast  

👉 Pattern recognition = Speed + Confidence

---

# ✅ Final Compression (Cheat Sheet)

**Pair Problems** → Opposite pointers  
**Deduplication** → Read / Write pointers  
**Sliding Window** → Same direction pointers  
**Partitioning** → Boundary pointers  
**Cycle Detection** → Slow / Fast pointers  
