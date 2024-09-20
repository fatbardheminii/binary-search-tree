import { Tree } from "./bst.js";

// Helper function to generate an array of random numbers
function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Step 1: Create a binary search tree from an array of random numbers < 100
const randomArray = generateRandomArray(15, 100); // Example: 15 random numbers < 100
const tree = new Tree(randomArray);

console.log("Random Array:", randomArray);
console.log("Pretty Print of the Initial Binary Search Tree:");
tree.prettyPrint();

// Step 2: Confirm that the tree is balanced
console.log(`Is the tree balanced? ${tree.isBalanced()}`);

// Step 3: Print out all elements in level, pre, post, and in order
console.log("Level Order Traversal:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre-Order Traversal:");
console.log(tree.preOrder((node) => console.log(node.data)));

console.log("In-Order Traversal:");
console.log(tree.inOrder((node) => console.log(node.data)));

console.log("Post-Order Traversal:");
console.log(tree.postOrder((node) => console.log(node.data)));

// Step 4: Unbalance the tree by adding several numbers > 100
const unbalancingNumbers = [150, 200, 250, 300, 350];
unbalancingNumbers.forEach((num) => tree.insert(num));

console.log("Tree after inserting numbers > 100:");
tree.prettyPrint();

// Step 5: Confirm that the tree is unbalanced
console.log(`Is the tree balanced? ${tree.isBalanced()}`);

// Step 6: Balance the tree by calling rebalance
console.log("Rebalancing the tree...");
tree.rebalance();

console.log("Tree after rebalancing:");
tree.prettyPrint();

// Step 7: Confirm that the tree is balanced
console.log(`Is the tree balanced? ${tree.isBalanced()}`);

// Step 8: Print out all elements in level, pre, post, and in order (after rebalancing)
console.log("Level Order Traversal After Rebalancing:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre-Order Traversal After Rebalancing:");
console.log(tree.preOrder((node) => console.log(node.data)));

console.log("In-Order Traversal After Rebalancing:");
console.log(tree.inOrder((node) => console.log(node.data)));

console.log("Post-Order Traversal After Rebalancing:");
console.log(tree.postOrder((node) => console.log(node.data)));
