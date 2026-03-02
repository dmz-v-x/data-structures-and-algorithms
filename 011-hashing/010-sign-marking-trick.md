## Sign Marking Trick

### 1. Introduction to the Sign Marking Trick

The **Sign Marking Trick** is a clever algorithmic technique used in array problems to detect duplicates or missing numbers **without using extra space**.

It is commonly used in problems where:

- numbers are in the range **1 to n**
- array size is **n**
- modifying the array is allowed
- we must solve the problem in **O(n) time**
- extra space should be **O(1)**

The trick works by using the **sign (positive or negative) of array elements as markers**.

Instead of using additional memory structures like hash maps or sets, we use the array itself to store information about what elements have already been seen.

---

### 2. When This Trick Can Be Used

The sign marking technique works only under certain conditions.

Typical constraints:

- The array contains integers.
- Numbers are in the range:

```
1 ≤ nums[i] ≤ n
``` 

- The array length is `n`.

Example valid input:

```
[4,3,2,7,8,2,3,1]
```

Invalid input example:

```
[100,200,300]
```

Because the numbers are not within `1..n`.

The trick relies on the fact that each value can correspond to a **valid index in the array**.

---

### 3. Core Idea of the Trick

Each number in the array corresponds to an index.

Mapping rule:

```
value → index = value - 1
```

Example:

```
value 1 → index 0
value 2 → index 1
value 3 → index 2
value 4 → index 3
```

When we encounter a number, we **mark the corresponding index as visited** by making the value at that index negative.

This negative sign acts like a **visited marker**.

---

### 4. Step-by-Step Example

Input:

```
[4,3,2,7,8,2,3,1]
```

Array length:

```
n = 8
```

Mapping:

```
value → index = value - 1
```

---

Step 1

Current number:

```
4
```

Index:

```
4 - 1 = 3
```

Mark index 3 negative.

```
[4,3,2,-7,8,2,3,1]
```

---

Step 2

Current number:

```
3
```

Index:

```
3 - 1 = 2
```

Mark index 2 negative.

```
[4,3,-2,-7,8,2,3,1]
```

---

Step 3

Current number:

```
2
```

Index:

```
2 - 1 = 1
```

Mark index 1 negative.

```
[4,-3,-2,-7,8,2,3,1]
```

---

Step 4

Current number:

```
7
```

Index:

```
7 - 1 = 6
```

Mark index 6 negative.

```
[4,-3,-2,-7,8,2,-3,1]
```

---

Step 5

Current number:

```
8
```

Index:

```
8 - 1 = 7
```

Mark index 7 negative.

```
[4,-3,-2,-7,8,2,-3,-1]
```

---

Step 6

Current number:

```
2
```

Index:

```
1
```

But index 1 is already negative.

This means **2 is a duplicate**.

---

Step 7

Current number:

```
3
```

Index:

```
2
```

Already negative.

So **3 is also a duplicate**.

---

Final duplicates:

```
[2,3]
```

---

### 5. JavaScript Implementation

```
function findDuplicates(nums) {

    const result = []

    for (let i = 0; i < nums.length; i++) {

        const index = Math.abs(nums[i]) - 1

        if (nums[index] < 0) {
            result.push(index + 1)
        } else {
            nums[index] = -nums[index]
        }
    }

    return result
}
```

Example:

```
findDuplicates([4,3,2,7,8,2,3,1])
```

Output:

```
[2,3]
```

---

### 6. Why `Math.abs()` Is Needed

During the algorithm, elements become negative.

Example:

```
nums = [4,-3,-2,-7,8,2,-3,-1]
```

If we read `nums[i]` directly, we may get negative values.

To get the original number:

```
Math.abs(nums[i])
```

This ensures we always compute the correct index.

---

### 7. Time Complexity

We traverse the array once.

```
O(n)
```

Each operation inside the loop is constant time.

---

### 8. Space Complexity

No extra data structures are used.

```
O(1)
```

Only a few variables are used.

---

### 9. Important Variations Using Sign Marking

This trick appears in several interview problems.

---

### Variation 1 — Find Missing Numbers

Problem:

Given numbers `1..n`, find which numbers are missing.

Example:

```
[4,3,2,7,8,2,3,1]
```

Missing numbers:

```
[5,6]
```

Idea:

After sign marking, indices that remain **positive** correspond to missing numbers.

---

### Variation 2 — Find a Single Duplicate

Example:

```
[1,3,4,2,2]
```

Duplicate:

```
2
```

Sign marking can detect it when we encounter an already negative index.

---

### Variation 3 — Find All Numbers Disappeared in an Array

This is a classic interview problem.

Input:

```
[4,3,2,7,8,2,3,1]
```

Output:

```
[5,6]
```

Because indices 4 and 5 were never visited.

---

### 10. Common Gotchas

Forgetting `Math.abs()`

Incorrect code:

```
const index = nums[i] - 1
```

Correct code:

```
const index = Math.abs(nums[i]) - 1
```

Because elements may already be negative.

---

Index mapping mistake

Always use:

```
index = value - 1
```

Not:

```
index = value
```

---

Input modification

This algorithm modifies the array.

Some problems forbid modifying the input.

In those cases, this trick cannot be used.

---

Out-of-range values

The trick only works when:

```
1 ≤ nums[i] ≤ n
```

If values exceed array bounds, index calculation becomes invalid.

---

### 11. Why This Trick Is Powerful

The sign marking trick is powerful because it:

- avoids hash maps
- avoids extra arrays
- runs in linear time
- uses constant memory

It leverages the array itself as a **data structure for tracking visited elements**.

---

### 12. When to Recognize This Pattern

You should think about sign marking when:

- numbers range from `1..n`
- array length is `n`
- duplicates or missing numbers must be found
- O(1) space constraint exists
- modifying the array is allowed

These clues strongly indicate the **sign marking trick**.



- time complexity **O(n)**
- space complexity **O(1)**
- modifies the input array

Because of its efficiency and clever use of array indices, this trick frequently appears in **coding interviews and competitive programming problems**.
```
