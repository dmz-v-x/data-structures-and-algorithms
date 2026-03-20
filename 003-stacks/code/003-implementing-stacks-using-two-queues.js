// Implementing Stacks using two queues

// q1 -> main queue
// q2 -> helper queue

// Strategy

// push() -> O(1)
// pop() -> O(n)

// pop logic
// -> move all elements except last to q2
// -> remove last element from q1 
// -> swap queues

class Stack {
  constructor(){
    this.q1 = [];
    this.q2 = [];
  }

  push(x){
    this.q1.push(x);
  }

  pop(){ 
    if(this.isEmpty()) return "Stack is empty";

    // move elements except last
    while(this.q1.length > 1){
      this.q2.push(this.q1.shift());
    }

    // last element = stack top
    let popped = this.q1.shift();

    // swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];

    return popped;
  }

  peek(){
    if(this.isEmpty()) return "Stack is empty";

    while(this.q1.length > 1){
      this.q2.push(this.q1.shift());
    }

    let top = this.q1[0]; // last element;

    // swap back
    [this.q1, this.q2] = [this.q2, this.q1];

    return top;
  }

  isEmpty(){
    return this.q1.length === 0;
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);

// q1 = [10,20,30]

s.pop();

// move → q2 = [10,20]
// pop → 30

// swap → q1 = [10,20]



// Time Complexity

// | Operation | Time |
// | --------- | ---- |
// | push      | O(1) |
// | pop       | O(n) |
// | peek      | O(n) |





