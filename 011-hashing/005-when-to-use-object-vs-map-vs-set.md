## Object vs Map vs Set

### 1. When to Use Object vs Map vs Set

In JavaScript, there are three commonly used structures that support hashing-like behavior:

- Object
- Map
- Set

All three allow fast operations such as insertion and lookup, but they are designed for **different purposes**. Understanding when to use each one is very important in both **DSA problem solving and real-world programming**.

Choosing the correct structure can make code **cleaner, faster, and easier to reason about**.

---

### 2. Performance Considerations

Although Object, Map, and Set all provide fast operations, their performance characteristics differ depending on how they are used.

#### Objects

Objects are lightweight and optimized for simple key-value storage when keys are strings.

Operations:

Insertion

    obj[key] = value

Lookup

    obj[key]

Deletion

    delete obj[key]

Time complexity (average):

    O(1)

Objects work very well for:

- small datasets
- string-based keys
- simple frequency maps

However, objects have some drawbacks:

- keys are converted to strings
- prototype chain issues
- counting elements requires extra work

Example:

    const freq = {}

    const arr = [1,2,2,3]

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1
    }

This is a very common DSA pattern.

---

#### Maps

Maps are designed specifically for key-value storage and behave more like **true hash tables**.

Operations:

Insertion

    map.set(key, value)

Lookup

    map.get(key)

Deletion

    map.delete(key)

Time complexity (average):

    O(1)

Maps perform better than objects when:

- keys are not strings
- frequent insertions and deletions occur
- large datasets are used
- key types vary

Example:

    const map = new Map()

    map.set("apple", 5)
    map.set("banana", 3)

---

Advantages of Map over Object:

- keys can be any data type
- predictable iteration order
- built-in size property
- no prototype chain issues

Because of these advantages, Map is generally considered **more robust for large-scale data handling**.

---

#### Sets

Sets store only **unique values** and do not store key-value pairs.

Operations:

Insertion

    set.add(value)

Lookup

    set.has(value)

Deletion

    set.delete(value)

Time complexity (average):

    O(1)

Sets are extremely efficient for:

- duplicate removal
- fast membership checks
- tracking visited elements

Example:

    const set = new Set()

    set.add(10)
    set.add(20)

Checking membership:

    set.has(10)

Sets are often faster than arrays for lookup operations.

Array lookup:

    arr.includes(value)

Time complexity:

    O(n)

Set lookup:

    set.has(value)

Time complexity:

    O(1)

---

### 3. Interview Recommendations

In coding interviews, choosing the right data structure can simplify solutions significantly.

Some common guidelines include the following.

---

Use **Object** when:

- keys are strings or numbers
- implementing frequency counters
- solving simple hashing problems

Example problems:

- character frequency counting
- anagram checking
- majority element

Example:

    const freq = {}

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1
    }

Objects are often the **fastest to write in interviews**.

---

Use **Map** when:

- keys are complex types
- order of insertion matters
- frequent insertions and deletions occur
- large datasets are involved

Example problems:

- caching results
- mapping objects to values
- grouping items

Example:

    const map = new Map()

    map.set([1,2], "array key")

Objects cannot handle array keys properly, but Map can.

---

Use **Set** when:

- only uniqueness matters
- membership checking is needed
- duplicates must be removed
- visited tracking is required

Example problems:

- contains duplicate
- longest consecutive sequence
- graph traversal visited nodes

Example:

    const visited = new Set()

    visited.add(node)

Checking visited:

    visited.has(node)

---

### 4. Real-World Use Cases

Understanding how these structures are used in real-world systems helps reinforce their importance.

---

Object use cases

Configuration storage

Example:

    const config = {
        host: "localhost",
        port: 3000
    }

JSON data structures

Example:

    {
        "name": "Himanshu",
        "age": 25
    }

Frequency counting in analytics systems.

---

Map use cases

Caching systems

Example:

    const cache = new Map()

    cache.set(userId, userData)

Compilers and interpreters

Symbol tables map variable names to metadata.

Graph algorithms

Mapping nodes to neighbors.

Example:

    const graph = new Map()

    graph.set("A", ["B","C"])

---

Set use cases

Removing duplicates

Example:

    const uniqueUsers = new Set(userList)

Tracking visited nodes in graph traversal.

Example:

    const visited = new Set()

    visited.add(node)

Recommendation systems

Tracking items already seen by a user.

Example:

    const watchedMovies = new Set()
