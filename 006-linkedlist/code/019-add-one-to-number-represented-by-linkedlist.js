// Linked list represents a number:

// 1 → 2 → 3

// Means: 123

// Add 1:

// 1 → 2 → 4   (124)


// IMPORTANT EDGE CASE

// 9 → 9 → 9

// After +1:

// 1 → 0 → 0 → 0

// Length increases


// Approach: Reverse + ADD


// CORE IDEA

// Addition happens from rightmost digit

// But LL is:

// 1 → 2 → 3
// ↑
// Most significant digit first

// So we reverse first

// STEPS

// Step 1: Reverse LL

// 1 → 2 → 3
// ↓
// 3 → 2 → 1

// Step 2: Add 1 (like normal addition)

// Step 3: Reverse back

// Time Complexity: O(N)
// Space Complexity: O(1)

function reverse(head){
  let prev = null;
  let curr = head;

  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function addOne(head){
  head = reverse(head);
  let curr = head;
  let carry = 1;

  while (curr) {
    let sum = curr.val + carry;

    curr.val = sum % 10;
    carry = Math.floor(sum / 10);

    // If no carry → stop early
    if (carry === 0) break;

    // If last node and still carry
    if (curr.next === null) {
      curr.next = new ListNode(carry);
      carry = 0;
      break;
    }

    curr = curr.next;
  }

  return reverse(head);
}

















