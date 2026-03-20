class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null // head of linked list (first node)
    this.size = 0; // number of elements
  }

  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

    this.size++;
  }

  pop(){
    if(this.isEmpty()) return "Stack is empty";

    const removed = this.top;
    this.top = this.top.next;

    this.size--;

    return removed.value;
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.top.value;
  }

  getSize() {
    return this.size;
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);

// top → 30 → 20 → 10

s.pop();   // 30
s.peek();  // 20




// Time Complexity:

// | Operation | Time |
// | --------- | ---- |
// | push      | O(1) |
// | pop       | O(1) |
// | peek      | O(1) |
