// What is a Trie?

// A Trie is a special tree used to store strings.

// Mostly used for:

// dictionary
// autocomplete
// prefix searching
// searching words fast

// Imagine This

// Suppose we store these words:

// cat
// car
// care
// dog

// Normal storage:

// ["cat", "car", "care", "dog"]

// Problem:

// If we want:

// "Give me all words starting with ca"

// we must scan ALL words.

// That becomes expensive for huge dictionaries.

// Core Idea of Trie

// Trie stores characters level by level.

// Words sharing same prefix share same path.

// Visualize

// Words:

// cat
// car
// care

// Notice:

// ca

// is common.

// Trie reuses it.

// Visualization:

// (root)
//    |
//    c
//    |
//    a
//   / \
//  t   r
//       \
//        e


// Huge Intuition

// Instead of storing:

// cat
// car
// care

// separately,

// Trie stores:

// c -> a

// ONLY ONCE.

// Then branches happen.

// This saves searching time.

// What is a Trie Node?

// Every character becomes a node.

// Each node stores:

// character links
// whether word ends here

// Example

// For:

// cat

// we need:

// c -> a -> t

// But how does node know next character?

// Answer:

// Using children.

// Node Structure

// Each node contains:

// children
// isEnd
// children

// Stores next possible characters.

// Example:

// Node for "a":

// children:
//     t
//     r

// because:

// cat
// car
// isEnd

// Important.

// Because:

// car
// care

// If we stop at r:

// car

// is complete word.

// But there is also more path.

// So node needs:

// isEnd = true


First Code (TrieNode)

Now slowly write node.

class TrieNode {
    constructor() {

        // stores next characters
        this.children = {};

        // marks end of word
        this.isEnd = false;
    }
}



// Visual Understanding

// Initially:

// new TrieNode()

// creates:

// {
//    children: {},
//    isEnd: false
// }

// Why children = {} ?

// Because we want:

// node.children["a"]
// node.children["b"]

// like hashmap.

// Example

// Suppose root has child "c":

// root.children["c"] = new TrieNode();

// Now structure becomes:

// root
//  |
//  c

// Trie Class

// Trie itself mainly stores:

// root node

// Root is empty starting point.

class Trie {
  constructor(){

    this.root = new TrieNode();
  }
}

// Visualization

// Initially:

// (root)

// only.

// No words.

// Insert Operation Intuition

// Now MOST IMPORTANT part.

// Suppose inserting:

// cat

// We process ONE character at a time.

// Starting Position

// We always start from:

// root
// Character 1 = c

// Question:

// Does root already have "c" child?

// If NO:

// Create it.

// Move there.

// Character 2 = a

// Now standing at "c" node.

// Question:

// Does "c" have "a" child?

// If NO:

// Create it.

// Move there.

// Character 3 = t

// Same process.

// Finally:

// Mark end.

// Final Structure
// (root)
//    |
//    c
//    |
//    a
//    |
//    t*

// * means:

// isEnd = true

// Insert Code

// Function Skeleton

// insert(word) {

// }

// Current Pointer

// We need variable showing where we are.

// let node = this.root;

// Initially:

// node = root

// Loop Through Characters
// for (let ch of word) {

// }

// If word:

// cat

// loop gives:

// c
// a
// t
// Check Child Exists
// if (!node.children[ch]) {

// }

// Meaning:

// If path does not exist
// create it
// Create Node
// node.children[ch] = new TrieNode();
// Move Forward

// MOST IMPORTANT STEP.

// node = node.children[ch];

// Meaning:

// walk to next character node

class TrieNode{
  constructor(){
    this.children = {};
    this.end = false;
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode();
  }

  insert(word){
    for(let ch of word){
      if(!node.children[ch]){
        node.children[ch] = new TrieNode();
      }

      node = node.children[ch];
    }

    node.isEnd = true;
  }
}











