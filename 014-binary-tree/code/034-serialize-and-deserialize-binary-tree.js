// WHAT DOES THIS MEAN?

// Serialize:

// Convert tree → string

// Deserialize:

// Convert string → same tree

// Example Tree
//         1
//        / \
//       2   3
//          / \
//         4   5
// Serialized form (one possible)

// "1,2,null,null,3,4,null,null,5,null,null"

// WHAT DO WE NEED?

// We need a way to:

// Store BOTH:
// 1. values
// 2. structure


// WRONG IDEA
// Just store values → loses structure

// Example:

// [1,2,3]

// KEY IDEA
// We MUST store nulls

// WHICH TRAVERSAL TO USE?

// Most common:

// Preorder (DFS)

// Why?

// ROOT → LEFT → RIGHT
// Easy to rebuild

// Part 1: SERIALIZATION
// IDEA

// Traverse tree and:

// if node → store value
// if null → store "null"


function serialize(root){
  let result = [];

  function dfs(root){
    if(!node){
      result.push("null");
      return;
    }

    result.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);

  return result.join(",");
}

// DRY RUN

// Tree:

//         1
//        / \
//       2   3

// Steps:
// 1 → push 1
// 2 → push 2
// null → push null
// null → push null
// 3 → push 3
// null → push null
// null → push null

Output:
"1,2,null,null,3,null,null"


// Part 2: Deserialization

// We reverse the process:

// Read values one by one
// Rebuild tree recursively

// KEY OBSERVATION

// Because preorder:

// ROOT → LEFT → RIGHT

// We rebuild in same order

// DRY RUN

// Input:

// "1,2,null,null,3,null,null"
// Steps:
// index=0 → 1 → root
// index=1 → 2 → left
// index=2 → null → left.left = null
// index=3 → null → left.right = null
// index=4 → 3 → right
// index=5 → null → right.left
// index=6 → null → right.right

function deserialize(data){
  let arr = data.split(",");
  let index = 0;

  function build(){
    let val = arr[index++];

    if(val === "null") return null;

    let node = new TreeNode(Number(val));
    node.left = build();
    node.right = build();

    return node;
  }

  return build();
}



// Complexity
// Serialize: O(N)
// Deserialize: O(N)
// Space: O(N)













