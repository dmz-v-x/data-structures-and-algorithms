### 1. Insert Operation in Trie

Now that we have the Trie structure (root + nodes), the next step is:

How do we actually store words inside it?

This is done using the insert operation.

The insert operation builds the Trie step by step using characters of the word.

---

### 2. Core Idea of Insert

The insert process works like this:

- Start from the root  
- Process the word one character at a time  
- Move down the tree  
- Create nodes if they don’t exist  
- Mark the end of the word  

This is called:

Character-by-character traversal.

---

### 3. Why Character-by-Character?

Because Trie stores:

- Characters → in nodes  
- Words → as paths  

So instead of inserting `"apple"` as a whole:

We insert:

```
'a' → 'p' → 'p' → 'l' → 'e'
```

---

### 4. Step-by-Step Example: Insert "apple"

Start with an empty Trie.

---

### 5. Step 1: Start from Root

Always begin at:

```
this.root
```

This is the entry point for all words.

---

### 6. Step 2: Process First Character `'a'`

- Check if `'a'` exists in root.children  
- If not → create a new node  

```
root
 └── a
```

---

### 7. Step 3: Move to `'p'`

- From node `'a'`, check for `'p'`  
- If missing → create  

```
a → p
```

---

### 8. Step 4: Next `'p'`

Repeat same process:

```
a → p → p
```

---

### 9. Step 5: Add `'l'` and `'e'`

Continue:

```
a → p → p → l → e
```

---

### 10. Step 6: Mark End of Word

At the last node (`'e'`):

```
isEndOfWord = true
```

This tells:

A valid word ends here.

---

### 11. Final Structure After "apple"

```
root
 └── a
      └── p
           └── p
                └── l
                     └── e (isEnd = true)
```

---

### 12. Insert Another Word: "app"

Now insert `"app"`.

---

### 13. Traversal Reuses Existing Nodes

- `'a'` already exists  
- `'p'` already exists  
- `'p'` already exists  

So no new nodes are created.

---

### 14. Mark End at Second `'p'`

```
a → p → p (isEnd = true)
```

Now Trie becomes:

```
root
 └── a
      └── p
           └── p (isEnd = true)
                └── l
                     └── e (isEnd = true)
```

---

### 15. Important Concept: Reuse of Prefix

This shows the power of Trie:

- No duplication of `"app"`  
- Shared prefix is reused  
- Only new parts are added  

---

### 16. Algorithm for Insert

Now let’s formalize the steps:

1. Start from root  
2. For each character in word:
   - If character not in children → create node  
   - Move to that node  
3. After last character → mark `isEndOfWord = true`  

---

### 17. JavaScript Implementation

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

  insert(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }

      current = current.children[char];
    }

    current.isEndOfWord = true;
  }
}
```

---

### 18. Understanding the Code Step by Step

---

#### Step 1: Start at Root

```js
let current = this.root;
```

We begin traversal from root.

---

#### Step 2: Loop Through Characters

```js
for (let char of word)
```

We process each character one by one.

---

#### Step 3: Check If Node Exists

```js
if (!current.children[char])
```

If the path does not exist:

Create a new node.

---

#### Step 4: Move Forward

```js
current = current.children[char];
```

Traverse deeper into the Trie.

---

#### Step 5: Mark End of Word

```js
current.isEndOfWord = true;
```

Indicates that a valid word ends here.

---

### 19. Why Traversal Always Starts from Root

This is a very important concept.

---

#### Reason 1: Root is the Common Entry Point

All words originate from root.

Example:

```
cat, dog, apple
```

All start from the same root node.

---

#### Reason 2: Ensures Consistent Structure

If we start from different places:

- Structure becomes inconsistent  
- Words may not connect properly  

---

#### Reason 3: Enables Prefix Sharing

Starting from root ensures:

- Shared prefixes merge naturally  
- No duplication  

---

#### Reason 4: Guarantees Correct Traversal

Every word follows:

```
root → character → character → ...
```

This predictable pattern is essential.

---

### 20. Time Complexity of Insert

```
O(L)
```

Where:

- `L` = length of word  

We process each character once.

---

### 21. Common Beginner Mistakes

---

#### Mistake 1: Not Updating Current Pointer

Forgetting:

```js
current = current.children[char];
```

This breaks traversal.

---

#### Mistake 2: Not Marking End of Word

Leads to:

- Words not being recognized later  

---

#### Mistake 3: Recreating Nodes Always

Incorrect:

Always creating new nodes even if they exist.

Correct:

Only create when missing.

---

### 22. Key Takeaway

Insert operation works by:

- Starting from root  
- Traversing character by character  
- Creating nodes only when needed  
- Marking the end of the word  

This builds the Trie efficiently while sharing prefixes.

