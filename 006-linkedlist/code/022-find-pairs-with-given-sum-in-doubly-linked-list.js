// You are given a sorted doubly linked list:

// 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5

// And a target sum = 5

// You must find all pairs whose sum = 5

// Output
// (1,4), (2,3)

// The list is SORTED

// This allows us to use:

// TWO POINTERS (like array)

// Brute Force: Try all possible pairs

// Time Complexity: O(n^2)
// Space Complexity: O(1) (excluding results)

function findPairs(head, target){
  let result = [];

  let temp = head;

  while(temp1){
    let temp2 = temp1.next;

    while(temp2){
      if(temp1.val + temp2.val === target){
        result.push([temp1.val, temp2.val])
      }
      temp2 = temp2.next;
    }

    temp1 = temp1.next;
  }
  return result;
}


// Optimal Approach using two pointers

// Intuition:

// Since list is sorted:

// Small values → left side
// Large values → right side

// So:

// left = head
// right = tail

// Logic

// At each step:

// sum = left.val + right.val

// Case 1:
// sum == target → store pair
// move both

// Case 2:
// sum < target → need bigger sum → move left++

// Case 3:
// sum > target → need smaller sum → move right--

// Time Complexity: O(n)
// Space Complexity: O(1)

function findPairs(head, target){
  let result = [];

  // Step 1: get tail
  let left = head;
  let right = head;

  while(right.next){
    right = right.next;
  }

  while(left !== right && left.prev !== right){
    let sum = left.val + right.val;

    if(sum === target){
      result.push([left.val, right.val]);
      left = left.next;
      right = right.prev;
    }else if(sum < target){
      left = left.next;
    }else{
      right = right.prev;
    }
  }
  return result;
}













