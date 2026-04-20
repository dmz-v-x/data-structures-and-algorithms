// Each node has:

// val
// next → next node
// random → ANY node in list (or null)

// Example
// 1 → 2 → 3

// Random pointers:
// 1.random → 3
// 2.random → 1
// 3.random → 2

// Goal

// Create a deep copy:

// New list with SAME structure
// (but completely new nodes)

// ORIGINAL:            COPY:

// A → B → C            A' → B' → C'
// ↓   ↓   ↓            ↓    ↓    ↓
// C   A   B            C'   A'   B'

// Approach 1: Using HashMap

// Step 1: Create all nodes
// map.set(original, copy)

// Step 2: Assign pointers
// copy.next = map.get(original.next)
// copy.random = map.get(original.random)

// Complexity
// Time: O(n)
// Space: O(n)

function copyRandomList(head){
  if(!head) return null;

  let map = new Map();

  let curr = head;

  // Step 1: Copy Nodes
  while(curr){
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;

  // Step 2: Assign Pointers
  while(curr){
    let copy = map.get(curr);

    copy.next = map.get(curr.next) || null;
    copy.random = map.get(curr.random) || null;

    curr = curr.next;
  }

  return map.get(head);
}


// Optimal Approach

// Instead of hashmap:

// We store mapping INSIDE the list itself


// Transform this:
// 1 → 2 → 3

// Into this:
// 1 → 1' → 2 → 2' → 3 → 3'



function copyRandomList(head) {
  if (!head) return null;

  let curr = head;

  // =========================
  // STEP 1: Insert copy nodes
  // =========================
  while (curr) {
    let copy = new Node(curr.val);

    copy.next = curr.next;
    curr.next = copy;

    curr = copy.next;
  }

  // =========================
  // STEP 2: Set random pointers
  // =========================
  curr = head;

  while (curr) {
    if (curr.random) {
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }

  // =========================
  // STEP 3: Separate lists
  // =========================
  curr = head;
  let dummy = new Node(0);
  let copyCurr = dummy;

  while (curr) {
    let copy = curr.next;

    // add to copied list
    copyCurr.next = copy;
    copyCurr = copy;

    // restore original list
    curr.next = copy.next;

    curr = curr.next;
  }

  return dummy.next;
}








