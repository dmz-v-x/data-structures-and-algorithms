## Greedy + Strings — Lexicographical Optimization Pattern

### 1. What is Greedy + Strings?

This pattern is used when:

- You are working with strings  
- You need to:
  - Make the string smallest or largest  
  - Remove characters  
  - Maintain order constraints  

---

### 2. Core Idea

At every step:

- Choose the best character (greedy choice)  
- Ensure the final string is:
  - Valid  
  - Optimal (usually lexicographically smallest/largest)

---

### 3. What is Lexicographical Order?

Lexicographical order means:

- Dictionary order  

Example:

a < b < c < d  

"abc" < "abd"  

---

### 4. When Does This Pattern Apply?

Use this pattern when:

- You see:
  - “smallest string”  
  - “largest string”  
  - “remove characters”  
- Order of characters matters  
- You cannot rearrange freely (must preserve relative order)

---

### 5. Key Challenges

- You cannot sort the string completely  
- You must maintain original order  
- You must decide which characters to keep/remove  

---

### 6. Pattern

---

Step 1:
Track frequency of characters  

---

Step 2:
Use a stack to build result  

---

Step 3:
For each character:

- Decrease its frequency  
- If already used → skip  

---

Step 4:
While:
- Stack not empty  
- Current character < top of stack  
- Top appears later again  

👉 Pop  

---

Step 5:
Push current character  

---

### 7. Example 1 — Remove Duplicate Letters

---

#### Problem

Remove duplicate letters so that:
- Every letter appears once  
- Result is smallest lexicographically  

---

### 8. Greedy Insight

- Keep characters as small as possible  
- Remove bigger ones if they appear again later  

---

### 9. Code

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

### 10. Key Insight

- Only remove a character if it appears later again  
- Maintain smallest possible order  

---

### 11. Example 2 — Smallest Subsequence of Distinct Characters

---

#### Problem

Return smallest subsequence with all unique characters  

---

### Insight

Same as previous problem  
- Uses same greedy + stack pattern  

---

### 12. Example 3 — Remove K Digits (String Version)

---

#### Problem

Remove k digits to form smallest number  

---

### Insight

- Treat digits as characters  
- Remove larger digits when smaller appears  

---

### 13. Why Greedy Works Here

Because:

- Choosing smaller characters earlier improves result  
- Removing larger characters (when safe) is optimal  

---

### 14. Important Condition (VERY IMPORTANT)

Only remove a character if:

- It appears again later  

---

Otherwise:
- You lose it permanently  
- Result becomes invalid  

---

### 15. Common Signals

You’ll see this pattern when:

- “Lexicographically smallest/largest”  
- “Remove characters”  
- “Keep order”  
- “Unique characters required”  

---

### 16. Common Mistakes

---

#### Mistake 1: Removing without checking future

May remove required character permanently  

---

#### Mistake 2: Not tracking visited

Leads to duplicates  

---

#### Mistake 3: Sorting string directly

Breaks order constraint  

---

### 17. Time Complexity

- Each character pushed once  
- Each character popped once  

Total → O(n)

---

### 18. Final Mental Model

Whenever you see:

- String optimization  
- Lexicographical order  
- Removal allowed  
- Order must be preserved  

Think:

> “Greedy + Stack + Frequency check”

---

### 19. Final Summary

Greedy + Strings:

- Build result step-by-step  
- Remove bad choices when better option appears  
- Ensure characters appear later before removing  
- Maintain lexicographical optimality  
