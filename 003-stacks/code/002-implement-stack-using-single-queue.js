// Stack Using Single Queue

// Queue Supports:

// enqueue(x) -> push to back
// dequeue() -> remove from front
// front() -> get front element

// In JS, we simulate queue using array

// queue.push(x) // enqueue
// queue.shift() // remove first element of the array 

// Approach:

// push = easy
// pop = costly

// Trick: After every push → rearrange queue so that: last pushed element comes to front


class Stack {
  constructor() {
    this.q = [];
  }

  push(x){
    this.q.push(x);

    let size = this.q.length;

    for(let i = 0; i<size - 1; i++){
      this.q.push(this.q.shift());
    }
  }

  pop() {
    if(this.isEmpty()) return "Stack is empty";
    return this.q.shift();
  }

  isEmpty(){
    return this.q.length === 0;
  }
}


const s = new Stack();

s.push(10); // [10]
s.push(20); // [20,10]
s.push(30); // [30,20,10]

s.pop();    // 30
s.peek();   // 20


// Time Complexity

// | Operation | Time |
// | --------- | ---- |
// | push      | O(n) |
// | pop       | O(1) |
// | peek      | O(1) |


