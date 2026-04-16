// Remove the Nth node from the end of a linked list

// Example
// Input: 1 → 2 → 3 → 4 → 5,  n = 2
// Output: 1 → 2 → 3 → 5

// Remove the 2nd node from the back (node = 4)


// Brute Force

// Count total length L
// Find node at position:
// (L - n) from start
// Remove it

// Time Complexity: O(2N)
// Space Complexity: O(1)

function removeNthFromEnd(head, n){
  let length = 0;
  let temp = head;

  while(temp !== null){
    length++;
    temp = temp.next;
  }

  // Edge case: remove head
  if(length === n){
    return head.next;
  }

  // Go to (L - n - 1)
  let current = head;
  for(let i = 1; i<length - n; i++){
    current = current.next;
  }

  // Delete Node by adjusting next
  current.next = current.next.next;

  return head;
  
}


// Better Approach: Using Stack

// Push all nodes
// Pop n times
// Remove node

// Time Complexity: O(n)
// Space Complexity: O(n)

function removeNthFromEnd(head, n){
  let stack = [];
  let temp = head;

  while(temp !== null){
    stack.push(temp);
    temp = temp.next;
  }

  // Remove Node

  for(let i = 0; i<n; i++){
    stack.pop();
  }

  if(stack.length === 0){
    return head.next;
  }

  let prev = stack[stack.length - 1];
  prev.next = prev.next.next;

  return head;

}


// Optimal Approaches (Two Pointers) - Slow and Fast Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
function removeNthFromEnd(head, n){
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // Step 1: Move Fast N steps

  for(let i = 0; i<n; i++){
    fast = fast.next;
  }

  // Step 2: Move both slow and fast
  while(fast.next !== null){
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

