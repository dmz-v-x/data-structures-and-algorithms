### 1. What is a Trie?

A Trie (also called a Prefix Tree) is a special type of data structure designed specifically for storing and searching strings efficiently, especially when dealing with prefixes.

Unlike traditional data structures that store whole words as independent entries, a Trie breaks words into characters and organizes them in a tree-like structure.

This allows it to take advantage of shared prefixes between words.

---

### 2. Core Idea of Trie

To understand Trie deeply, focus on this one idea:

A Trie stores words by splitting them into characters and connecting those characters in a tree structure.

Instead of storing:

```text
["apple", "app", "application"]
```

We store relationships between characters.

---

### 3. Tree-Like Structure

A Trie is a tree.

- It starts from a single root node
- Each node branches into multiple children
- Each branch represents a character

Think of it as:

A decision tree where each step chooses the next character.

---

### 4. Each Node Represents a Character

In a Trie:

- Every node represents one character
- Nodes are connected to form words

Example:

For the word `"cat"`:

```
root → c → a → t
```

Each node stores:

- The character (implicitly or explicitly)
- Links to next possible characters

---

### 5. Path Represents a Word

A very important concept:

A word is not stored in one place.

Instead:

A word is formed by traversing from root to a node.

Example:

```
root → c → a → t
```

This path represents the word `"cat"`.

So:

- Nodes = characters  
- Path = word  

---

### 6. Prefix Sharing (Most Important Concept)

This is the heart of Trie.

If multiple words share a prefix, they share the same path in the Trie.

Example words:

```text
app
apple
application
```

Trie structure:

```
root
 └── a
      └── p
           └── p
                ├── l → e
                └── l → i → c → a → t → i → o → n
```

Observation:

- `"app"` is shared by all words
- No duplication of prefix
- Memory and computation are optimized

This is what makes Trie powerful.

---

### 7. Key Properties of Trie

Now let’s break down the essential building blocks.

---

### 8. Root Node

- The starting point of the Trie
- Does not store any character
- Represents an empty string

All operations begin from the root.

---

### 9. Children Nodes

Each node can have multiple children.

- Each child represents a possible next character
- Typically stored as:
  - Object (`{}`)
  - Map
  - Array (for fixed alphabets)

Example:

If node `"a"` has children `"p"` and `"b"`:

```
a
├── p
└── b
```

---

### 10. End-of-Word Marker

Important concept:

How do we know a word actually ends?

Example:

```text
app
apple
```

Both share the same prefix `"app"`.

We need a way to differentiate:

- `"app"` is a complete word
- `"apple"` is a longer word

Solution:

Each node has a flag:

```
isEndOfWord = true/false
```

Example:

```
root
 └── a
      └── p
           └── p (isEnd = true)
                └── l
                     └── e (isEnd = true)
```

So:

- `"app"` ends at second `p`
- `"apple"` ends at `e`

---

### 11. Putting It All Together

Let’s combine everything.

Words:

```text
cat
car
dog
```

Trie:

```
root
 ├── c
 │    └── a
 │         ├── t (isEnd = true)
 │         └── r (isEnd = true)
 │
 └── d
      └── o
           └── g (isEnd = true)
```

Key observations:

- Shared prefix `"ca"`
- Separate branches for different endings
- Each word ends at a marked node

---

### 12. Mental Model to Remember Forever

Think of Trie as:

A map of character decisions.

At each step:

- You choose the next character
- You follow a path
- If path exists → word/prefix exists
- If path breaks → word does not exist

---

### 13. Why This Structure is Powerful

Because it allows:

- Fast prefix lookup  
- No repeated prefix storage  
- Guided traversal instead of scanning  

Everything becomes:

Follow the path → instead of search everything

---

### 14. Final Takeaway

A Trie is:

- A tree where each node represents a character  
- A path from root to node represents a word  
- Prefixes are shared across words  
- Special markers indicate valid words  

This structure transforms string problems from:

Scan everything → to → follow the path
