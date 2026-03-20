var MinStack = function(){
  this.stack = [];
  this.min = Infinity;
}

MinStack.prototype.push = function(val){
  if(this.stack.length === 0){
    this.stack.push(val);
    this.min = val;
  }else if(val >= this.min){
    this.stack.push(val);
  }else {
    let encoded = 2*val - this.min;
  }
}
