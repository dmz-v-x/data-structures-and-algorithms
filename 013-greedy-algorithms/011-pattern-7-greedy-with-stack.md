## Greedy + Stack — Monotonic Decision Making Pattern

### 1. What is Greedy + Stack?

This pattern combines:

- Greedy decision making  
- Stack data structure  

---

Instead of making decisions only once:
- You may need to **remove previous choices**  
- And replace them with better ones  

---

### 2. Why Do We Need Stack in Greedy?

Earlier greedy rule:
- Never revisit decisions  

But some problems require:
- Fixing bad past decisions  

---

So we need a way to:
- Undo previous choices efficiently  

👉 Stack helps with:
- Push (make decision)  
- Pop (undo decision)  

---

### 3. Core Idea

At each step:

- Try to make the best choice  
- If current element is better than previous:
  - Remove previous (pop stack)  
- Push current element  

---

This creates a **monotonic structure**

---

### 4. What is Monotonic Stack?

A stack where elements are:

- Increasing  
OR  
- Decreasing  

---

Example:

Increasing stack:
1, 2, 3, 5  

Decreasing stack:
9, 7, 4, 2  

---

### 5. Pattern

---

Step 1:
Traverse input  

---

Step 2:
While:
- Stack is not empty  
- Current element is better than top  

👉 Pop from stack  

---

Step 3:
Push current element  

---

Step 4:
Build result from stack  

---

### 6. Example 1 — Remove K Digits (VERY IMPORTANT)

---

#### Problem

Given a number as string  
Remove k digits to make smallest possible number  

---

### 7. Greedy Insight

- Keep digits as small as possible  
- Remove larger digits when a smaller digit appears  

---

### 8. Steps

1. Traverse digits  
2. While:
   - k > 0  
   - stack not empty  
   - current digit < stack top  

👉 Pop  

3. Push current digit  
4. If k still > 0 → remove from end  

---

### 9. Code

    function removeKdigits(num, k) {
      let stack = []

      for (let digit of num) {
        while (
          k > 0 &&
          stack.length > 0 &&
          stack[stack.length - 1] > digit
        ) {
          stack.pop()
          k--
        }

        stack.push(digit)
      }

      while (k > 0) {
        stack.pop()
        k--
      }

      let result = stack.join('').replace(/^0+/, '')
      return result === '' ? '0' : result
    }

---

### 10. Key Insight

- Remove bigger digits when smaller ones appear  
- Stack helps undo bad choices  

---

### 11. Example 2 — Remove Duplicate Letters

---

#### Problem

Remove duplicate letters so result is smallest lexicographically  

---

### 12. Greedy Insight

- Keep characters in smallest possible order  
- Remove previous larger characters if they appear later again  

---

### 13. Steps

1. Track frequency  
2. Track visited  
3. Use stack  

While:
- Current char < stack top  
- Top appears later again  

👉 Pop  

---

### 14. Code

    function removeDuplicateLetters(s) {
      let stack = []
      let seen = new Set()
      let freq = {}

      for (let char of s) {
        freq[char] = (freq[char] || 0) + 1
      }

      for (let char of s) {
        freq[char]--

        if (seen.has(char)) continue

        while (
          stack.length > 0 &&
          char < stack[stack.length - 1] &&
          freq[stack[stack.length - 1]] > 0
        ) {
          seen.delete(stack.pop())
        }

        stack.push(char)
        seen.add(char)
      }

      return stack.join('')
    }

---

### 15. Key Insight

- Only remove if character appears again later  
- Maintain smallest lexicographic order  

---

### 16. Example 3 — Monotonic Stack (General Use)

---

#### Problem

Next greater element  

---

### 17. Greedy Insight

- Remove smaller elements when bigger appears  

---

### 18. Code

    function nextGreaterElement(nums) {
      let stack = []
      let result = new Array(nums.length).fill(-1)

      for (let i = 0; i < nums.length; i++) {
        while (
          stack.length > 0 &&
          nums[i] > nums[stack[stack.length - 1]]
        ) {
          let index = stack.pop()
          result[index] = nums[i]
        }
        stack.push(i)
      }

      return result
    }

---

### 19. Common Signals

You’ll see this pattern when:

- You need lexicographically smallest/largest result  
- You are allowed to remove elements  
- A better element can replace previous ones  
- Order matters  

---

### 20. Common Mistakes

---

#### Mistake 1: Not checking future availability

Removing element that won’t appear again  

---

#### Mistake 2: Not handling remaining k

Forgetting to remove leftover elements  

---

#### Mistake 3: Wrong comparison

Using wrong condition for pop  

---

### 21. Time Complexity

- Each element pushed once  
- Each element popped once  

Total → O(n)

---

### 22. Final Mental Model

Whenever you see:

- “Remove elements”  
- “Make smallest/largest number/string”  
- “Order matters”  

Think:

> “Can I use a stack and remove bad previous choices?”

---

### 23. Final Summary

Greedy + Stack:

- Use stack to build result  
- Remove bad decisions when better option appears  
- Maintain monotonic structure  
- Ensure optimal order  
