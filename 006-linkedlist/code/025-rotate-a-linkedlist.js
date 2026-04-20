// You are given a linked list:

// 1 → 2 → 3 → 4 → 5

// And a number k = 2

// You must rotate the list to the right by k places

// Output
// 4 → 5 → 1 → 2 → 3

// What does “rotate” mean?

// Think like this:

// Take last k nodes → move them to front

// Visualization
// Original:
// 1 → 2 → 3 → 4 → 5

// Last 2 nodes:
// 4 → 5

// Move to front:
// 4 → 5 → 1 → 2 → 3

// Brute Force: Rotate One by One

// Intuition

// Rotate 1 step at a time, k times

// Each step:

// Take last node
// Move it to front

// One Rotation Example
// 1 → 2 → 3 → 4 → 5

// After 1 rotation:

// 5 → 1 → 2 → 3 → 4

// Complexity
// Time: O(n * k)
// Space: O(1)

function rotateRight(head, k){
  if(!head || !head.next) return head;

  for(let i = 0; i<k; i++){
    let prev = null;
    let curr = head;

    while(curr.next){
      prev = curr;
      curr = curr.next;
    }

    // curr = last node;
    prev.next = null;
    curr.next = head;
    head = curr;
    
  }
  return head;
}


// Better Approach: Using Arrays

// Convert LL → array
// Rotate array
// Convert back

// Complexity
// Time: O(n)
// Space: O(n) 

function rotateRight(head, k){
  if(!head) return head;

  let arr = [];
  let curr = head;

  while(curr){
    arr.push(curr.val);
    curr = curr.next;
  }

  let n = arr.length;
  k = k % n;

  arr = arr.slice(n - k).concat(arr.slice(0, n - k));

  // rebuild linkedlist
  let dummy = new ListNode(0);
  curr = dummy;

  for(let val of arr){
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return dummy.next;
}


// Optimal Approach

// Idea: Instead of moving nodes again and again:

// Convert list → circular → break at correct place

// Step 1: Find Length

// 1 → 2 → 3 → 4 → 5
// length = 5

// Step 2: Optimize k

// k = k % length;

// k = 7 → same as k = 2

// Step 3: Make it Circular
// tail.next = head

// Now:

// 1 → 2 → 3 → 4 → 5
// ↑                 ↓
// ← ← ← ← ← ← ← ← ←

// Step 4: Find New Head

// We need to stop at:

// (length - k)th node

// Why?

// New head = (length - k + 1)th node

// Complexity

// | Metric | Value |
// | ------ | ----- |
// | Time   | O(n)  |
// | Space  | O(1)  |


function rotateRight(head, k){
  if(!head || !head.next) return head;

  // Step 1: Find Length
  let length = 1;
  let tail = head;

  while(tail.next){
    tail = tail.next;
    length++;
  }

  // Step 2: Optimize k
  k = k % length;
  if(k === 0) return head;

  // Step 3: Make circular
  tail.next = head;

  // Step 4: New tail
  let stepsToNewTail = length - k;
  let newTail = head;

  for(let i = 1; i<stepsToNewTail; i++){
    newTail = newTail.next;
  }

  // Step 5: break

  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
  
}














