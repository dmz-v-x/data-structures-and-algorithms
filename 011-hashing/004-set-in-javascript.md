## Set in JavaScript

### 1. Set in JavaScript (Hash Set)

In JavaScript, a **Set** is a built-in data structure used to store **unique values**.

A Set behaves very similarly to the **Hash Set** data structure in traditional computer science. It allows fast operations for inserting values, checking whether a value exists, and removing values.

Unlike arrays, a Set does **not allow duplicate values**, which makes it extremely useful in many data structure and algorithm problems.

Sets were introduced in **ES6 (ECMAScript 2015)** and are commonly used for:

- Removing duplicates
- Fast membership checking
- Tracking visited elements
- Set operations such as union and intersection

---

### 2. What a Set Is

A Set is a collection of **unique values** where each value can appear only once.

Example:

    const set = new Set()

    set.add(10)
    set.add(20)
    set.add(30)

The set now contains:

    10
    20
    30

Unlike objects or maps, Sets do **not store key-value pairs**.

They store only **values**.

We can visualize a Set like this:

    value
    ------
    10
    20
    30

---

### 3. Unique Value Property

The most important property of a Set is that **duplicate values are automatically ignored**.

Example:

    const set = new Set()

    set.add(5)
    set.add(5)
    set.add(5)

Even though we inserted the value multiple times, the Set stores it only once.

Result:

    5

Example:

    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(2)
    set.add(3)

Final set:

    1
    2
    3

This property makes Sets very useful when we need to remove duplicates from a dataset.

Example:

    const arr = [1,2,2,3,3,4]

    const unique = new Set(arr)

Result:

    {1,2,3,4}

---

### 4. Hashing Behaviour for Uniqueness

Internally, Sets use a hashing mechanism to ensure values remain unique.

When a value is inserted:

1. JavaScript computes an internal hash.
2. The Set checks if that value already exists.
3. If it exists, insertion is ignored.
4. If it does not exist, it is added.

Because of hashing, operations like checking if a value exists are very fast.

Typical time complexities:

Insert:

    O(1) average

Lookup:

    O(1) average

Deletion:

    O(1) average

Worst case (rare):

    O(n)

This constant-time behavior is why Sets are extremely useful for solving many DSA problems.

---

### 5. Methods of Set

The most important Set methods include:

- add
- has
- delete
- size

These methods allow us to manipulate and inspect the contents of the Set.

---

### 6. add()

The `add()` method inserts a value into the Set.

Syntax:

    set.add(value)

Example:

    const set = new Set()

    set.add(10)
    set.add(20)

Now the Set contains:

    10
    20

If we try to insert a duplicate value, the Set ignores it.

Example:

    set.add(20)

The Set remains:

    10
    20

---

Method chaining

The `add()` method returns the Set itself, so we can chain multiple insertions.

Example:

    const set = new Set()

    set
        .add(1)
        .add(2)
        .add(3)

Result:

    {1,2,3}

---

### 7. has()

The `has()` method checks whether a value exists in the Set.

Syntax:

    set.has(value)

Example:

    const set = new Set()

    set.add(100)

    console.log(set.has(100))

Output:

    true

Example:

    console.log(set.has(50))

Output:

    false

Because Sets use hashing, this lookup operation is typically **O(1)**.

This makes Sets much faster than arrays for membership checking.

Example comparison:

Array lookup:

    arr.includes(value)

Time complexity:

    O(n)

Set lookup:

    set.has(value)

Time complexity:

    O(1)

---

### 8. delete()

The `delete()` method removes a value from the Set.

Syntax:

    set.delete(value)

Example:

    const set = new Set()

    set.add(10)
    set.add(20)

    set.delete(10)

Now the Set contains:

    20

The method returns:

    true if deletion succeeded
    false if the value did not exist

Example:

    set.delete(50)

Output:

    false

---

### 9. size

The `size` property returns the number of values stored in the Set.

Syntax:

    set.size

Example:

    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(3)

    console.log(set.size)

Output:

    3

Unlike arrays, we do not use a function. It is simply a property.
