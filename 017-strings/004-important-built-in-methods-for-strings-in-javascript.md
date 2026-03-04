## Important Built-in Methods

### 1. charAt()

Returns character at a given index.

    let str = "hello";

    str.charAt(0);  // "h"
    str.charAt(4);  // "o"
    str.charAt(10); // ""

Difference from bracket notation:

    str[10]; // undefined

charAt returns empty string if index is invalid.

DSA use case:
Rarely used directly. Usually str[i] is preferred.

---

### 2. charCodeAt()

Returns UTF-16 code unit at given index.

    "A".charCodeAt(0); // 65
    "a".charCodeAt(0); // 97
    "0".charCodeAt(0); // 48

Useful for:

- Character comparisons
- Checking uppercase/lowercase
- Converting char to numeric index

Example (convert 'a'–'z' to 0–25):

    let index = "c".charCodeAt(0) - "a".charCodeAt(0);
    // 2

Important:
For emojis, charCodeAt returns only first code unit.

---

### 3. includes()

Checks if substring exists.

    "hello".includes("ell");  // true
    "hello".includes("xyz");  // false
    "hello".includes("H");    // false (case-sensitive)

Optional starting index:

    "hello".includes("l", 3); // true

DSA use case:
Simple substring existence check.

Time complexity: O(n)

---

### 4. indexOf()

Returns first index of substring.

    "hello".indexOf("l");   // 2
    "hello".indexOf("lo");  // 3
    "hello".indexOf("z");   // -1

Start searching from index:

    "hello".indexOf("l", 3); // 3

DSA use case:
- Find first occurrence
- Implement naive pattern search

---

### 5. lastIndexOf()

Returns last occurrence index.

    "hello".lastIndexOf("l");  // 3
    "hello".lastIndexOf("h");  // 0
    "hello".lastIndexOf("z");  // -1

Useful when searching from end.

---

### 6. startsWith()

Checks if string starts with substring.

    "hello".startsWith("he"); // true
    "hello".startsWith("lo"); // false

With position:

    "hello".startsWith("ll", 2); // true

DSA use case:
Prefix problems.

---

### 7. endsWith()

Checks if string ends with substring.

    "hello".endsWith("lo"); // true
    "hello".endsWith("he"); // false

With length limit:

    "hello".endsWith("l", 3); // true

DSA use case:
Suffix matching problems.

---

### 8. substring()

Extracts part of string.

    let str = "hello";

    str.substring(1, 4); // "ell"
    str.substring(2);    // "llo"

Important behavior:
- Negative values treated as 0
- If start > end, they are swapped

    str.substring(4, 1); // "ell"

Time complexity: O(k)

---

### 9. slice()

Also extracts part of string.

    let str = "hello";

    str.slice(1, 4);  // "ell"
    str.slice(2);     // "llo"
    str.slice(-2);    // "lo"

Difference from substring:

- slice supports negative indices
- Does NOT swap if start > end

    str.slice(4, 1);  // ""

In DSA, slice is usually preferred.

---

### 10. substr() (Deprecated)

Old method:

    "hello".substr(1, 3); // "ell"

Parameters:
- First = start index
- Second = length

Why deprecated?
- Inconsistent behavior
- Replaced by slice and substring
- Not recommended for modern code

Avoid using in interviews.

---

### 11. toLowerCase()

Converts string to lowercase.

    "HELLO".toLowerCase(); // "hello"
    "HeLLo".toLowerCase(); // "hello"

DSA use case:
Case-insensitive comparison.

---

### 12. toUpperCase()

Converts string to uppercase.

    "hello".toUpperCase(); // "HELLO"

Useful for normalization.

---

### 13. trim()

Removes whitespace from both ends.

    "  hello  ".trim();   // "hello"
    "\n hello \t".trim(); // "hello"

Important:
Only removes start and end spaces, not middle.

    "a b".trim(); // "a b"

---

### 14. repeat()

Repeats string given number of times.

    "ha".repeat(3);  // "hahaha"
    "*".repeat(5);   // "*****"

DSA use case:
Pattern generation problems.

---

### 15. replace()

Replaces first occurrence (unless regex with global flag).

    "hello".replace("l", "X"); // "heXlo"

Using regex:

    "hello".replace(/l/g, "X"); // "heXXo"

DSA use case:
String transformation.

Important:
Without global flag, only first match is replaced.

---

### 16. replaceAll()

Replaces all occurrences.

    "hello".replaceAll("l", "X"); // "heXXo"

Cleaner than regex for simple replacements.

Time complexity: O(n)

---

### 17. split()

Splits string into array.

    "a,b,c".split(","); // ["a", "b", "c"]
    "hello".split("");  // ["h","e","l","l","o"]

Split by space:

    "one two three".split(" ");
    // ["one","two","three"]

DSA use case:
- Word problems
- Convert string to array for modification

Time complexity: O(n)

---

### 18. join()

Joins array into string.

    ["h","e","l","l","o"].join("");
    // "hello"

With separator:

    ["a","b","c"].join("-");
    // "a-b-c"

DSA use case:
Convert modified array back to string.

Time complexity: O(n)

---

### 19. Common DSA Patterns Using These Methods

Check palindrome:

    let str = "madam";
    str === str.split("").reverse().join("");

Case-insensitive comparison:

    str1.toLowerCase() === str2.toLowerCase();

Check prefix:

    str.startsWith(prefix);

Extract substring:

    str.slice(i, j);

---

### 20. Summary Table

Method | Purpose  
charAt | Get character  
charCodeAt | Get numeric code  
includes | Check substring exists  
indexOf | First occurrence index  
lastIndexOf | Last occurrence index  
startsWith | Prefix check  
endsWith | Suffix check  
substring | Extract part  
slice | Extract part (supports negative)  
substr | Deprecated extraction  
toLowerCase | Normalize case  
toUpperCase | Normalize case  
trim | Remove outer spaces  
repeat | Repeat string  
replace | Replace first occurrence  
replaceAll | Replace all occurrences  
split | Convert to array  
join | Convert array to string  

---

Final Mental Model:

These built-in methods are powerful tools.  
In DSA, they help:

- Reduce code length
- Avoid manual loops
- Improve readability
- Prevent logical errors

However, always remember:
Most of them are O(n).  
Avoid calling them repeatedly inside loops unless necessary.

Mastering these methods makes string problem solving significantly easier.
