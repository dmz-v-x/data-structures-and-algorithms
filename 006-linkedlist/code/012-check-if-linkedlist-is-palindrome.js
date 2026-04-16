// You are given a singly linked list
// Check if it reads the same forward and backward

// Example:

// 1 → 2 → 2 → 1   Palindrome
// 1 → 2 → 3       Not palindrome

// Brute Force: Convert to Array

// Traverse linked list
// Store values in array
// Check if array is palindrome

// Time Complexity: O(n)
// Space Complexity: O(n)
function isPalindrome(head){
  let arr = [];

  let current = head;
  while(current !== null){
    arr.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    if(arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}


// Optimal Approach: Without Extra Space Using (Slow and Fast Pointer)

// Step 1: Find Middle Using Slow and Fast Pointer
// slow → moves 1 step
// fast → moves 2 steps

// When fast reaches end → slow is at middle

// Step 2: Reverse Second Half

// Reverse from slow.next

// Step 3: Compare Both Halves
// First half → head
// Second half → reversed list

// Time Complexity: O(n)
// Space Complexity: O(1)
function isPalindrome(head){
  if(!head || !head.next) return true;

  // Step 1: Find Middle

  let slow = head;
  let fast = head;

  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half

  let secondHalf = reverse(slow.next);

  // Step 3: Compare halves
  let firstHalf = head;
  let temp = secondHalf;

  while(temp !== null){
    if(firstHalf.val !== temp.val) return false;
    firstHalf = firstHalf.next;
    temp = temp.next;
  }
  return true;
}

function reverse(head){
  let prev = null;
  let curr = head;

  while(curr !== null){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
