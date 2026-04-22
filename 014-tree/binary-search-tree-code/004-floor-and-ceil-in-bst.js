// DEFINITIONS

// FLOOR
// Largest value ≤ target

// CEIL
// Smallest value ≥ target

// SIMPLE EXAMPLE

// BST:

//         8
//        / \
//       4   12
//      / \  / \
//     2   6 10 14

// target = 5

// FLOOR:
// Values ≤ 5 → [2,4]
// Largest → 4

// CEIL:
// Values ≥ 5 → [6,8,10,12,14]
// Smallest → 6

// We use BST property:

// LEFT < ROOT < RIGHT

// FLOOR LOGIC

// At node:

// Case 1:
// node.val === target → exact match

// return node.val

// Case 2:
// node.val < target

// Possible floor

// Save it → go RIGHT (maybe bigger floor exists)
// Case 3:
// node.val > target

// Too big → go LEFT


// CEIL LOGIC

// Case 1:
// node.val === target → return

// Case 2:
// node.val > target
// Possible ceil

// Save it → go LEFT (maybe smaller ceil exists)

// Case 3:
// node.val < target
// Too small → go RIGHT


function floorBST(root, target){
  let florr = -1;
  let curr = root;

  while(curr){
    if(curr.val === target){
      return curr.val;
    }

    if(curr.val < target){
      floor = curr.val; // possible answer
      curr = curr.right; // try bigger value
    }else{
      curr.left;
    }
  }
  return floor;
}


function ceilBST(root, target){
  let ceil = -1;
  let curr = root;

  while(curr){
    if(curr.val === target) return curr.val;

    if(curr.val > target){
      ceil = curr.val; // possible value
      curr = curr.left; // try smaller value
    }else{
      curr = curr.right;
    }
  }

  return ceil;
}




// Balanced BST

// Time = O(log N)

// Worst case

// Time = O(N)














