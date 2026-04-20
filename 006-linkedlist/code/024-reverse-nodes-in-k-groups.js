// You are given a linked list:

// 1 → 2 → 3 → 4 → 5 → 6

// And a number k = 2

// You must:

// Reverse every k nodes

// Output
// 2 → 1 → 4 → 3 → 6 → 5

// Core Idea 

// We don’t reverse the whole list.

// We reverse in chunks of size k

// Visualization

// For k = 3:

// Original:
// 1 → 2 → 3 → 4 → 5 → 6 → 7

// Groups:
// [1 2 3] [4 5 6] [7]

// After reversing:

// 3 → 2 → 1 → 6 → 5 → 4 → 7

// Last group stays same if < k



// Brute Force:

// Convert Linked List → Array
// Reverse every k elements in array
// Convert array → Linked List


// Original List:
// 1 → 2 → 3 → 4 → 5 → 6
// Convert to Array:
// [1, 2, 3, 4, 5, 6]
// Reverse in chunks of k = 2:
// [2, 1, 4, 3, 6, 5]
// Convert back to LL:
// 2 → 1 → 4 → 3 → 6 → 5

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseKGroup(head, k){
  if(!head) return null;

  // Step 1: Convert LL -> Array
  let arr = [];
  let curr = head;

  while(curr){
    arr.push(curr.val);
    curr = curr.next;
  }

  // Step 2: Reverse every k group

  for(let i = 0; i<arr.length; i += k){
    if(i + k <= arr.length){
      reverse(arr, i, i+k-1);
    }
  }

  // Step 3: Convert array to ll
  let dummy = new ListNode(0);
  curr = dummy;

  for(let val of arr){
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return dummy.next;
}

function reverse(arr, left, right){
  while(left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}



// Optimal Approach

// We repeat this process:

// 1. Find k nodes
// 2. Reverse them
// 3. Connect with previous part
// 4. Move forward

// Core Trick 

// We use:

// dummy → helps handle head easily
// prevGroupEnd → connects groups
// kthNode → last node of current group


function reverseKGroup(head, k) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let prevGroupEnd = dummy;

  while (true) {
    // find kth node
    let kth = prevGroupEnd;
    for (let i = 0; i < k; i++) {
      kth = kth.next;
      if (!kth) return dummy.next;
    }

    let groupStart = prevGroupEnd.next;
    let nextGroupStart = kth.next;

    // reverse group
    let prev = nextGroupStart;
    let curr = groupStart;

    while (curr !== nextGroupStart) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // connect
    prevGroupEnd.next = kth;
    prevGroupEnd = groupStart;
  }
}


// Complexity

// | Metric | Value |
// | ------ | ----- |
// | Time   | O(n)  |
// | Space  | O(1)  |








