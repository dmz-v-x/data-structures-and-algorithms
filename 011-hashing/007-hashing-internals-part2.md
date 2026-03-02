## Hashing Internals - Part 2

### 1. How Hash Tables Work Internally

A **hash table** is a data structure that stores data using a hashing mechanism so that insertion, lookup, and deletion operations can be performed very quickly.

Internally, a hash table works by converting a **key into an index** in an underlying storage structure, usually an array.

The main components involved in this process are:

- Key
- Hash function
- Index
- Bucket

Understanding how these components interact explains how hash tables achieve fast operations.

---

### 2. Key

A **key** is the identifier used to store and retrieve data from the hash table.

Keys uniquely represent each piece of stored data.

Example key-value pairs:

    "apple" → 10
    "banana" → 20
    "orange" → 15

In this example:

- `"apple"` is the key
- `10` is the value

Keys can be many types depending on the system:

- strings
- numbers
- objects
- complex identifiers

The hash table uses the key to determine **where the value should be stored**.

---

### 3. Hash Function

A **hash function** converts the key into a numeric value.

This numeric value determines where the data will be stored in the hash table.

Example:

    hash("apple") → 3
    hash("banana") → 7
    hash("orange") → 1

The output of the hash function must always fall within the size of the underlying storage.

Example:

If the storage array has size 10:

    index range = 0 → 9

The hash function ensures the output fits this range.

Example:

    index = hash(key) % tableSize

---

### 4. Index

The **index** is the position in the storage array where the value will be placed.

Example storage array:

    index:   0 1 2 3 4 5 6 7 8 9

If the hash function returns:

    hash("apple") → 3

Then the value is stored at:

    table[3]

Example:

    table[3] = 10

Later, when retrieving the value:

1. Compute the hash again
2. Get the index
3. Access the value directly

Example:

    index = hash("apple")
    return table[index]

This is what allows **constant-time lookup**.

---

### 5. Bucket

A **bucket** is the location in the hash table where data is stored.

Each index in the storage array represents a bucket.

Example:

    index    bucket
    ----------------
    0        _
    1        15
    2        _
    3        10
    4        _
    5        _
    6        _
    7        20

In simple cases, each bucket stores a single element.

However, when collisions occur, buckets may store **multiple elements**.

---

### 6. Collision in Hashing

A **collision** occurs when two different keys produce the same index.

Example:

    hash("apple") → 3
    hash("banana") → 3

Both keys map to the same location.

So both attempt to store values in:

    table[3]

Since the table position can normally hold only one value, a conflict occurs.

This conflict is called a **collision**.

---

### 7. Why Collisions Happen

Collisions occur because hash tables map a **very large key space into a smaller index space**.

Example:

Possible keys:

- millions of strings
- millions of usernames
- billions of URLs

But the table may only contain:

    1000 indices

Because the number of keys is much larger than the number of available indices, multiple keys must share the same index.

This is unavoidable and is explained by the **pigeonhole principle**.

Therefore every hashing system must include strategies to handle collisions.

---

### 8. Collision Resolution Techniques

When two keys map to the same index, the hash table must decide **how to store multiple values in the same location**.

Two major strategies are commonly used:

- Separate chaining
- Open addressing

---

### 9. Separate Chaining

Separate chaining resolves collisions by allowing each bucket to store **multiple elements**.

Instead of storing a single value, the bucket contains a **linked list (or list-like structure)**.

Example:

    index    bucket
    -------------------------
    3        apple → banana → orange

All keys that map to index `3` are stored inside the same bucket.

---

### 10. Linked List Approach

In the linked list approach, each bucket contains a linked list of elements.

Example:

    table[3]

    apple → banana → orange

Each element contains:

- key
- value
- pointer to next element

Insertion process:

1. Compute index
2. Go to bucket
3. Insert element in linked list

Lookup process:

1. Compute index
2. Traverse linked list
3. Find matching key

---

### 11. Buckets Storing Multiple Elements

Instead of linked lists, buckets may also store elements using:

- arrays
- dynamic lists
- trees (in advanced implementations)

Example:

    table[3] = [
        {key: "apple", value: 10},
        {key: "banana", value: 20},
        {key: "orange", value: 15}
    ]

This approach keeps all colliding elements inside the same bucket.

---

### 12. Open Addressing

Open addressing resolves collisions differently.

Instead of storing multiple elements in a bucket, the algorithm searches for **another empty slot in the table**.

If a collision occurs, the hash table probes other indices until it finds an empty location.

Example:

    table size = 10

If:

    hash("apple") → 3

but index `3` is already occupied, the algorithm searches for another free position.

Different probing strategies determine how this search occurs.

---

### 13. Linear Probing

Linear probing checks the **next index sequentially** until an empty slot is found.

Example:

Initial hash:

    hash("banana") → 3

But `table[3]` is already occupied.

Check next slot:

    table[4]

If that is also occupied:

    table[5]

Continue until an empty slot appears.

Example result:

    table[5] = banana

This method is simple but can cause **clustering**, where many elements group together.

---

### 14. Quadratic Probing

Quadratic probing reduces clustering by increasing the jump distance.

Instead of checking the next slot linearly, it uses a quadratic formula.

Example sequence:

    index + 1²
    index + 2²
    index + 3²

Example:

If:

    hash("banana") → 3

Check:

    3 + 1² = 4
    3 + 2² = 7
    3 + 3² = 12

This spreads elements more evenly across the table.

---

### 15. Double Hashing

Double hashing uses **a second hash function** to determine how far to jump.

Formula:

    index = hash1(key) + i * hash2(key)

Where:

- `hash1` determines initial index
- `hash2` determines jump distance

Example:

    hash1("banana") → 3
    hash2("banana") → 4

Probing sequence:

    3
    7
    11
    15

This method significantly reduces clustering.

---

### 16. Load Factor

The **load factor** measures how full a hash table is.

Formula:

    load factor = number of stored elements / table size

Example:

If the table size is:

    10

and it contains:

    7 elements

Then:

    load factor = 7 / 10 = 0.7

---

### 17. When Resizing Happens

When the load factor becomes too large, the probability of collisions increases.

Typical threshold values are:

    0.7
    0.75

If the load factor exceeds this threshold, the hash table expands.

Example:

    table size = 10
    elements = 8

Load factor:

    0.8

Now resizing is triggered.

---

### 18. Rehashing

Rehashing is the process of resizing the hash table and redistributing elements.

This occurs when the table becomes too full.

---

### 19. Why Resizing Happens

Resizing reduces collisions and improves performance.

Example:

Original table size:

    10

After resizing:

    20

More buckets become available, so elements spread out more evenly.

This lowers the load factor.

---

### 20. How Elements Get Redistributed

When resizing happens:

1. A larger table is created.
2. All existing elements are reinserted.
3. Hash functions are applied again.

Example:

Original table:

    size = 10

After resize:

    size = 20

Now each key must be hashed again because the index depends on the table size.

Example:

Before resize:

    hash("apple") % 10 → 3

After resize:

    hash("apple") % 20 → 13

So the element moves to a different index.

This process of recomputing indices for all elements is called **rehashing**.
