var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function(val) {
  this.stack.push(val);

  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    let min = Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }
};

MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

// Time Complexity

// | Operation | Time |
// | --------- | ---- |
// | push      | O(1) |
// | pop       | O(1) |
// | top       | O(1) |
// | getMin    | O(1) |
