## Introduction to Strings

Before solving any string problem in DSA, we must deeply understand what a string actually is — not just at surface level, but how it is stored, interpreted, and processed internally in JavaScript.

This foundation will make advanced algorithms like KMP, Rabin-Karp, sliding window, hashing, and palindrome problems much easier to understand later.

---

### 1. What is a String?

A string is a sequence of characters arranged in a specific order.

Example in JavaScript:

    let str = "hello";

Here:
- "hello" is a string
- It contains 5 characters: h, e, l, l, o

Conceptually:

    "hello"
      0 1 2 3 4

Each character has:
- A position (index)
- A numeric representation internally

Important property:

In JavaScript, strings are immutable.

This means once created, you cannot change a character directly.

    let str = "hello";
    str[0] = "H"; // This does NOT modify the string

Instead, JavaScript creates a new string if modification is needed.

This is extremely important in DSA because string concatenation inside loops can increase time complexity significantly.

---

### 2. Character vs String

Understanding this distinction builds clarity.

Character:
A character is a single unit of text.

Examples:
- "a"
- "Z"
- "7"
- "@"

In many languages like C or C++, character is a separate data type.

But in JavaScript:

There is no separate character type.

Even "a" is technically a string of length 1.

    typeof "a"  // "string"

So in JavaScript:
- "a" → string
- "hello" → string
The only difference is length.

String:
A string is simply a collection of characters stored sequentially.

Example:

    "DSA"

D → character  
S → character  
A → character  

---

### 3. ASCII vs Unicode

Computers do not understand letters.

They understand numbers (binary).

So every character must be converted to a number.

ASCII (American Standard Code for Information Interchange):

ASCII is a character encoding system that maps characters to numbers.

Examples:

Character | ASCII Code  
A         | 65  
a         | 97  
0         | 48  
space     | 32  

Example in JavaScript:

    "A".charCodeAt(0) // 65

ASCII uses:
- 7 bits
- Total 128 characters

Limitation:
ASCII only supports English characters.
It cannot represent Hindi, Chinese, emojis, accented letters, etc.

Unicode:

To solve ASCII limitations, Unicode was created.

Unicode supports:
- All languages
- Emojis
- Mathematical symbols
- Special scripts

Unicode assigns each character a unique number called a code point.

Examples:

Character | Unicode Code Point  
A         | U+0041  
a         | U+0061  
😊        | U+1F60A  
₹         | U+20B9  

Unicode can represent more than one million characters.

---

### 4. UTF-16 in JavaScript

JavaScript does not store strings as ASCII.

JavaScript uses UTF-16 encoding internally.

What is UTF-16?

UTF-16 is a way of encoding Unicode characters.

In UTF-16:
- Most characters use 16 bits (2 bytes)
- Some special characters (like emojis) use 32 bits (4 bytes)

Normal character example:

    "A"

Unicode code point:
    U+0041

Stored in UTF-16 as a single 16-bit unit.

Emoji example:

    "😊"

Unicode code point:
    U+1F60A

This value is larger than 16 bits.

So UTF-16 stores it using two 16-bit units, called a surrogate pair.

Important:

    "😊".length  // 2

Even though visually it is one character.

JavaScript counts UTF-16 code units, not actual characters.

---

### 5. Code Units vs Code Points

This is a common source of bugs in string problems.

Code Unit:
A code unit is the basic storage block used by UTF-16.

In JavaScript:
Each string index represents one 16-bit code unit.

Example:

    "hello".length  // 5

Each character fits in one code unit.

But:

    "😊".length  // 2

Because it uses two UTF-16 code units.

Code Point:
A code point is the actual Unicode number representing the character.

Example:

    "😊".codePointAt(0)  // 128522

This returns the real Unicode value.

Why this matters in DSA:

If a problem involves:
- Unicode
- Emojis
- International characters

Then:

    str.length

may not reflect the real character count.

Better approach:

    [...str].length

or

    Array.from(str).length

These correctly count Unicode characters.

---

### 6. Why String Handling Matters in DSA

Strings are one of the most frequently asked topics in interviews.

They combine multiple data structure concepts:
- Arrays
- Hashing
- Two pointers
- Sliding window
- Recursion
- Dynamic programming
- Pattern matching
- Greedy algorithms

Common real-world applications:
1. Substring search
2. Palindrome validation
3. Parentheses validation
4. Text compression
5. Autocomplete systems
6. Spell checking
7. DNA sequence analysis

Performance importance:

Because strings are immutable:

    let result = "";
    for (let i = 0; i < n; i++) {
      result += str[i];
    }

This can become O(n²).

Better approach:

    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(str[i]);
    }
    return arr.join("");

Understanding internal representation helps optimize solutions.

---

### 7. Summary of Core Concepts

Concept | Key Idea  
String | Sequence of characters  
Character | Single text unit (still string in JS)  
ASCII | 128-character encoding  
Unicode | Universal character system  
UTF-16 | Encoding used by JavaScript  
Code Unit | 16-bit storage block  
Code Point | Actual Unicode value  
Immutability | Strings cannot be modified directly  

---

Final Mental Model:

Think of a JavaScript string as:

A sequence of UTF-16 code units stored immutably.

Each index:
- Points to a 16-bit unit
- Not necessarily a full character

This understanding prevents:
- Length bugs
- Emoji miscount issues
- Incorrect substring logic
- Hidden time complexity mistakes

This foundation is mandatory before moving into string algorithms and DSA patterns.
