// You are given a linked list like:

// 1 → 0 → 2 → 1 → 0 → 2

// You must sort it so that all:

// 0s come first
// then 1s
// then 2s

// Final result:

// 0 → 0 → 1 → 1 → 2 → 2

// KEY CONSTRAINT (IMPORTANT)

// This is NOT an array.

// You cannot randomly access elements
// You must traverse node by node


// Brute Force:

// APPROACH 1 — BRUTE FORCE (Convert → Sort → Rebuild)
// INTUITION

// Think like this:

// "Linked list is hard to sort directly…
// let me convert it into something easy → ARRAY"

// Step 1: Traverse LL → store values in array
// 1 → 0 → 2 → 1 → 0 → 2

// Array = [1, 0, 2, 1, 0, 2]

// Step 2: Sort the array
// [0, 0, 1, 1, 2, 2]

// Step 3: Put values back into linked list
// 0 → 0 → 1 → 1 → 2 → 2

// Time Complexity: O(n log n)
// Space Complexity: O(N) 

function sortList(head){
  let arr = [];
  let temp = head;

  // 1. Store values in array
  while(temp !== null){
    arr.push(temp.val);
    temp = temp.next;
  }

  // 2. Sort the array

  arr.sort((a, b) => a - b);

  // 3. Put sorted values back into linked list
  temp = head;
  let i = 0;

  while(temp !== null){
    temp.val = arr[i];
    i++;
    temp = temp.next;
  }

  return head;
}



// Optimal Approach: Using 3 Pointers / Dutch Flag for LL.

// CORE IDEA

// Instead of modifying values:

// Create 3 separate lists

// one for 0s
// one for 1s
// one for 2s

// Then merge them

// VISUALIZATION

// Input:

// 1 → 0 → 2 → 1 → 0

// We build:

// Zero list: 0 → 0
// One list:  1 → 1
// Two list:  2

// Then connect:

// 0 → 0 → 1 → 1 → 2

// Time complexity: O(N)
// Space Complexity: O(1)

function sortList(head){
  if(!head || !head.next) return head;

  let zeroHead = new ListNode(-1);
  let oneHead = new ListNode(-1);
  let twoHead = new ListNode(-1);

  let zero = zeroHead;
  let one = oneHead;
  let two = twoHead;

  let curr = head;
  while(curr){
    if(curr.val === 0){
      zero.next = curr;
      zero = zero.next;
    }else if(curr.val === 1){
      one.next = curr;
      one = one.next;
    }else{
      two.next = curr;
      two = two.next;
    }

    curr = curr.next;
  }

  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  two.next = null;

  return zeroHead.next;
}








