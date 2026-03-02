## Implementing Hash Table in JS

### 1. Implementing Hash Table From Scratch in JavaScript

Understanding how to **implement a hash table from scratch** is one of the most important steps in mastering hashing for data structures and algorithms.

Although JavaScript already provides structures like **Map** and **Object**, implementing a hash table manually helps us understand how hashing actually works internally.

A basic hash table implementation involves the following components:

- a storage array
- a hash function
- insertion logic
- lookup logic
- deletion logic
- collision handling
- resizing strategy

We will build these components step by step.

---

### 2. Simple Hash Function in JavaScript

The first requirement of a hash table is a **hash function**.

A hash function converts a key into an **index inside the storage array**.

Example idea:

    key → index

If our table size is 10, valid indices are:

    0 → 9

So the hash function must convert keys into numbers within this range.

---

### 3. Converting String → Index

One simple way to hash a string is to convert each character into its ASCII value and combine them.

Example implementation:

    function hash(key, size) {
        let total = 0

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % size
    }

Explanation:

Step 1

Each character is converted into a number.

Example:

    "abc"

ASCII values:

    a → 97
    b → 98
    c → 99

Step 2

Add them together:

    97 + 98 + 99 = 294

Step 3

Use modulo to keep index inside table size.

Example:

    294 % 10 = 4

So the key `"abc"` maps to index `4`.

---

### 4. Creating Basic Hash Table Class

Now we create a class representing the hash table.

The table internally stores data in an array.

Example:

    class HashTable {
        constructor(size = 10) {
            this.table = new Array(size)
            this.size = size
        }

        hash(key) {
            let total = 0

            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i)
            }

            return total % this.size
        }
    }

Explanation:

    this.table

is the storage array.

    this.size

represents the capacity of the hash table.

The `hash()` method converts keys into indices.

---

### 5. Insert Operation

Insertion stores a key-value pair in the table.

Example implementation:

    insert(key, value) {
        const index = this.hash(key)
        this.table[index] = value
    }

Example usage:

    const ht = new HashTable()

    ht.insert("apple", 10)
    ht.insert("banana", 20)

Storage example:

    index    value
    ----------------
    3        10
    7        20

However, this simple implementation **does not handle collisions yet**.

---

### 6. Search Operation

Search retrieves the value associated with a key.

Implementation:

    search(key) {
        const index = this.hash(key)
        return this.table[index]
    }

Example usage:

    ht.search("apple")

Process:

1. Compute hash
2. Find index
3. Return value stored at that index

---

### 7. Delete Operation

Delete removes a key-value pair from the table.

Implementation:

    delete(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }

Example:

    ht.delete("apple")

The slot becomes empty again.

---

### 8. Handling Collisions (Chaining)

The previous implementation fails when two keys produce the same index.

Example:

    hash("apple") → 3
    hash("grape") → 3

Both values try to store at index `3`.

To solve this problem we use **separate chaining**.

Each bucket stores **multiple elements** instead of just one.

Updated insert method:

    insert(key, value) {
        const index = this.hash(key)

        if (!this.table[index]) {
            this.table[index] = []
        }

        this.table[index].push([key, value])
    }

Now the bucket stores an array of key-value pairs.

Example bucket:

    table[3] = [
        ["apple", 10],
        ["grape", 25]
    ]

---

### 9. Search with Chaining

Search must now scan the bucket.

Implementation:

    search(key) {
        const index = this.hash(key)

        const bucket = this.table[index]

        if (!bucket) return undefined

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1]
            }
        }

        return undefined
    }

The algorithm checks each key-value pair in the bucket.

---

### 10. Delete with Chaining

Deletion must remove the specific key-value pair.

Implementation:

    delete(key) {
        const index = this.hash(key)

        const bucket = this.table[index]

        if (!bucket) return

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1)
                break
            }
        }
    }

This removes the correct pair from the bucket.

---

### 11. Handling Collisions (Open Addressing)

Open addressing handles collisions differently.

Instead of storing multiple elements in a bucket, it searches for another empty slot.

Example strategy: **linear probing**.

Insert example:

    insert(key, value) {
        let index = this.hash(key)

        while (this.table[index] !== undefined) {
            index = (index + 1) % this.size
        }

        this.table[index] = [key, value]
    }

If a slot is occupied, the algorithm checks the next slot.

---

### 12. Search with Linear Probing

Searching must follow the same probing sequence.

Example:

    search(key) {
        let index = this.hash(key)

        while (this.table[index] !== undefined) {

            if (this.table[index][0] === key) {
                return this.table[index][1]
            }

            index = (index + 1) % this.size
        }

        return undefined
    }

This ensures we check the correct sequence of slots.

---

### 13. Dynamic Resizing Implementation

As more elements are inserted, collisions become more frequent.

To maintain efficiency, the table must grow dynamically.

Common strategy:

When load factor exceeds a threshold (for example 0.7), resize the table.

Resize steps:

1. Create a larger table
2. Rehash all existing elements
3. Insert them into the new table

Example implementation idea:

    resize(newSize) {

        const oldTable = this.table

        this.size = newSize
        this.table = new Array(newSize)

        for (let bucket of oldTable) {

            if (!bucket) continue

            for (let [key, value] of bucket) {
                this.insert(key, value)
            }
        }
    }

This process redistributes all elements across the new table.

---

### 14. Performance Analysis

Hash tables are famous for their fast operations.

Average time complexity:

Insertion

    O(1)

Search

    O(1)

Deletion

    O(1)

This happens because the hash function provides direct access to the storage index.

---

Worst case complexity:

    O(n)

Worst case occurs when many keys collide and end up in the same bucket.

Example:

    table[3] = [apple, banana, orange, grape]

Searching requires scanning the entire bucket.

However, good hash functions and resizing strategies keep collisions rare.
