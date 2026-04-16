// Given a linked list
// Rearrange it such that:

// All odd index nodes come first
// Then all even index nodes

// Important:

// This is based on position (index), NOT value

// Input:
// 1 → 2 → 3 → 4 → 5

// Positions:
// 1   2   3   4   5
// (O) (E) (O) (E) (O)

// Output:
// 1 → 3 → 5 → 2 → 4

// Core Idea 

// We maintain two separate lists:

// Odd list → 1 → 3 → 5
// Even list → 2 → 4

// Then:
// Attach even list at the end of odd list




// Brute Force:

// Instead of rearranging pointers directly, we:

// Traverse the list
// Store:
// Odd index nodes → in one array
// Even index nodes → in another array
// Rebuild the linked list

// Time Complexity: O(n)
// Space Complexity: O(n)

function oddEvenList(head){
  if(!head) return null;

  let odd = [];
  let even = [];

  let current = head;
  let index = 1;

  // Separate Values

  while(current !== null){
    if(index % 2 === 1){
      odd.push(current.val);
    }else{
      even.push(current.next);
    }
    current = current.next;
    index++;
  }

  // Rebuild LinkedList

  let dummy = new ListNode(0);
  let temp = dummy;

  // add odd values
  for(let val of odd){
    temp.next = new ListNode(val);
    temp = temp.next;
  }

  // add even values
  for(let val of even){
    temp.next = new ListNode(val);
    temp = temp.next;
  }

  return dummy.next;
  
}


// Optimal Approach

// We maintain two separate lists:

// Odd list → 1 → 3 → 5
// Even list → 2 → 4

// Then:
// Attach even list at the end of odd list

// Time Complexity: O(n)
// Space Complexity: O(1)

function oddEvenList(head){
  if(!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while(even !== null && even.next !== null){
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}




