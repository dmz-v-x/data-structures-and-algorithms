## Limitations of Objects for Hashing

### 1. Only String or Symbol Keys

One major limitation of JavaScript objects is that their keys can only be **strings or symbols**.

Even if we try to use numbers, booleans, or objects as keys, JavaScript automatically converts them into strings.

Example:

    const obj = {}

    obj[1] = "one"
    obj[true] = "boolean"
    obj[{a:1}] = "object"

Now let's print the object.

    console.log(obj)

Output:

    {
        "1": "one",
        "true": "boolean",
        "[object Object]": "object"
    }

What happened here?

JavaScript converted every key to a **string**.

So internally it became:

    "1"
    "true"
    "[object Object]"

This causes serious problems when using complex values as keys.

Example:

    const obj = {}

    const key1 = {x:1}
    const key2 = {x:1}

    obj[key1] = "first"
    obj[key2] = "second"

Result:

    {
        "[object Object]": "second"
    }

Why?

Because both keys became the same string:

    "[object Object]"

So the second assignment overwrote the first one.

This limitation makes objects unreliable when we need **non-string keys**.

---

### 2. Prototype Chain Problems

JavaScript objects inherit properties from their **prototype**.

This means that an object automatically has built-in properties even if we never defined them.

Example:

    const obj = {}

    console.log(obj.toString)

Output:

    [Function: toString]

But we never added `toString` to the object.

It comes from the object's prototype:

    Object.prototype

This can create problems when we use objects as hash maps.

Example:

    const obj = {}

    console.log("toString" in obj)

Output:

    true

This is misleading because we never added `"toString"` ourselves.

This happens because the `in` operator checks the **entire prototype chain**, not just the object's own properties.

In hashing scenarios this can cause logical errors.

One workaround is to create objects **without a prototype**.

Example:

    const obj = Object.create(null)

Now the object has **no inherited properties**.

But this approach is rarely used in practice because it is less convenient.

---

### 3. Key Collisions with Built-in Properties

Because objects inherit properties from `Object.prototype`, certain keys can conflict with built-in properties.

Some built-in properties include:

    toString
    valueOf
    constructor
    hasOwnProperty

Example:

    const obj = {}

    obj["constructor"] = "my value"

Now the object contains:

    {
        constructor: "my value"
    }

But `"constructor"` already exists on the prototype.

This can create confusing behavior depending on how the object is used.

Example problem:

If we try to call:

    obj.constructor

We may expect our stored value, but sometimes JavaScript might refer to the original constructor function instead.

These kinds of collisions can lead to unexpected bugs when using objects as hash maps.

---

### 4. Ordered vs Unordered Behavior

In traditional hash tables, the order of keys is **not guaranteed**.

However, JavaScript objects have somewhat complicated ordering rules.

Objects do not behave like arrays, and their iteration order is not purely insertion-based in all cases.

Example:

    const obj = {}

    obj[3] = "three"
    obj[1] = "one"
    obj[2] = "two"

Now iterate through the object.

    for (let key in obj) {
        console.log(key)
    }

Output:

    1
    2
    3

Even though we inserted keys in this order:

    3
    1
    2

JavaScript sorted the numeric keys.

Why?

Because JavaScript treats **integer-like keys differently**.

Rules simplified:

1. Integer-like keys are ordered numerically
2. String keys follow insertion order
3. Symbol keys follow insertion order

Example:

    const obj = {}

    obj["b"] = 1
    obj["a"] = 2
    obj["c"] = 3

Iteration order:

    b
    a
    c

But numeric keys behave differently.

This mixed behavior can be confusing when predictable ordering is required.

