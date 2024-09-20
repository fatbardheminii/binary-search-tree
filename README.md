# Binary Search Tree

This project implements a Binary Search Tree (BST) using JavaScript. The BST is designed to efficiently manage and organize data. 

## Features

### Classes

- **Node**: Represents a node in the tree, containing data, a left child, and a right child.
  
- **Tree**: Implements the Binary Search Tree and contains various functions:
  - **insert(value)**: Adds a new value to the tree.
  - **deleteItem(value)**: Removes a specified value from the tree.
  - **find(value)**: Searches for a node with the given value.
  - **height(node)**: Calculates the height of a specified node, which is the number of edges on the longest path from that node to a leaf (a node with no children). In practical terms, it tells you how "tall" the subtree rooted at that node is.
  - **depth(node)**: Determines the depth of a specified node, defined as the number of edges from the node to the tree's root. This essentially measures how "deep" the node is in the tree.
  - **isBalanced()**: Checks if the tree is balanced, meaning the heights of the left and right subtrees of every node differ by no more than one.
  - **rebalance()**: Rebalances the tree if it is found to be unbalanced, ensuring optimal performance for future operations.
  - **levelOrder(callback)**: Traverses the tree in level order (from top to bottom and left to right) and applies a callback function to each node. This can be used to process or display nodes level by level.
  - **preOrder(callback)**: Traverses the tree in pre-order (visit the node, then the left subtree, then the right subtree) and applies a callback function to each node. This is useful for creating a copy of the tree or for prefix notation.
  - **inOrder(callback)**: Traverses the tree in in-order (visit the left subtree, then the node, then the right subtree) and applies a callback function to each node. This traversal produces a sorted order of values for the nodes, making it great for retrieving sorted data.
  - **postOrder(callback)**: Traverses the tree in post-order (visit the left subtree, then the right subtree, then the node) and applies a callback function to each node. This is often used for deleting nodes or evaluating expressions in postfix notation.

## Testing

A driver script (`driver.js`) is included to test the functionality of the Binary Search Tree. It demonstrates inserting values, performing traversals, checking balance, and rebalancing the tree.

## Usage

Clone this repository and open `index.html` in a browser to see the output in the console.
