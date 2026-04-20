// You are given 2 linked lists:

// l1 = 2 → 4 → 3
// l2 = 5 → 6 → 4

// These represent numbers in reverse order:

// l1 = 342
// l2 = 465

// You need to return:

// 342 + 465 = 807

// Answer:
// 7 → 0 → 8

// Idea: 

// We are basically doing:

// column addition (like school math)
//    342
// +  465
// -------
//    807

// But:

// digits are stored in reverse
// so we process from left to right


// Brute Force: 

// Convert linked list → number
// Add numbers
// Convert result → linked list

function addTwoNumbers(l1, l2){

  function toNumber(node){
    let num = 0;
    let place = 1;

    while(node){
      num += node.val * place;
      place *= 10;
      node = node.next;
    }

    return num;
  }

  function toList(num){
    let dummy = new ListNode(0);
    let curr = dummy;

    while(num > 0){
      curr.next = new ListNode(num % 10);
      num = Math.floor(num / 10);
      curr = curr.next;
    }

    return dummy.next;
  }


  let sum = toNumber(l1) + toNumber(l2);

  return toList(sum);
}


// Better Approach: Using Arrays

// Convert both lists → arrays
// Add digits with carry
// Create new list

function addTwoNumbers(l1, l2){
  let arr1 = [];
  let arr2 = [];

  while(l1){
    arr1.push(l1.val);
    l1 = l1.next;
  }

  while(l2){
    arr2.push(l2.val);
    l2 = l2.next;
  }

  let i = 0;
  let carry = 0;
  let dummy = new ListNode(0);
  let curr = dummy;

  while(i < arr1.length || i < arr2.length || carry){
    let sum = (arr1[i] || 0) + (arr2[i] || 0) + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);

    curr = curr.next;
    i++;
  }
  return dummy.next;
}


// Optimal Approach

// l1: 2 → 4 → 3
// l2: 5 → 6 → 4

// Step 1:
// 2 + 5 = 7 → carry = 0

// Step 2:
// 4 + 6 = 10 → write 0, carry = 1

// Step 3:
// 3 + 4 + 1 = 8


function addTowNumbers(l1, l2){
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while(l1 || l2 || carry){
    let sum = carry;

    if(l1){
      sum += l1.val;
      l1 = l1.next;
    }

    if(l2){
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }

  return dummy.next;
}


// Complexity:

// | Approach | Time | Space |
// | -------- | ---- | ----- |
// | Brute    | O(n) | O(1)  |
// | Better   | O(n) | O(n)  |
// | Optimal  | O(n) | O(1)  |

























