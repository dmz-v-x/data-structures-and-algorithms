// Naive Approach -> Using a Stack
// Time Complexity: O(2N) 
// Space Complexity: O(N) For using stack


var reverseList = function(head) {
  let stack = [];
  let temp = head;
  while(temp !== null){
    stack.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while(temp !== null){
    temp.val = stack[stack.length-1];
    stack.pop();
    temp = temp.next;
  }
  return head;
};

// Optimal Approach: Constant Space
// Time Complexity: O(N)
// Space Complexity: O(1)

var reverseList = function(head) {
  let temp = head;
  let previous = null;
  let front = 0;
  while(temp !== null){
    front = temp.next;
    temp.next = previous;
    previous = temp;
    temp = front;
  }
  return previous;
};

// Reverse a linkedlist recursive solution
