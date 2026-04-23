// Design a class:

// next() → returns next smallest element  
// hasNext() → is there a next element?

// Basically:

// Iterate BST in sorted order

// KEY IDEA

// BST inorder traversal = sorted order

// So iterator = inorder traversal one-by-one


var BSTIterator = function(root){
  this.stack = [];
  this.pushLeft(root);
}

BSTIterator.prototype.pushLeft = function(node){
  while(node){
    this.stack.push(node);
    node = node.left;
  }
};

BSTIterator.prototype.next = function(){
  let node = this.stack.pop();

  if(node.right){
    this.pushLeft(node.right);
  }
};

BSTIterator.prototype.hasNext = function(){
  return this.stack.length > 0;
}






