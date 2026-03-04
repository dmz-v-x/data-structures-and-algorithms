## How Strings Work in JavaScript Internally

### 1. Strings Are Immutable

Immutability means:

Once a string is created, it cannot be changed.

Example:

    let str = "hello";
    str[0] = "H";

After this, `str` is still:

    "hello"

JavaScript does not allow direct modification of characters.

Why?

Because internally, strings are stored in memory as fixed sequences of UTF-16 code units. That memory block cannot be altered character-by-character.

So when you think you are modifying a string, you are not changing it — you are creating a new string.

This has deep implications in DSA.

---

### 2. Memory Model of Strings

Let us understand what happens in memory.

When you write:

    let str = "hello";

Memory roughly looks like this:

    str  ──►  "hello"
               h e l l o

Each character is stored as a UTF-16 code unit.

Important points:

- Strings are stored as contiguous sequences of 16-bit code units.
- The memory size depends on the number of code units.
- Emojis may take 2 code units (32 bits).

For example:

    "A" → 1 code unit
    "😊" → 2 code units

So:

    "😊".length  // 2

Even though visually it is one character.

---

### 3. Why Modifying a String Creates a New String

Consider:

    let str = "hello";
    str = "Hello";

Did we modify the original string?

No.

What happened internally:

1. "hello" was stored in memory.
2. "Hello" is a completely new string.
3. The variable `str` now points to a new memory location.
4. The old string may be garbage collected.

Even something like:

    str += "!";

Internally becomes:

    str = str + "!";

Which means:
- Create new string
- Copy old characters
- Add new character
- Assign new memory reference

This copying operation takes time proportional to the string length.

This is why repeated concatenation inside a loop is expensive.

---

### 4. Time Complexity of String Operations

Understanding time complexity here is critical for DSA.

Let n = length of string.

Access character:

    str[i]

Time Complexity: O(1)

Because indexing into UTF-16 code unit array is constant time.

Length property:

    str.length

Time Complexity: O(1)

JavaScript stores length internally.

Substring extraction:

    str.slice(a, b)
    str.substring(a, b)

Time Complexity: O(k)

Where k = length of extracted substring.

Because a new string must be created.

Concatenation:

    str1 + str2

Time Complexity: O(n + m)

Because a new string is created and both are copied.

Concatenation inside loop:

    let result = "";
    for (let i = 0; i < n; i++) {
        result += str[i];
    }

Worst-case complexity: O(n²)

Why?

Each concatenation copies the entire previous string.

Better approach:

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(str[i]);
    }
    return arr.join("");

This becomes O(n).

Important for interviews:
Many candidates accidentally write O(n²) string solutions.

---

### 5. Primitive String vs String Object

This is a subtle but important concept.

Primitive string:

    let str = "hello";

Type:

    typeof str  // "string"

This is the normal and recommended way.

String object:

    let strObj = new String("hello");

Type:

    typeof strObj  // "object"

This creates a wrapper object around the string.

Difference:

Primitive string:

- Lightweight
- Stored directly as value
- Recommended for DSA

String object:

- Stored as object
- Has additional internal structure
- Rarely needed

Example comparison:

    let a = "hello";
    let b = new String("hello");

    a === b  // false

Why?

Because:
- a is primitive
- b is object

Strict equality fails.

However:

    a == b  // true

Because loose equality converts object to primitive.

In DSA and interviews:

Always use primitive strings.

Never use:

    new String()

---

### 6. Autoboxing (Advanced Concept)

Even though strings are primitives, you can do:

    "hello".toUpperCase();

How?

JavaScript temporarily wraps the primitive string into a String object internally. This is called autoboxing.

Steps:

1. Primitive is temporarily converted to String object.
2. Method is executed.
3. Object is discarded.

This happens automatically.

You do not need to manually create String objects.

---

### 7. Garbage Collection and Strings

Since strings are immutable:

Every modification creates a new string.

If old strings are no longer referenced, JavaScript's garbage collector removes them from memory.

In heavy string manipulation problems, too many intermediate strings can increase memory usage.

This is why:
- Sometimes using arrays is more efficient.
- Sometimes using buffers (in other languages) is preferred.

---

### 8. Performance Implications in DSA

Key lessons:

1. Avoid repeated string concatenation inside loops.
2. Understand that substring creates new memory.
3. Know that indexing is O(1).
4. Understand that immutability means no in-place modification.
5. Convert to array if frequent updates are needed.

Example transformation pattern:

Instead of:

    str = str.slice(0, i) + "X" + str.slice(i + 1);

Better:

    let arr = str.split("");
    arr[i] = "X";
    str = arr.join("");

This avoids repeated copying.

---

### 9. Summary of Internal Behavior

Concept | Key Idea  
Immutability | Strings cannot be changed after creation  
Memory Storage | Stored as UTF-16 code units  
Modification | Creates new string in memory  
Indexing | O(1)  
Concatenation | O(n)  
Loop Concatenation | Can become O(n²)  
Primitive vs Object | Use primitive string, not new String()  
Autoboxing | JS temporarily wraps primitive to call methods  

---

Final Mental Model:

A JavaScript string is:

An immutable sequence of UTF-16 code units stored in contiguous memory.

When you "modify" a string:
- A new memory block is created
- Old content is copied
- Variable reference changes

Understanding this internal behavior allows you to:
- Write optimal string algorithms
- Avoid accidental O(n²) solutions
- Handle Unicode correctly
- Make better design decisions in interviews

This internal knowledge becomes critical when we move to sliding window, hashing, pattern matching, and advanced string algorithms.
