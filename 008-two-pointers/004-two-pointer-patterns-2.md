# Same Direction Pointers (Sliding Window Pattern)

# ✅ Core Idea

**Both pointers move forward.**

Visual representation:

    [ window of elements ]
      ↑               ↑
     left           right

Unlike opposite pointers…

👉 Both pointers move in the **same direction**.

We maintain a **dynamic window** of elements.

---

# ✅ When Do We Use Same Direction Pointers?

This pattern appears when problems involve:

✔ Sliding window  
✔ Subarray / substring problems  

Especially when you see words like:

- Longest
- Shortest / Smallest
- At most K
- Continuous / Subarray / Substring

---

# 🧠 The Mental Model

Think of pointers as forming a **window**:

    left → start of window  
    right → end of window  

We:

✅ Expand window → right++  
✅ Shrink window → left++  

Window size is **NOT fixed** (unless specified).

---

# 🚀 Use Case 1 — Longest Substring Without Repeating Characters ⭐⭐⭐⭐⭐

## ✅ Problem Type

Find the longest substring with **no duplicate characters**.

Example:

    "abcabcbb"

Answer:

    "abc" → length = 3

---

## ✅ Intuition

We expand the window:

✔ Add characters  
✔ Track duplicates  

If duplicate appears:

👉 Shrink window from left.

---

## ✅ JavaScript Code

    function lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        let set = new Set();

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }

---

## ✅ Key Insight

Each character:

✔ Enters window once  
✔ Leaves window once  

Time Complexity:

    O(N)

---

# 🚀 Use Case 2 — Smallest Window (Minimum Window Problems) ⭐⭐⭐⭐⭐⭐⭐

## ✅ Problem Type

Find the **smallest substring** satisfying a condition.

Example:

    s = "ADOBECODEBANC"
    t = "ABC"

Answer:

    "BANC"

---

## ✅ Intuition

Two phases:

✅ Expand → until valid  
✅ Shrink → to minimize

We maintain:

✔ Character frequencies  
✔ Validity condition

---

## ✅ Simplified JavaScript Example

    function minSubArrayLen(target, nums) {
        let left = 0;
        let sum = 0;
        let minLength = Infinity;

        for (let right = 0; right < nums.length; right++) {
            sum += nums[right];

            while (sum >= target) {
                minLength = Math.min(minLength, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }

---

## ✅ Key Insight

Expand → Meet condition  
Shrink → Optimize answer

---

# 🚀 Use Case 3 — "At Most K" Problems ⭐⭐⭐⭐⭐

VERY common interview pattern.

---

## ✅ Problem Type

Find longest subarray/substring with:

✔ At most K distinct elements  
✔ At most K replacements  
✔ At most K zeros, etc.

---

## ✅ Intuition

We expand window normally.

If constraint violated:

👉 Shrink from left.

---

## ✅ JavaScript Example  
(Longest substring with at most K distinct characters)

    function lengthOfLongestSubstringKDistinct(s, k) {
        let left = 0;
        let maxLength = 0;
        let map = new Map();

        for (let right = 0; right < s.length; right++) {

            map.set(s[right], (map.get(s[right]) || 0) + 1);

            while (map.size > k) {
                map.set(s[left], map.get(s[left]) - 1);

                if (map.get(s[left]) === 0) {
                    map.delete(s[left]);
                }

                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }

---

# 🧠 Universal Sliding Window Formula

Most same-direction pointer problems follow:

---

## ✅ 1. Expand Window

    right++

Add element to state.

---

## ✅ 2. Check Constraint

Is window valid?

✔ Yes → Update answer  
✔ No → Shrink window  

---

## ✅ 3. Shrink Window

    left++

Remove element from state.

---

# 🏆 Golden Rule of Sliding Window

👉 **Expand greedily. Shrink only when necessary.**

Never shrink too early.

Never expand blindly.

---

# ✅ Why Same Direction Pointers Are Powerful

✔ Avoid repeated scanning  
✔ Maintain continuous region  
✔ Each element processed limited times  
✔ Often O(N)

---

# ✅ Final Compression

Same direction pointers =

✔ Maintain window  
✔ Expand → right++  
✔ Shrink → left++  
✔ Enforce constraints  
✔ Track optimal answer  
