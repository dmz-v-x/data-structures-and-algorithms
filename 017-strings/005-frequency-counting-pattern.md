## Frequency Counting Pattern

### 1. What is Frequency Counting?

Frequency counting means:

Counting how many times each element appears.

For strings, that means:

Counting how many times each character appears.

Example:

    "banana"

Character counts:

    b → 1
    a → 3
    n → 2

This structure (character → count) is called a frequency table.

---

### 2. When Should You Think of Frequency Counting?

Use frequency counting when the question involves:

- Count occurrences
- Compare two strings
- Check anagram
- Detect duplicates
- Find most frequent element
- Sliding window with character constraints

If the problem says:
- "How many times"
- "Frequency"
- "Count"
- "Repeated"
- "Unique"
- "Anagram"

You should immediately think: Frequency Map.

---

## Now Let’s Study All 4 Ways to Implement It

---

## Method 1: Using Object

This is the most common beginner-friendly approach.

Example:

    let str = "banana";
    let freq = {};

    for (let ch of str) {
        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

Result:

    {
      b: 1,
      a: 3,
      n: 2
    }

Cleaner version:

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

Why this works:

- Object keys are strings.
- Characters are strings.
- So direct mapping is easy.

Time complexity:
O(n)

Space complexity:
O(k) where k = unique characters

When to use:

- General string problems
- When character set is unknown
- When characters may include symbols
- When simplicity matters

Limitations:

- Slower than array indexing
- Keys are strings (slight overhead)
- Order is not guaranteed (usually not important in DSA)

---

## Method 2: Using Map

Map is more powerful and modern.

Example:

    let str = "banana";
    let freq = new Map();

    for (let ch of str) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

Access:

    freq.get("a");  // 3

Why use Map?

- Better performance for large data
- Keys can be any type (not just strings)
- Preserves insertion order

Time complexity:
O(n)

When to use:

- Large datasets
- When keys are not simple strings
- When insertion order matters
- When you want cleaner semantics

Comparison:

Object:
- Simpler
- Very common in interviews

Map:
- More explicit
- Slightly cleaner API

In interviews:
Object is usually acceptable unless specified.

---

## Method 3: Using Array of Size 26 (For Lowercase English Letters)

This is a performance-optimized approach.

Use when:
Problem guarantees only lowercase letters a–z.

Idea:

Since there are only 26 lowercase letters,
We can map:

    'a' → 0
    'b' → 1
    ...
    'z' → 25

Implementation:

    let str = "banana";
    let freq = new Array(26).fill(0);

    for (let ch of str) {
        let index = ch.charCodeAt(0) - "a".charCodeAt(0);
        freq[index]++;
    }

Now:

    freq[0]  // count of 'a'
    freq[1]  // count of 'b'

Why this is powerful:

- Fastest method
- No hashing
- Direct indexing
- Constant size array

Time complexity:
O(n)

Space complexity:
O(1) because array size is fixed (26)

When to use:

- Anagram problems
- Only lowercase letters
- Competitive programming
- When maximum performance is required

Example: Check Anagram

    function isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let freq = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            freq[s.charCodeAt(i) - 97]++;
            freq[t.charCodeAt(i) - 97]--;
        }

        return freq.every(count => count === 0);
    }

This is highly optimized.

---

## Method 4: Using ASCII Array (Size 128 or 256)

Use when:
Characters include:
- Uppercase
- Lowercase
- Digits
- Symbols

ASCII has 128 characters (basic set).

Implementation:

    let str = "Hello123!";
    let freq = new Array(128).fill(0);

    for (let ch of str) {
        freq[ch.charCodeAt(0)]++;
    }

Now:

    freq[65]  // count of 'A'
    freq[97]  // count of 'a'

Why this works:

charCodeAt gives ASCII code.
We use that directly as index.

Time complexity:
O(n)

Space complexity:
O(1) because 128 is constant.

When to use:

- Mixed characters
- Case-sensitive problems
- Performance-critical code
- Sliding window problems

Common in:

- Longest substring without repeating characters
- Character replacement problems

---

## Comparison of All 4 Methods

Method | Use Case | Speed | Space | Flexibility  
Object | General problems | Good | O(k) | High  
Map | Large datasets | Good | O(k) | Very High  
Array(26) | Lowercase only | Fastest | O(1) | Low  
Array(128) | ASCII only | Very Fast | O(1) | Medium  

---

## When to Use Which?

Use Object when:
- You don't know character constraints.
- Problem is simple.
- Interview setting.

Use Map when:
- Keys are complex.
- You want cleaner API.
- Order matters.

Use Array(26) when:
- Only lowercase letters.
- Need fastest solution.
- Competitive programming.

Use ASCII array (128/256) when:
- Mixed characters.
- Need fixed memory.
- Sliding window problems.

---

## Advanced Insight: Why Arrays Are Faster

Objects use hashing internally.

Arrays use direct memory indexing.

So:

    freq[ch]

vs

    freq[ch.charCodeAt(0)]

The second avoids hashing and is faster.

In big input problems, this difference matters.

---

## Real Interview Pattern Example

Problem:
Find first non-repeating character.

Step 1:
Build frequency map.

Step 2:
Traverse string again to find first char with count 1.

Works with:
- Object
- Map
- Array(26)
- ASCII array

Choice depends on constraints.

---

## Final Mental Model

Frequency counting means:

Convert characters into numeric buckets.

Depending on constraints:

- Unknown characters → Object
- Lowercase only → 26 array
- ASCII → 128 array
- General structured mapping → Map
