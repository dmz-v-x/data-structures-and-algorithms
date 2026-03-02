## Map in JavaScript

### 1. Map in JavaScript (True Hash Map)

In JavaScript, a **Map** is a built-in data structure designed specifically for **key → value storage**, similar to a hash map in traditional data structures.

While JavaScript objects can also store key-value pairs, they were not originally designed to be hash maps. Because of their limitations, JavaScript introduced **Map** to provide a more reliable and flexible structure for storing mappings.

A Map allows efficient storage and lookup of values using keys, and it behaves much closer to a true **hash table** used in computer science.

---

### 2. Why Map Exists

Objects were commonly used as hash maps in JavaScript for many years. However, they had several issues when used for hashing:

- Keys are limited to **strings and symbols**
- Objects inherit properties from the **prototype chain**
- Built-in property names can cause conflicts
- Iteration behavior is complicated
- Objects were not designed for frequent insertions and deletions

Because of these issues, JavaScript introduced **Map** in ES6 (ECMAScript 2015).

Map solves these problems by providing:

- A structure built specifically for key-value storage
- Keys of **any data type**
- Predictable iteration order
- No prototype chain interference
- More reliable behavior for frequent insertions and deletions

Because of these properties, Map behaves much closer to a **true hash map used in DSA**.

---

### 3. Map vs Object

Although both Map and Object store key-value pairs, they differ significantly in behavior.

Key Type

Object:

    Keys must be strings or symbols.

Map:

    Keys can be any type.

Example:

    const map = new Map()

    map.set(1, "number")
    map.set(true, "boolean")
    map.set({a:1}, "object")

Map allows complex objects as keys, which objects cannot handle properly.

---

Prototype Behavior

Object:

Objects inherit properties from `Object.prototype`.

Map:

Map has **no prototype key collisions**.

---

Iteration

Object:

Objects do not have a simple built-in iteration method.

Map:

Maps are **directly iterable**.

Example:

    for (let [key, value] of map) {
        console.log(key, value)
    }

---

Size Tracking

Object:

To count properties:

    Object.keys(obj).length

Map:

Maps have a built-in property:

    map.size

---

Performance for Frequent Operations

Maps perform better than objects when:

- frequent insertions
- frequent deletions
- large datasets

---

### 4. Map Internal Characteristics

A JavaScript Map has several important characteristics.

Key-value storage

Each entry in a Map stores:

    key → value

Example:

    const map = new Map()

    map.set("name", "Himanshu")
    map.set("age", 25)

Internal representation:

    key        value
    ---------------------
    name   →   Himanshu
    age    →   25

---

Unique keys

Each key in a Map must be unique.

If the same key is inserted again, its value is overwritten.

Example:

    const map = new Map()

    map.set("a", 1)
    map.set("a", 5)

Result:

    a → 5

---

Efficient lookup

Map operations such as:

- insertion
- lookup
- deletion

are designed to run in **O(1) average time**.

---

### 5. Keys of Any Type

One of the biggest advantages of Map is that **any data type can be used as a key**.

Possible key types include:

- strings
- numbers
- booleans
- objects
- arrays
- functions
- symbols

Example:

    const map = new Map()

    map.set(10, "number key")

    map.set(true, "boolean key")

    map.set([1,2], "array key")

    const objKey = {id:1}
    map.set(objKey, "object key")

Example lookup:

    map.get(objKey)

Output:

    "object key"

The key works because Map stores the **actual reference**, not a string conversion.

This makes Map far more powerful than objects.

---

### 6. Iteration Order

Unlike traditional hash tables, JavaScript Map **preserves insertion order**.

This means elements are returned in the same order they were inserted.

Example:

    const map = new Map()

    map.set("a", 1)
    map.set("b", 2)
    map.set("c", 3)

Iteration:

    for (let [key, value] of map) {
        console.log(key, value)
    }

Output:

    a 1
    b 2
    c 3

The order remains exactly the same as insertion order.

This makes Map predictable and easier to work with when order matters.

---

### 7. Map Methods

Maps provide several built-in methods to manipulate stored data.

The most commonly used methods are:

- set
- get
- has
- delete
- clear
- size

Each of these operations is optimized for quick access.

---

### 8. set()

The `set()` method inserts a key-value pair into the Map.

Syntax:

    map.set(key, value)

Example:

    const map = new Map()

    map.set("name", "Himanshu")
    map.set("age", 25)

Now the map contains:

    name → Himanshu
    age → 25

---

Updating existing key

If the key already exists, the value is updated.

Example:

    map.set("age", 30)

Result:

    age → 30

---

Method chaining

The `set()` method returns the Map itself, allowing chaining.

Example:

    const map = new Map()

    map
        .set("a", 1)
        .set("b", 2)
        .set("c", 3)

---

### 9. get()

The `get()` method retrieves the value associated with a key.

Syntax:

    map.get(key)

Example:

    const map = new Map()

    map.set("name", "Himanshu")

    console.log(map.get("name"))

Output:

    Himanshu

If the key does not exist:

    map.get("age")

Output:

    undefined

---

### 10. has()

The `has()` method checks whether a key exists in the Map.

Syntax:

    map.has(key)

Example:

    const map = new Map()

    map.set("city", "Bangalore")

    console.log(map.has("city"))

Output:

    true

Example:

    console.log(map.has("country"))

Output:

    false

This method is useful when we need to check key existence before performing operations.

---

### 11. delete()

The `delete()` method removes a key-value pair from the Map.

Syntax:

    map.delete(key)

Example:

    const map = new Map()

    map.set("a", 1)
    map.set("b", 2)

    map.delete("a")

Now the Map contains:

    b → 2

The method returns:

    true if deletion succeeded
    false if the key did not exist

---

### 12. clear()

The `clear()` method removes **all entries** from the Map.

Syntax:

    map.clear()

Example:

    const map = new Map()

    map.set("a", 1)
    map.set("b", 2)

    map.clear()

Now the Map becomes empty.

---

### 13. size

The `size` property returns the total number of entries in the Map.

Syntax:

    map.size

Example:

    const map = new Map()

    map.set("a", 1)
    map.set("b", 2)

    console.log(map.size)

Output:

    2

Unlike objects, Map does not require extra steps to count elements.
