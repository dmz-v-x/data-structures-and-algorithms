## Hashing Internals - Part 1

### 1. What is Hashing

Hashing is a technique used in computer science to **store and retrieve data efficiently**. It is one of the most important concepts behind data structures like **Hash Tables, Maps, and Sets**.

The main goal of hashing is to allow **very fast data access**, ideally in constant time.

Instead of searching through data sequentially, hashing provides a direct way to locate where a value should be stored or retrieved.

---

### 2. Key → Index Mapping Concept

At the core of hashing is the idea of **mapping a key to an index**.

Imagine we have a storage structure such as an array.

Example:

    storage = [_, _, _, _, _, _, _, _, _, _]

Each position in the array has an **index**.

    index:   0 1 2 3 4 5 6 7 8 9

Now suppose we want to store values based on keys.

Example:

    key → value

Example data:

    "apple" → 10
    "banana" → 20
    "orange" → 15

Instead of searching for these values by scanning the whole structure, hashing converts the **key into an index**.

Example mapping:

    hash("apple") → 3
    hash("banana") → 7
    hash("orange") → 1

Now the values are stored like this:

    storage[3] = 10
    storage[7] = 20
    storage[1] = 15

So when we want the value for `"banana"`:

1. Compute the hash of `"banana"`
2. Get index `7`
3. Directly read from `storage[7]`

No searching is required.

This is the essence of **key → index mapping**.

---

### 3. Why Hashing Exists

Before hashing, retrieving data often required **searching through lists or arrays**.

Example:

    arr = [10, 20, 30, 40, 50]

If we want to check whether `40` exists, we might have to scan the entire array.

Worst case:

    O(n)

If the array contains **millions of elements**, this becomes slow.

Hashing solves this problem by allowing us to compute **where the data should be stored** instead of searching for it.

Instead of scanning data:

    search → O(n)

Hashing allows:

    direct access → O(1)

This dramatically improves performance.

---

### 4. Why We Need Constant Time Operations

In large systems, the number of stored items can become extremely large.

Examples:

- millions of users
- billions of database records
- large caching systems
- large-scale search systems

If each lookup required scanning through data, systems would become extremely slow.

For example:

Imagine a system with **10 million users**.

If searching each user required scanning the entire dataset:

    lookup time → O(n)

This could require up to **10 million comparisons**.

Hashing allows us to compute a location instantly.

Instead of searching:

    compute index → direct access

This gives:

    O(1) lookup time

Constant-time operations make large-scale systems feasible.

---

### 5. What is a Hash Function

A **hash function** is the mechanism that converts a key into an index.

It takes an input (key) and produces a number that corresponds to a location in a storage structure.

Example:

    hash(key) → index

Example:

    hash("apple") → 3
    hash("banana") → 7
    hash("orange") → 1

The resulting number determines where the value should be stored.

Example storage:

    storage[index] = value

Example:

    storage[3] = 10
    storage[7] = 20
    storage[1] = 15

The quality of a hashing system heavily depends on how well the **hash function** distributes keys.

---

### 6. Mapping Large Key Space → Small Index Space

In real-world systems, keys can be very large.

Examples of keys:

- usernames
- email addresses
- URLs
- long strings
- objects

Example key:

    "himanshu.bhatt@example.com"

But our storage structure might have only **1000 positions**.

So we must convert a very large key space into a smaller index space.

Example:

Large key:

    "himanshu.bhatt@example.com"

Hash function output:

    237

So the data is stored at:

    storage[237]

This process of converting large keys into smaller indices is the core job of a **hash function**.

---

### 7. Deterministic Property

A good hash function must be **deterministic**.

Deterministic means:

The same input always produces the same output.

Example:

    hash("apple") → 3
    hash("apple") → 3
    hash("apple") → 3

The result must always be the same.

If the result changed each time, we would never be able to find stored data again.

Example of what would go wrong:

    store value using index 3
    later hash returns index 6

The data would not be found.

So determinism is essential.

---

### 8. Uniform Distribution

A good hash function should distribute keys **evenly across the storage space**.

Bad example:

    hash(key) always returns index 1

Result:

    storage[1] contains everything

This defeats the purpose of hashing.

Good example:

Keys are spread across many indices.

Example:

    storage[0]
    storage[1]
    storage[2]
    storage[3]
    storage[4]
    storage[5]
    storage[6]
    storage[7]

Even distribution reduces collisions and improves performance.

---

### 9. Basic Hash Table Concept

A **hash table** is the data structure that uses hashing.

It stores data in an array-like structure where keys are converted into indices using a hash function.

The basic components of a hash table include:

- buckets
- indexing
- storage

---

### 10. Buckets

A bucket is a location in the hash table where data is stored.

Example storage:

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

Each index corresponds to a **bucket**.

Sometimes a bucket can hold multiple values if collisions occur.

---

### 11. Indexing

Indexing is the process of determining **where a key-value pair should be stored**.

Example process:

Step 1

    key = "banana"

Step 2

    index = hash("banana")

Step 3

    store value at storage[index]

Example:

    storage[7] = 20

Later retrieval follows the same process.

---

### 12. Storage

The underlying storage of a hash table is typically an **array**.

Example:

    const table = new Array(10)

Hash functions map keys to positions inside this array.

Example:

    table[3] = 10
    table[7] = 20

The array provides constant-time access by index.

---

### 13. Why Hash Tables Are O(1)

Hash tables are famous for providing **constant-time operations**.

Operations include:

- insertion
- lookup
- deletion

All these operations are typically **O(1) on average**.

---

### 14. Average Case Explanation

In the average case:

1. The hash function distributes keys evenly.
2. Each key maps to a different bucket.
3. Retrieval requires computing the hash and accessing the index.

Example:

    index = hash("banana")

Then:

    return storage[index]

Only a few operations are required.

Therefore:

    Time complexity = O(1)

---

### 15. Worst Case Explanation

The worst case occurs when many keys map to the same index.

Example:

    hash("apple") → 3
    hash("banana") → 3
    hash("orange") → 3

Now bucket `3` contains many items.

Example:

    storage[3] → [apple, banana, orange]

To find `"orange"` we must search through the bucket.

This becomes:

    O(n)

However, good hash functions and resizing strategies reduce the likelihood of this happening.

---

### 16. Real Life Examples of Hashing

Hashing is used everywhere in modern software systems.

---

### 17. Phone Contacts

Phone contacts map **names to phone numbers**.

Example:

    "Alice" → 9876543210
    "Bob" → 9123456780

When searching for "Alice", we don't scan all contacts.

Instead the system quickly locates the contact using hashing-like indexing.

---

### 18. Username Lookup

Websites need to find user accounts quickly.

Example:

    username → user profile

Example mapping:

    "himanshu123" → user data

When logging in, the system retrieves the user instantly rather than scanning millions of accounts.

---

### 19. Caching

Caching systems store previously computed results.

Example:

    request → response

Example mapping:

    "/api/products" → cached data

If the same request appears again, the cached result is returned immediately.

Hashing allows quick identification of cached entries.

Examples include systems like:

- Redis
- Memcached

---

### 20. Database Indexing

Databases use hashing to quickly locate records.

Example table:

    user_id → user record

Instead of scanning an entire database table, an index allows the database to jump directly to the relevant record.

Example:

    user_id = 5001

The index tells the database where the record is stored.

This dramatically improves query performance.

