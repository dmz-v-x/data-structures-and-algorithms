// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.


// Intuition:

// Normally, to delete a node in a linked list, you need:

// previous -> current -> next

// And you do:

// previous.next = current.next

// But here:

// You are NOT given head
// You are ONLY given the node to delete

// So you don’t have access to previous

// Visual Example
// Original:
// 4 → 5 → 1 → 9
//       ↑ (delete this node)
// After copying:
// 4 → 1 → 1 → 9
// After skipping:
// 4 → 1 → 9

// Important Constraints

// This trick works because:

// Node is NOT the last node
// node.next is guaranteed to exist

// If it were the last node → ❌ impossible with this method

function deleteNode(node){
  node.val = node.next.val;
  node.next = node.next.next;
}
