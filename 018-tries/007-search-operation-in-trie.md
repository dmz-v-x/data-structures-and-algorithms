### 1. Search Operation in Trie

Now that we can insert words into a Trie, the next step is:

How do we check if a word exists?

This is done using the search operation.

Search is one of the most important operations because it helps us understand how Trie differentiates between:

- A complete word  
- Just a prefix  

---

### 2. Core Idea of Search

Search works very similarly to insert, but with one key difference:

- We only traverse  
- We do NOT create nodes  

Process:

- Start from root  
- Move character by character  
- If path breaks → word does not exist  
- If path completes → check end-of-word marker  

---

### 3. Full Word Matching

Full word matching means:

We want to check:

Does the exact word exist in the Trie?

Example:

```text
Inserted words: "app", "apple"
```

Check:

```text
search("app") → true  
search("apple") → true  
search("appl") → false  
```

---

### 4. Step-by-Step Example: Search "apple"

Trie structure:

```
a → p → p → l → e (isEnd = true)
```

Steps:

1. Start at root  
2. Move to `'a'`  
3. Move to `'p'`  
4. Move to `'p'`  
5. Move to `'l'`  
6. Move to `'e'`  

Now check:

```
isEndOfWord === true
```

So result:

```
true
```

---

### 5. Step-by-Step Example: Search "appl"

Steps:

1. Traverse `'a' → 'p' → 'p' → 'l'`  
2. Path exists  
3. But:

```
isEndOfWord === false
```

So result:

```
false
```

---

### 6. Important Insight

Just because a path exists does NOT mean a word exists.

This is the most important concept in Trie search.

---

### 7. Word Exists vs Prefix Exists

This is where many beginners get confused.

---

### 8. Case 1: Word Exists

Condition:

- Full path exists  
- Last node has `isEndOfWord = true`  

Example:

```text
search("app") → true
```

---

### 9. Case 2: Prefix Exists (But Not Word)

Condition:

- Path exists  
- Last node has `isEndOfWord = false`  

Example:

```text
search("appl") → false
```

But:

```text
startsWith("appl") → true
```

---

### 10. Case 3: Neither Exists

Condition:

- Path breaks midway  

Example:

```text
search("bat") → false
```

Traversal fails.

---

### 11. Why This Difference Matters

This distinction allows Trie to support:

- Exact word search  
- Prefix search  
- Autocomplete  
- Pattern matching  

Without `isEndOfWord`, we cannot differentiate these cases.

---

### 12. Algorithm for Search

Steps:

1. Start from root  
2. For each character:
   - If character not in children → return false  
   - Move to next node  
3. After traversal:
   - If `isEndOfWord === true` → return true  
   - Else → return false  

---

### 13. JavaScript Implementation

```js
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  search(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }

      current = current.children[char];
    }

    return current.isEndOfWord;
  }
}
```

---

### 14. Understanding the Code Step by Step

---

#### Step 1: Start from Root

```js
let current = this.root;
```

Every search begins at root.

---

#### Step 2: Traverse Characters

```js
for (let char of word)
```

Process one character at a time.

---

#### Step 3: Check Path Exists

```js
if (!current.children[char]) {
  return false;
}
```

If path breaks:

Word does not exist.

---

#### Step 4: Move Forward

```js
current = current.children[char];
```

Continue traversal.

---

#### Step 5: Final Check

```js
return current.isEndOfWord;
```

This determines:

- True → word exists  
- False → only prefix exists  

---

### 15. Time Complexity of Search

```
O(L)
```

Where:

- `L` = length of word  

Independent of total number of words.

---

### 16. Common Beginner Mistakes

---

#### Mistake 1: Ignoring `isEndOfWord`

Leads to:

- Treating prefixes as full words  

---

#### Mistake 2: Returning True Too Early

Wrong:

Returning true just because path exists.

Correct:

Check `isEndOfWord`.

---

#### Mistake 3: Confusing Search with StartsWith

Search:

- Checks full word  

StartsWith:

- Checks only prefix  

---

### 17. Mental Model for Search

Search is:

Follow the path → then verify ending.

Not:

Scan all words.

---

### 18. Key Takeaway

Search operation works by:

- Traversing character by character  
- Ensuring path exists  
- Checking if the word actually ends  

This allows Trie to clearly distinguish between:

- A complete word  
- A partial prefix  
