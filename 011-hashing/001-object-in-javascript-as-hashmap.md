## Object in JavaScript as HashMap

### 1. Objects in JavaScript as Hash Maps

Before learning hashing in data structures and algorithms, we must first understand how JavaScript already provides structures that behave like hash maps. One of the most important of these is the JavaScript **Object**.

In many DSA problems, especially when solving problems related to frequency counting, lookup tables, or mapping relationships, developers frequently use JavaScript objects as hash maps.

To understand why this works, we must break down how objects behave internally and how they support fast lookups.

---

### 1.1 What an Object Is Internally

In JavaScript, an object is a collection of **key → value pairs**.

Each key uniquely identifies a value stored in the object.

Example:

    const user = {
        name: "Himanshu",
        age: 25,
        city: "Bangalore"
    }

Here:

- "name" is a key
- "Himanshu" is the value

- "age" is a key
- 25 is the value

- "city" is a key
- "Bangalore" is the value

So internally we can visualize an object like this:

    key        value
    ---------------------
    name   →   Himanshu
    age    →   25
    city   →   Bangalore

This key-value mapping behavior is exactly what a **hash map** provides.

---

### 1.2 Key → Value Mapping

A hash map stores values by associating them with unique keys.

Objects in JavaScript behave the same way.

Example:

    const marks = {
        math: 90,
        physics: 85,
        chemistry: 92
    }

Here the keys are:

    math
    physics
    chemistry

And the values are:

    90
    85
    92

We can access the value associated with a key.

Example:

    console.log(marks.math)

Output:

    90

So what happened here?

JavaScript looked at the key `"math"` and returned the value associated with it.

This key → value relationship is exactly why objects behave like hash maps.

---

### 1.3 Constant Time Lookup Concept

One of the most important reasons hash maps are powerful is **constant time lookup**.

Constant time means the time taken to find something does not depend on the size of the data.

For example:

If an object contains 3 keys:

    const obj = {
        a: 1,
        b: 2,
        c: 3
    }

Accessing:

    obj.b

takes constant time.

Now imagine an object with **1 million keys**.

Accessing:

    obj.someKey

still takes roughly the same time.

This is why we say object lookup is **O(1) on average**.

That is the core advantage of hash maps.

---

### 1.4 Property Access vs Bracket Access

There are two ways to access values inside an object.

#### Dot notation (property access)

Example:

    const user = {
        name: "Himanshu"
    }

    console.log(user.name)

Output:

    Himanshu

Here we used dot notation.

---

#### Bracket notation

Example:

    const user = {
        name: "Himanshu"
    }

    console.log(user["name"])

Output:

    Himanshu

Both methods access the same value.

---

#### When bracket notation is necessary

Bracket notation is useful when the key is dynamic.

Example:

    const key = "name"

    const user = {
        name: "Himanshu"
    }

    console.log(user[key])

Output:

    Himanshu

If we tried dot notation here:

    user.key

it would look for a property literally called `"key"` which does not exist.

So for **dynamic keys**, bracket notation is required.

---

### 1.5 Dynamic Key Insertion

Objects allow us to add new key-value pairs at runtime.

Example:

    const user = {}

    user.name = "Himanshu"
    user.age = 25

Now the object becomes:

    {
        name: "Himanshu",
        age: 25
    }

We can also use bracket notation.

Example:

    const user = {}

    user["city"] = "Bangalore"

Result:

    {
        city: "Bangalore"
    }

Dynamic insertion is extremely important in DSA problems like frequency counting.

Example:

    const freq = {}

    const arr = [1,2,2,3,3,3]

    for (let num of arr) {
        if (freq[num]) {
            freq[num]++
        } else {
            freq[num] = 1
        }
    }

Result:

    {
        1:1,
        2:2,
        3:3
    }

This is a classic hashing use case.

---

### 1.6 Checking Key Existence

Sometimes we need to check if a key already exists in an object.

There are several ways to do this.

---

#### Using the `in` operator

Example:

    const user = {
        name: "Himanshu"
    }

    console.log("name" in user)

Output:

    true

---

#### Using `hasOwnProperty`

Example:

    user.hasOwnProperty("name")

Output:

    true

---

#### Using undefined check

Example:

    if (user["name"] !== undefined) {
        console.log("Key exists")
    }

But this approach can be problematic if the stored value itself is `undefined`.

Therefore `in` or `hasOwnProperty` are safer.

---

### 1.7 Iterating Keys in an Object

Sometimes we need to go through all keys in an object.

Example object:

    const scores = {
        Alice: 90,
        Bob: 85,
        Charlie: 92
    }

---

#### Using `for...in`

    for (let key in scores) {
        console.log(key, scores[key])
    }

Output:

    Alice 90
    Bob 85
    Charlie 92

---

#### Using `Object.keys()`

    const keys = Object.keys(scores)

    console.log(keys)

Output:

    ["Alice","Bob","Charlie"]

---

#### Using `Object.values()`

    console.log(Object.values(scores))

Output:

    [90,85,92]

---

#### Using `Object.entries()`

    console.log(Object.entries(scores))

Output:

    [
        ["Alice",90],
        ["Bob",85],
        ["Charlie",92]
    ]

These methods are commonly used when processing hash maps.

---

### 1.8 Object vs Array Difference

Both arrays and objects store data, but they are used differently.

Array example:

    const arr = [10,20,30]

Arrays use **numeric indices**.

    index    value
    ----------------
    0   →    10
    1   →    20
    2   →    30

Objects use **custom keys**.

Example:

    const obj = {
        apple: 10,
        banana: 20
    }

    key        value
    -------------------
    apple  →   10
    banana →   20

Key differences:

Arrays

- Ordered list
- Accessed by numeric index
- Used for sequential data

Objects

- Key-value structure
- Accessed by keys
- Used for mappings

For hashing problems, objects behave like **hash maps**, which is why they are frequently used in DSA solutions.
