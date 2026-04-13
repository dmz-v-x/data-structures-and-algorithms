### 1. Delete Operation in Trie

Delete is the most conceptually difficult operation in Trie.

Why?

Because removing a word is not just about deleting characters.  
You must ensure:

- You do not break other words  
- You only remove what is unnecessary  
- Shared prefixes remain intact  

This makes delete more complex than insert and search.

---

### 2. Core Problem in Delete

When deleting a word, we must answer:

- Can this node be safely removed?  
- Is this node used by another word?  

Trie nodes are often shared between multiple words, so careless deletion can corrupt the structure.

---

### 3. Two Main Challenges

---

#### 1. Removing Nodes Safely

You cannot blindly delete nodes.

Example:

```text
app
apple
```

If you delete `"app"`:

- You must NOT delete nodes used by `"apple"`  

---

#### 2. Handling Shared Prefixes

Multiple words may share the same prefix:

```text
car
cat
cap
```

Deleting `"car"` should NOT affect:

- `"cat"`  
- `"cap"`  

---

### 4. Key Idea of Delete

Delete works in two phases:

1. Traverse to the word  
2. Decide whether to remove nodes while backtracking  

Important:

Deletion often happens **from bottom to top (reverse direction)**.

---

### 5. Cases in Delete Operation

Understanding these cases is critical.

---

### 6. Case 1: Word is a Prefix of Another Word

Example:

```text
app
apple
```

Delete:

```text
delete("app")
```

---

#### What Happens?

- `"app"` ends at second `'p'`  
- `"apple"` continues further  

---

#### Action:

- Do NOT delete nodes  
- Just set:

```
isEndOfWord = false
```

---

#### Result:

```
app → removed as a word  
apple → still exists  
```

---

### 7. Case 2: Word Shares Prefix with Other Words

Example:

```text
car
cat
cap
```

Delete:

```text
delete("car")
```

---

#### What Happens?

- Nodes `'c' → 'a'` are shared  
- Only `'r'` is unique to `"car"`  

---

#### Action:

- Delete node `'r'`  
- Keep rest intact  

---

#### Result:

```
cat → exists  
cap → exists  
car → removed  
```

---

### 8. Case 3: Word Has a Unique Branch

Example:

```text
dog
```

Delete:

```text
delete("dog")
```

---

#### What Happens?

- No other word shares this path  

---

#### Action:

- Delete entire branch  

---

#### Result:

Trie becomes empty (if no other words exist).

---

### 9. When Can We Delete a Node?

A node can be safely deleted if:

1. It has no children  
2. It is not the end of another word  

If both conditions are true → safe to remove.

---

### 10. Algorithm for Delete

Steps:

1. Traverse to the word  
2. If word not found → return  
3. Unmark `isEndOfWord`  
4. Backtrack:
   - If node has no children AND is not end of another word → delete it  
   - Continue upward  

---

### 11. Why Backtracking is Needed

Deletion decisions depend on future nodes.

You only know if a node is safe to delete after checking:

- Its children  
- Its role in other words  

So deletion must happen while returning back up the recursion.

---

### 12. JavaScript Implementation

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

  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(node, word, index) {
    if (index === word.length) {
      if (!node.isEndOfWord) return false;

      node.isEndOfWord = false;

      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    const child = node.children[char];

    if (!child) return false;

    const shouldDeleteChild = this._deleteHelper(child, word, index + 1);

    if (shouldDeleteChild) {
      delete node.children[char];

      return (
        Object.keys(node.children).length === 0 &&
        !node.isEndOfWord
      );
    }

    return false;
  }
}
```

---

### 13. Understanding the Code Step by Step

---

#### Step 1: Traverse to End of Word

```js
if (index === word.length)
```

We reached the target word.

---

#### Step 2: Unmark Word

```js
node.isEndOfWord = false;
```

Removes the word logically.

---

#### Step 3: Check If Node Can Be Deleted

```js
Object.keys(node.children).length === 0
```

If no children → candidate for deletion.

---

#### Step 4: Backtracking Decision

```js
const shouldDeleteChild = ...
```

Child tells parent:

Can I be deleted?

---

#### Step 5: Delete Child Reference

```js
delete node.children[char];
```

Removes node safely.

---

#### Step 6: Propagate Upward

Continue deletion only if:

- No children left  
- Not end of another word  

---

### 14. Time Complexity

```
O(L)
```

Where:

- `L` = length of word  

We traverse once down and back up.

---

### 15. Common Beginner Mistakes

---

#### Mistake 1: Deleting Nodes Without Checking Children

Breaks other words.

---

#### Mistake 2: Forgetting `isEndOfWord`

Leads to incorrect deletion.

---

#### Mistake 3: Not Using Backtracking

Delete cannot be done in one pass forward.

---

### 16. Mental Model

Delete is:

Unmark → then clean up unnecessary nodes.

Not:

Directly remove everything.

---

### 17. Key Takeaway

Trie deletion works by:

- Carefully identifying what can be removed  
- Preserving shared prefixes  
- Using backtracking to clean safely  

This ensures:

- No data corruption  
- Efficient memory usage  
