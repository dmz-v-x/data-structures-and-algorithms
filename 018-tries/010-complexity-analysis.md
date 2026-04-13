### 1. Time Complexity Deep Dive

Now that you understand how Trie operations work, let’s deeply analyze their time complexity.

The most important insight:

Trie complexity depends on **word length (L)**, not number of words (N).

---

### 2. Insert Operation Complexity

Insert works by:

- Traversing each character  
- Creating nodes if needed  

If word length = `L`:

```
Time Complexity = O(L)
```

---

### 3. Why Insert is O(L)

For each character:

- One lookup in `children`  
- Possibly one node creation  

Total operations = number of characters.

So:

```
O(L)
```

Independent of how many words are already stored.

---

### 4. Search Operation Complexity

Search also works character-by-character.

Steps:

- Traverse each character  
- Check if path exists  

So:

```
Time Complexity = O(L)
```

---

### 5. Prefix Search Complexity (startsWith)

Prefix search is even simpler:

- Traverse prefix characters  
- No need to check end marker  

So:

```
Time Complexity = O(L)
```

---

### 6. Key Insight

All Trie operations:

- Insert  
- Search  
- Prefix  

Depend only on:

```
Length of input string (L)
```

NOT:

```
Number of stored words (N)
```

---

### 7. Why This is Powerful

Compare with arrays / hashmaps:

```
Array Prefix Search → O(N × L)
Trie Prefix Search → O(L)
```

Trie eliminates dependency on dataset size.

---

### 8. Space Complexity Reality

Time efficiency comes at a cost:

Memory.

Trie is **memory-heavy**.

---

### 9. What Does Each Node Store?

Each node contains:

- `children` (references to next nodes)  
- `isEndOfWord` (boolean)  

---

### 10. Worst Case Memory Usage

Worst case occurs when:

- No words share prefixes  

Example:

```text
cat, dog, sun
```

Trie becomes:

```
Separate branches for each word
```

Total nodes ≈ total characters.

So:

```
Space Complexity = O(N × L)
```

Where:

- `N` = number of words  
- `L` = average length  

---

### 11. Prefix Sharing Benefit

Best case occurs when many words share prefixes.

Example:

```text
app
apple
application
```

Shared structure:

```
a → p → p → ...
```

Instead of storing `"app"` multiple times:

- It is stored once  

This reduces memory usage significantly.

---

### 12. Real-World Benefit

In real datasets (like dictionaries):

- Many words share prefixes  
- Trie becomes efficient  

Example:

```text
auto, automatic, automation
```

Large prefix reuse.

---

### 13. When Trie Becomes Expensive

Trie becomes inefficient when:

---

#### Case 1: No Shared Prefixes

Example:

```text
xqz, plm, rty
```

No reuse → high memory.

---

#### Case 2: Very Large Alphabet

Example:

- Unicode characters  
- Large character sets  

Each node may store many children.

---

#### Case 3: Sparse Data

Few words but long lengths.

Overhead of nodes becomes costly.

---

### 14. Summary of Space Complexity

| Scenario | Space Usage |
|----------|-----------|
| Worst case | O(N × L) |
| Best case | Much less (due to sharing) |

---

### 15. Children Storage: Object vs Map vs Array

Now let’s analyze how storing `children` affects performance.

---

### 16. Object `{}`

Structure:

```js
children = {}
```

---

#### Speed

- Average O(1) lookup  

---

#### Memory

- Efficient when few children  
- Only stores existing characters  

---

#### Use Case

- Most common  
- Best for interviews  
- Dynamic character sets  

---

### 17. Map

Structure:

```js
children = new Map()
```

---

#### Speed

- O(1) lookup (slightly different internals)  

---

#### Memory

- Slightly more overhead than object  

---

#### Use Case

- Cleaner API  
- Safer key handling  

---

### 18. Fixed-Size Array

Structure:

```js
children = new Array(26)
```

---

#### Speed

- Fastest possible access  

```
O(1) direct indexing
```

---

#### Memory

- Always allocates full size  
- Many unused slots  

---

#### Use Case

- Fixed alphabet (a–z)  
- Performance-critical systems  

---

### 19. Trade-Off Comparison

| Strategy | Speed | Memory | Flexibility | Use Case |
|----------|------|--------|-------------|----------|
| Object | Good | Efficient | High | General use |
| Map | Good | Moderate | High | Cleaner design |
| Array | Best | High | Low | Fixed alphabet |

---

### 20. Important Insight

Choosing children structure affects:

- Constant factors in runtime  
- Memory usage  
- Code complexity  

But overall complexity remains:

```
O(L)
```

---

### 21. Final Mental Model

Trie gives:

- Fast operations → O(L)  
- Prefix efficiency  
- Structured traversal  

But costs:

- Higher memory usage  
- More complex implementation  

---

### 22. Final Takeaway

Trie is a trade-off:

- Time efficiency (excellent)  
- Memory usage (high)  

Use Trie when:

- Prefix queries are frequent  
- Dataset is large  
- Performance matters  

Avoid Trie when:

- Only exact lookup needed  
- Memory is constrained  
