// Naive Approach
// Complexity: O(N + N/2) 

var middleNode = function(head) {
    let current = head;
    let length = 0;

    while(current !== null){
      length++;
      current = current.next;
    }

    let middle = Math.floor(length/2) + 1;
    current = head;

    while(current !== null){
      middle--;
      if(middle === 0){
        break;
      }
      current = current.next;
    }

  return current;
};

// Optimal Approach: Tortoise & Hare Algorithm (Slow & Fast Pointers)
// Complexity: O(N/2)

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
    }

    retrun slow;
};







