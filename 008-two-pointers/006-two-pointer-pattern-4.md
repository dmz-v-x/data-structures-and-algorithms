# Read / Write Pointer Pattern (In-Place Modification)

# ✅ Core Idea

We use **two pointers with different responsibilities**:

✔ **Read Pointer** → Scans elements  
✔ **Write Pointer** → Modifies / Places elements  

Mental model:

👉 One pointer observes  
👉 One pointer builds result  

---

# 🧠 Why This Pattern Exists

Many problems ask:

❌ “Return new array”

But interviews often demand:

✅ “Modify the array in place”

Meaning:

✔ No extra array  
✔ No copying everything  
✔ Use original memory  

---

# 🚀 Use Case 1 — Deduplication (VERY COMMON)

## ✅ Problem Type

Remove duplicates from sorted array **in place**.

Example:

    [1, 1, 2, 2, 3]

Result:

    [1, 2, 3, _, _]

Return:

    Length = 3

---

## ✅ Intuition

Read pointer → scans everything  
Write pointer → only writes unique values

---

## ✅ JavaScript Code

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

## ✅ Key Insight

✔ No extra space  
✔ Unique elements compacted at front  
✔ O(N) time

---

# 🚀 Use Case 2 — Partitioning (EXTREMELY IMPORTANT)

Partitioning = Move elements based on condition.

Classic example:

🔥 **Move Zeroes**

---

## ✅ Problem Type

Move all zeroes to end **while preserving order**.

Example:

    [0, 1, 0, 3, 12]

Result:

    [1, 3, 12, 0, 0]

---

## ✅ Intuition

Read pointer → scans  
Write pointer → places non-zero values

---

## ✅ JavaScript Code

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

## ✅ Key Insight

✔ Stable ordering preserved  
✔ No extra array  
✔ O(N)

---

# 🚀 Use Case 3 — Element Removal (Interview Favorite)

---

## ✅ Problem Type

Remove all occurrences of a value **in place**.

Example:

    nums = [3, 2, 2, 3]
    val = 3

Result:

    [2, 2, _, _]

Return:

    Length = 2

---

## ✅ JavaScript Code

    function removeElement(nums, val) {
        let write = 0;

        for (let read = 0; read < nums.length; read++) {
            if (nums[read] !== val) {
                nums[write] = nums[read];
                write++;
            }
        }

        return write;
    }

---

# 🚀 Use Case 4 — Advanced Partitioning (Sort Colors) ⭐⭐⭐⭐⭐

Classic Dutch National Flag problem.

---

## ✅ Problem Type

Sort array of:

    [0, 1, 2]

Without using sort.

---

## ✅ Intuition

Multiple write regions.

We partition into:

✔ 0 zone  
✔ 1 zone  
✔ 2 zone  

---

## ✅ JavaScript Code

    function sortColors(nums) {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] === 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
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

# 🧠 The Golden Mental Model

Read / Write pointers work because:

✔ Read pointer explores  
✔ Write pointer constructs valid region  
✔ Invalid elements get overwritten  
✔ No extra space needed  

---

# 🏆 Golden Rule of This Pattern

👉 **Write pointer always marks the boundary of valid data**

Everything before write → Correct  
Everything after write → Unknown / garbage  

---

# ✅ Why This Pattern Is Interview Gold

✔ Memory efficient  
✔ Frequently tested  
✔ Clean logic  
✔ Strong signal of DSA maturity  

---

# ✅ Final Compression

Read / Write pointers =

✔ One pointer scans  
✔ One pointer writes  
✔ Modify in place  
✔ Deduplicate  
✔ Partition  
✔ O(1) extra space  
