## Operator Precedence & Expression Notations (Infix, Prefix, Postfix)

### 1. Why This Topic Matters

When we write expressions like:

    2 + 3 * 4

How does the computer decide:
- Add first?
- Multiply first?

This is where operator precedence and expression notation come in.

---

### 2. Operator Precedence (Priority)

#### Definition

Operator precedence defines:

    Which operation should be performed first in an expression

---

#### Example

    2 + 3 * 4

Evaluation:

    3 * 4 = 12
    2 + 12 = 14

Not:

    (2 + 3) * 4 = 20

---

#### Common Operator Precedence Table

| Priority | Operator | Meaning |
|----------|----------|---------|
| High     | ()       | Parentheses |
|          | *, /     | Multiply, Divide |
| Low      | +, -     | Add, Subtract |

---

#### Important Rule

Parentheses always override precedence

Example:

    (2 + 3) * 4 = 20

---

### 3. Expression Notations

There are 3 main types:

| Type    | Example  |
|---------|----------|
| Infix   | A + B    |
| Prefix  | + A B    |
| Postfix | A B +    |

---

### 4. Infix Notation

#### Definition

Operator is written between operands

    A + B

---

#### Example

    3 + 4
    A * B
    (A + B) * C

---

#### Problem with Infix

Requires:
- Precedence rules
- Parentheses

Can be ambiguous without them

---

### 5. Prefix Notation (Polish Notation)

#### Definition

Operator comes before operands

    + A B

---

#### Example

    + 3 4
    * + A B C

---

#### Evaluation (Right to Left)

Example:

    * + 2 3 4

Steps:

    + 2 3 = 5
    5 * 4 = 20

---

#### Advantages

- No parentheses needed
- No ambiguity

---

### 6. Postfix Notation (Reverse Polish Notation)

#### Definition

Operator comes after operands

    A B +

---

#### Example

    3 4 +
    A B + C *

---

#### Evaluation (Left to Right using Stack)

Example:

    2 3 + 4 *

Steps:

    Push 2
    Push 3
    + → pop 2, 3 → push 5
    Push 4
    * → pop 5, 4 → push 20

---

#### Advantages

- No parentheses
- Easy to evaluate using stack

---

### 7. Conversion Examples

#### Infix to Postfix

    A + B        → A B +
    A + B * C    → A B C * +

---

#### Infix to Prefix

    A + B        → + A B
    A + B * C    → + A * B C

---

### 8. Key Differences

| Feature        | Infix        | Prefix       | Postfix      |
|----------------|-------------|-------------|-------------|
| Operator pos   | Middle      | Start       | End         |
| Parentheses    | Required    | Not needed  | Not needed  |
| Evaluation     | Complex     | Easier      | Easiest (stack) |

---

### 9. Why Stack is Important

Used in:

- Evaluating postfix expressions
- Evaluating prefix expressions
- Converting infix to postfix/prefix

---

### 10. Real-World Use

- Compilers (expression parsing)
- Calculators
- Expression trees
- Stack-based problems (DSA)

---

### 11. Final Summary

Operator precedence decides order of operations

Infix:
- Human readable
- Needs rules

Prefix and Postfix:
- Machine friendly
- No ambiguity
- Stack-based evaluation
