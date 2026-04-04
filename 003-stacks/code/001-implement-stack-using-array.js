// Implement Stack using arrays (Fixed Size)

class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
    this.capacity = size;
  }

  // Push element onto stack
  push(value) {
    if (this.top === this.capacity - 1) {
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

  // Current size of stack
  size() {
    return this.top + 1;
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

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2

// Time Complexity:

// | Operation | Time |
// | --------- | ---- |
// | push      | O(1) |
// | pop       | O(1) |
// | peek      | O(1) |
// | size      | O(1) |



// Implement Stack using Array (Dynamic Size)

class Stack{
  constructor(size = 2){
    this.stack = new Array(size);
    this.top = -1;
    this.capacity = size;

    // Resize stack with capacity is full

    resize() {
      this.capacity = this.capacity * 2;
      const newStack = new Array(this.capacity);

      for(let i = 0; i<this.top; i++){
        newStack[i] = stack[i];
      }

      this.stack = newStack;
    }

    push(value){
      if(this.top === this.capacity - 1){
        this.resize();
      }
      this.stack[++this.top] = value;
    }

    pop(){
      if(this.top === -1){
        console.log("Stack Underflow");
        return null;
      }
      return this.stack[this.top--];
    }

    peek(){
      if(this.top === -1) return null;
      return this.stack[this.top];
    }

    size(){
      return this.top + 1;
    }

    print(){
      console.log(this.stack.slice(0, this.top + 1));
    }
  }
}

// Time Complexity:

// push: worst case: O(n) (when resizing)
// But overall: O(1) when amortized
