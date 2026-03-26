class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
    this.size = size;
  }

  // Push element onto stack
  push(value) {
    if (this.top === this.size - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.stack[++this.top] = value;
  }

  // Pop element from stack
  pop() {
    if (this.top === -1) {
      console.log("Stack Underflow");
      return null;
    }
    return this.stack[this.top--];
  }

  // Peek top element
  peek() {
    if (this.top === -1) {
      console.log("Stack is empty");
      return null;
    }
    return this.stack[this.top];
  }

  // Check if empty
  isEmpty() {
    return this.top === -1;
  }

  // Print stack
  print() {
    if (this.top === -1) {
      console.log("Stack is empty");
      return;
    }
    console.log(this.stack.slice(0, this.top + 1));
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2


// | Operation | Time |
// | --------- | ---- |
// | push      | O(1) |
// | pop       | O(1) |
// | peek      | O(1) |
