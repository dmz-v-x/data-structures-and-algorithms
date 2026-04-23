// WHAT IS THE GOAL?

// Given two BSTs:

// Return all elements in sorted order

// KEY OBSERVATION

// Inorder traversal of BST = sorted array

// So:

// BST1 → sorted array 1  
// BST2 → sorted array 2

// Then:

// Merge two sorted arrays

// Brute Force:

// Inorder of tree1 → arr1
// Inorder of tree2 → arr2
// Merge arr1 + arr2

// Complexity
// Time: O(N + M)
// Space: O(N + M)

function getAllElements(root1, root2){
  function inorder(root, arr){
    if(!root) return;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
  }

  let arr1 = [];
  let arr2 = [];
  inorder(root1, arr1);
  inorder(root2, arr2);

  // merge
  let i = 0;
  let j = 0;

  let result = [];
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      result.push(arr1[i++]);
    }else{
      result.push(arr2[j++]);
    }
  }

  while(i < arr1.length) result.push(arr1[i++]);
  while(j < arr2.length) result.push(arr2[j++]);

  return result;
}



// Better Approach: Using 2 stacks

function getAllElements(root1, root2){
  let stack1 = [];
  let stack2 = [];
  let result = [];

  function pushLeft(stack, node){
    while(node){
      stack.push(node);
      node = node.left;
    }
  }

  pushLeft(stack1, root1);
  pushLeft(stack2, root2);

  while(stack1.length || stack2.length){
    let stack;

    if (
      !stack2.length ||
      (stack1.length && stack1[stack1.length - 1].val <= stack2[stack2.length - 1].val)
    ) {
      stack = stack1;
    } else {
      stack = stack2;
    }

    let node = stack.pop();
    result.push(node.val);

    pushLeft(stack, node.right);
  }

  return result;

  
}



// Complexity
// Time: O(N + M)
// Space: O(H1 + H2)












