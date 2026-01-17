# JavaScript Arrays — DSA Perspective (Basics)

---

## 1. What an Array Really Is (DSA Mindset)

### In Classic DSA (C / C++)
- Array = contiguous memory
- Fixed size
- Same data type
- O(1) random access

---

## 2. Arrays in JavaScript

JavaScript arrays are NOT classic arrays.

### In JavaScript:
- Array is a special kind of object
- Dynamic size
- Can store mixed data types
- Uses hash table + optimized storage internally

### Mental Model for JS Arrays in DSA

“A dynamic list with fast index access most of the time, but with hidden costs.”

---

## 3. Ways to Create Arrays

### 3.1 Array Literal (Always Preferred)

```js
const arr = [1, 2, 3, 4];
```

- Fast
- Clear
- No surprises
- Use this in DSA problems

---

### 3.2 Using new Array() (Dangerous)

```js
const a = new Array(5);
```

This does NOT create `[5]`.

It creates:

```js
[ <5 empty items> ]
```

But:

```js
const b = new Array(1, 2, 3);
```

Creates:

```js
[1, 2, 3]
```

DSA RULE:  
Avoid `new Array()` completely.

---

### 3.3 Array.from()

```js
Array.from("abc"); // ['a', 'b', 'c']
```

---

### 3.4 Array.of()

```js
Array.of(5); // [5]
```

Fixes `new Array(5)` confusion but rarely used in DSA.

---

## 4. Initializing Arrays

### 4.1 Empty Array

```js
const arr = [];
```

---

### 4.2 Fixed Size with Default Values

```js
const arr = new Array(5).fill(0);
```

---

### 4.3 GOTCHA: Objects Inside fill()

```js
const arr = new Array(3).fill([]);
arr[0].push(1);

console.log(arr);
// [ [1], [1], [1] ]
```

---

## 5. Accessing Elements

```js
arr[0];                  // first
arr[arr.length - 1];     // last
```

Out-of-bounds access:

```js
arr[100]; // undefined
```

⚠️ This hides bugs in DSA solutions.

---

## 6. Core Array Operations & Time Complexity

### push (O(1))
```js
arr.push(10);
```

### pop (O(1))
```js
arr.pop();
```

### shift (O(n))
```js
arr.shift();
```

### unshift (O(n))
```js
arr.unshift(1);
```

DSA RULE:  
Never use `shift` / `unshift` inside loops.

---

## 7. Iteration Methods

### for loop (BEST for DSA)

```js
for (let i = 0; i < arr.length; i++) {
  // full control
}
```

Used for:
- Two pointers
- Sliding window
- Binary search
- In-place modification

---

### for...of

```js
for (const val of arr) {}
```

- No index
- Hard to modify array

---

### forEach (Avoid in DSA)

```js
arr.forEach((val, i) => {});
```

Problems:
- Cannot break
- Cannot return
- Slower
- Less control

---

## 8. Transform Methods

### map (O(n))
```js
arr.map(x => x * 2);
```

Creates a new array.

### filter (O(n))
```js
arr.filter(x => x > 0);
```

### reduce (O(n))
```js
arr.reduce((sum, x) => sum + x, 0);
```

Good for readability, bad for strict performance control.

---

## 9. Searching Methods

```js
arr.indexOf(5);
arr.includes(5);
arr.find(x => x > 10);
```

All are O(n).

---

## 10. Sorting (Very Important)

### Default sort is WRONG for numbers

```js
[1, 10, 2].sort();
// [1, 10, 2]
```

Because elements are compared as strings:

```js
["1", "10", "2"]
```

Correct numeric sort:

```js
[1, 10, 2].sort((a, b) => a - b);
// [1, 2, 10]
```

Descending:

```js
[1, 10, 2].sort((a, b) => b - a);
```

DSA RULE:  
Always pass a comparator when sorting numbers.

---

## 11. Slice vs Splice

### slice (Safe)

```js
arr.slice(1, 4);
```

- Does NOT mutate
- O(n)

### splice (Dangerous)

```js
arr.splice(1, 2);
```

- Mutates array
- Changes indices

---

## 12. Destructuring

```js
const [a, b] = arr;
[a, b] = [b, a];
```

Used in:
- Two pointers
- Sorting
- Reversal

---

## 13. Sparse Arrays (DSA Nightmare)

```js
const arr = [];
arr[5] = 10;
```

Creates empty slots.

Never do this in DSA.

---

## 14. Arrays Are Reference Types

```js
const a = [1, 2];
const b = a;

b.push(3);
console.log(a); // [1, 2, 3]
```

Correct copy:

```js
const b = [...a];
```

---

## 15. Memory & Performance Summary

| Operation     | Time Complexity |
|---------------|-----------------|
| push / pop    | O(1)            |
| shift / unshift | O(n)          |
| splice        | O(n)            |
| sort          | O(n log n)      |
| map / filter  | O(n)            |
