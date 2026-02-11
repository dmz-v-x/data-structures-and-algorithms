# Slow & Fast Pointers (Cycle / Structure Problems)

# ✅ Core Idea

**Pointers move at different speeds.**

Typical setup:

    slow → moves 1 step  
    fast → moves 2 steps  

Visual intuition:

    slow:  • → • → • → •  
    fast:  • → → • → → •  

Fast pointer "runs", slow pointer "walks".

---

# 🧠 Why Different Speeds Work

This is where the brilliance lies.

By moving at different speeds, we can detect:

✔ Cycles  
✔ Structural properties  
✔ Relative positions  

Without extra memory.

Without modifying data.

---

# 🚀 Use Case 1 — Detecting a Cycle in Linked List ⭐⭐⭐⭐⭐

## ✅ Problem Type

Determine if a linked list contains a loop.

Example:

    A → B → C → D → B (cycle)

---

## ✅ Intuition

If there is a cycle:

👉 Fast pointer eventually laps slow pointer.

Why?

Because fast moves quicker inside the loop.

They must collide.

If no cycle:

👉 Fast pointer reaches null.

---

## ✅ JavaScript Code

    function hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;          // 1 step
            fast = fast.next.next;     // 2 steps

            if (slow === fast) {
                return true;  // Collision → cycle exists
            }
        }

        return false;  // Reached end → no cycle
    }

---

## ✅ Key Insight

No extra space needed.

Time Complexity:

    O(N)

Space Complexity:

    O(1)

---

# 🚀 Use Case 2 — Finding the Middle of Linked List ⭐⭐⭐⭐⭐

VERY common interview problem.

---

## ✅ Problem Type

Find the middle node efficiently.

Example:

    1 → 2 → 3 → 4 → 5

Middle:

    3

---

## ✅ Intuition

Fast moves twice as fast.

When fast reaches end:

👉 Slow is at middle.

Why?

Because slow covered half the distance.

---

## ✅ JavaScript Code

    function findMiddle(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

---

## ✅ Why This Works Beautifully

No length calculation.

No extra traversal.

Single pass solution.

---

# 🚀 Use Case 3 — Finding Start of Cycle ⭐⭐⭐⭐⭐⭐⭐

Classic Floyd’s Algorithm extension.

---

## ✅ Problem Type

If cycle exists → Where does it begin?

---

## ✅ Deep Insight (Important)

After collision:

👉 Reset one pointer to head  
👉 Move both at SAME speed  

They meet at:

🔥 **Cycle starting node**

---

## ✅ JavaScript Code

    function detectCycleStart(head) {
        let slow = head;
        let fast = head;

        // Step 1 — Detect collision
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;
            }
        }

        if (fast === null || fast.next === null) {
            return null;  // No cycle
        }

        // Step 2 — Find cycle start
        slow = head;

        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }

---

# 🧠 The Mathematical Magic (Simplified)

Why does this work?

Because distances align perfectly inside the cycle.

Without heavy math:

👉 Trust the invariant: speeds reveal structure.

---

# 🏆 Golden Mental Model

Slow & Fast pointers help when:

✔ Structure matters more than values  
✔ Need relative positioning  
✔ Cycle / loop possibility exists  
✔ Want O(1) space solutions  

---

# ✅ Why This Pattern Is Interview Gold

✔ Elegant  
✔ Efficient  
✔ No extra memory  
✔ Deep reasoning signal  

Interviewers LOVE this technique.

---

# ✅ Final Compression

Slow & Fast pointers =

✔ Two pointers  
✔ Different speeds  
✔ Detect cycles  
✔ Find middle  
✔ Reveal hidden structure  


