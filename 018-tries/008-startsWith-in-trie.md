### 1. StartsWith (Prefix Search) in Trie

After understanding search (which checks full words), the next important operation is:

Prefix search → `startsWith`

This is one of the biggest reasons Trie exists.

It allows us to answer:

Does any word start with this prefix?

---

### 2. Core Idea of Prefix Search

Unlike full search:

- We do NOT care if it is a complete word  
- We only care if the path exists  

So the logic becomes simpler:

Follow the prefix path → if it exists → return true

---

### 3. What Does startsWith Do?

Given a prefix:

```text
startsWith("app")
```

It answers:

Is there any word in the Trie that begins with `"app"`?

---

### 4. Example

Inserted words:

```text
app
apple
banana
```

Queries:

```text
startsWith("app") → true  
startsWith("appl") → true  
startsWith("ban") → true  
startsWith("bat") → false  
```

---

### 5. Prefix Traversal (Step-by-Step)

Let’s understand how traversal works.

Example:

```
a → p → p → l → e
```

Check:

```text
startsWith("app")
```

Steps:

1. Start at root  
2. Move to `'a'`  
3. Move to `'p'`  
4. Move to `'p'`  

Traversal successful.

Return:

```
true
```

---

### 6. Another Example: startsWith("bat")

Steps:

1. Start at root  
2. Try to move to `'b'`  
3. Node does not exist  

Return:

```
false
```

---

### 7. Why No End Marker is Needed

This is the most important concept in prefix search.

---

### 8. In Search (Full Word)

We check:

```
isEndOfWord === true
```

Because:

We want exact word match.

---

### 9. In startsWith (Prefix)

We do NOT check `isEndOfWord`.

Why?

Because prefix does not need to be a complete word.

---

### 10. Example to Understand This

Words:

```text
apple
```

Now check:

```text
startsWith("app")
```

Traversal:

```
a → p → p
```

Even though:

```
isEndOfWord === false
```

We still return:

```
true
```

Because:

- `"app"` is a valid prefix  
- Even if not a complete word  

---

### 11. Key Insight

Prefix search only cares about:

Does the path exist?

Not:

Does the word end here?

---

### 12. Algorithm for startsWith

Steps:

1. Start from root  
2. For each character in prefix:
   - If character not in children → return false  
   - Move to next node  
3. If traversal completes → return true  

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

  startsWith(prefix) {
    let current = this.root;

    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }

      current = current.children[char];
    }

    return true;
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

Every traversal begins at root.

---

#### Step 2: Traverse Prefix

```js
for (let char of prefix)
```

Process one character at a time.

---

#### Step 3: Check Path Exists

```js
if (!current.children[char]) {
  return false;
}
```

If path breaks → prefix does not exist.

---

#### Step 4: Move Forward

```js
current = current.children[char];
```

Continue traversal.

---

#### Step 5: Return True

```js
return true;
```

If traversal completes successfully.

---

### 15. Time Complexity

```
O(L)
```

Where:

- `L` = length of prefix  

Independent of number of stored words.

---

### 16. Search vs StartsWith (Key Difference)

| Operation | Checks Path | Checks End Marker |
|----------|------------|-------------------|
| search | Yes | Yes |
| startsWith | Yes | No |

---

### 17. Common Beginner Mistakes

---

#### Mistake 1: Checking `isEndOfWord` in startsWith

Wrong:

```js
return current.isEndOfWord;
```

Correct:

```js
return true;
```

---

#### Mistake 2: Confusing Prefix with Word

Remember:

- Prefix → path only  
- Word → path + end marker  

---

### 18. Mental Model

startsWith means:

If I can walk this path, then prefix exists.

It does not matter if the path ends a word.

---

### 19. Key Takeaway

Prefix search in Trie works by:

- Traversing character by character  
- Ensuring path exists  
- Ignoring end-of-word marker  

This makes it extremely efficient for:

- Autocomplete  
- Suggestions  
- Search systems  
