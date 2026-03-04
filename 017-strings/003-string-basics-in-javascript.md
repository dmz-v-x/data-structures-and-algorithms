## String Basics in JavaScript

### 1. Accessing Characters

A string is a sequence of characters stored in order.

Example:

    let str = "hello";

You can access characters using bracket notation:

    str[0]  // "h"
    str[1]  // "e"
    str[4]  // "o"

This works because internally JavaScript treats strings like arrays of UTF-16 code units.

Important:

Accessing a character is O(1).

That means constant time.

If index is out of bounds:

    str[10]  // undefined

No error is thrown.

---

Alternative method:

    str.charAt(0)  // "h"

Difference:

    str[10]        // undefined
    str.charAt(10) // ""

charAt returns empty string if index is invalid.

In DSA, bracket notation is more common and cleaner.

---

### 2. length Property

Every string has a length property:

    let str = "hello";
    str.length  // 5

Time complexity: O(1)

JavaScript stores length internally.

Important Unicode note:

    "😊".length  // 2

Because JavaScript counts UTF-16 code units, not visible characters.

If problem involves Unicode:

    [..."😊"].length  // 1

This counts actual characters.

For normal DSA problems (English letters), length works as expected.

---

### 3. Indexing

Indexing means accessing character using position.

String indices start from 0.

Example:

    let str = "DSA";

    Index:   0   1   2
             D   S   A

Important properties:

- Index starts at 0
- Last index = str.length - 1
- Negative indexing does not work:

    str[-1]  // undefined

If you want last character:

    str[str.length - 1]

Indexing is O(1) because:

JavaScript directly calculates memory offset of the code unit.

---

### 4. Iteration Methods

In DSA, most string problems require iterating through the string.

There are multiple ways.

Each has different behavior and use cases.

---

### 4.1 for Loop

This is the most fundamental and powerful method.

    let str = "hello";

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

Why this is important:

- You get access to index.
- You can move forward or backward.
- You can skip characters.
- You can use two pointers.

Example reverse iteration:

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }

In DSA, for loop is the most flexible approach.

Time complexity: O(n)

---

### 4.2 for…of Loop

This is cleaner syntax.

    let str = "hello";

    for (let ch of str) {
        console.log(ch);
    }

This gives:

    h
    e
    l
    l
    o

Important difference:

- You get character
- You do NOT get index directly

If you need index, you must track manually:

    let index = 0;
    for (let ch of str) {
        console.log(index, ch);
        index++;
    }

Unicode advantage:

for…of correctly handles Unicode characters.

Example:

    for (let ch of "😊") {
        console.log(ch);
    }

Prints:

    😊

Only once.

Whereas:

    for (let i = 0; i < "😊".length; i++) {
        console.log("😊"[i]);
    }

Prints broken surrogate pairs.

For interview problems with ASCII only, both are fine.

---

### 4.3 split()

split() converts string into an array.

Example:

    let str = "hello";
    let arr = str.split("");

    console.log(arr);
    // ["h", "e", "l", "l", "o"]

Now arr behaves like a normal array.

This is useful when:

- You need to modify characters
- You need sorting
- You need swapping
- You need in-place updates

Example reverse:

    let reversed = str.split("").reverse().join("");

Time complexity:

- split("") → O(n)
- reverse() → O(n)
- join("") → O(n)

Total → O(n)

Memory usage: O(n)

Important:

split("") does not properly handle Unicode emojis.

Better Unicode-safe alternative:

    Array.from(str)

---

### 4.4 Spread Operator

Spread operator also converts string into array.

    let str = "hello";
    let arr = [...str];

    console.log(arr);
    // ["h", "e", "l", "l", "o"]

Difference from split(""):

Spread handles Unicode correctly.

Example:

    [..."😊"]  // ["😊"]

Whereas:

    "😊".split("")  // ["�", "�"]

Because split works on code units.

Spread works on code points using iterator protocol.

In modern JavaScript, spread is preferred over split("") if Unicode safety matters.

---

### 5. Comparing Iteration Methods

Method | Gives Index | Unicode Safe | Modifiable | Use Case  
for loop | Yes | No (basic) | No | Most DSA problems  
for…of | No | Yes | No | Clean iteration  
split("") | No | No | Yes | Need array operations  
spread | No | Yes | Yes | Unicode-safe array conversion  

---

### 6. When to Use What in DSA

If you need:

Access by index → use for loop  
Two pointers → use for loop  
Frequency counting → either works  
Modify characters → convert to array  
Unicode correctness → use for…of or spread  

For most interview problems:

Use for loop unless specific need arises.

---

### 7. Performance Considerations

Accessing character → O(1)  
Getting length → O(1)  
Iterating once → O(n)  
split() → O(n) + extra memory  
spread → O(n) + extra memory  

Avoid unnecessary conversions inside loops.

Bad:

    for (...) {
        let arr = str.split("");
    }

This becomes O(n²).

---

### 8. Summary of String Basics

Concept | Key Idea  
Accessing character | str[i], O(1)  
length | O(1), counts code units  
Indexing | Starts at 0  
for loop | Most flexible  
for…of | Clean, Unicode safe  
split("") | Converts to array  
spread | Unicode-safe array conversion  

---

Final Mental Model:

A string in JavaScript behaves like:

An immutable array of UTF-16 code units with O(1) indexing and O(n) traversal.

Mastering these basics ensures that when we move into sliding window, hashing, and advanced string algorithms, we focus on logic instead of struggling with syntax or behavior.
