class Stack {
  constructor(){
    this.items = [];
  }

  push(value){
    this.items.push(value);
  }

  pop(){
    if(this.isEmpty()){
      return "Stack is Empty";
    }
    return this.items.pop();
  }

  peek(){
    if(this.isEmpty()){
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  size(){
    return this.items.length;
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
