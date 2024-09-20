class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    const buildBalancedBST = (start, end) => {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const node = new Node(sortedArray[mid]);

      node.left = buildBalancedBST(start, mid - 1);
      node.right = buildBalancedBST(mid + 1, end);

      return node;
    };

    return buildBalancedBST(0, sortedArray.length - 1);
  }

  insert(value) {
    if (typeof value !== "number") {
      throw new Error("Insert value must be a number");
    }
    this.root = this._insertRec(value, this.root);
  }

  _insertRec(value, node) {
    if (node === null) {
      return new Node(value);
    }

    if (node.data === value) {
      return node;
    }

    if (value < node.data) {
      node.left = this._insertRec(value, node.left);
    } else {
      node.right = this._insertRec(value, node.right);
    }
    return node;
  }

  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }

  _deleteRec(node, value) {
    if (node === null) {
      return node;
    }

    if (value < node.data) {
      node.left = this._deleteRec(node.left, value);
    } else if (value > node.data) {
      node.right = this._deleteRec(node.right, value);
    } else {
      // Case 1: Node has no children (leaf node)
      if (node.right === null && node.left === null) {
        return null;
      }
      // Case 2: Node has one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Case 3: Node has two children
      // Find the in-order successor (smallest value in the right subtree)
      const minRightSubtree = this._findMin(node.right);

      // Replace the current node's data with the in-order successor's data
      node.data = minRightSubtree.data;

      // Delete the in-order successor from the right subtree
      node.right = this._deleteRec(node.right, minRightSubtree.data);
    }
    return node;
  }

  _findMin(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  find(value) {
    if (typeof value !== "number") {
      throw new Error("Insert value must be a number");
    }
    return this._insertRec(value, this.root);
  }

  _findRec(value, node) {
    if (node === null) return null;

    if (value === node.data) return node;

    if (value < node.data) {
      return this._findRec(value, node.left);
    } else if (value > node.data) {
      return this._findRec(value, node.right);
    }
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error(
        "A callback function is required for levelOrder traversal"
      );
    }

    if (!this.root) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  levelOrderRecursive(callback) {
    if (typeof callback !== "function") {
      throw new Error(
        "A callback function is required for levelOrder traversal"
      );
    }

    const traverse = (queue) => {
      if (queue.length === 0) return;

      const node = queue.shift();
      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      traverse(queue);
    };

    traverse([this.root]);
  }

  inOrder(callback, node = this.root, result = []) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function is required.");
    }

    if (node === null) return result;

    this.inOrder(callback, node.left, result);

    callback(node);

    result.push(node.data);

    this.inOrder(callback, node.right, result);

    return result;
  }

  preOrder(callback, node = this.root, result = []) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function is required.");
    }

    if (node === null) return result;

    callback(node);

    result.push(node.data);

    this.preOrder(callback, node.left, result);

    this.preOrder(callback, node.right, result);

    return result;
  }

  postOrder(callback, node = this.root, result = []) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function is required.");
    }

    if (node === null) return result;

    this.postOrder(callback, node.left, result);

    this.postOrder(callback, node.right, result);

    callback(node);

    result.push(node.data);

    return result;
  }

  height(node) {
    if (node === null) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node) {
    const findDepth = (current, target, currentDepth) => {
      if (current === null) return -1;

      if (current === target) return currentDepth;

      const leftDepth = findDepth(current.left, target, currentDepth + 1);
      if (leftDepth !== -1) return leftDepth;

      return findDepth(current.right, target, currentDepth + 1);
    };

    return findDepth(this.root, node, 0);
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    const isCurrentNodeBalanced = Math.abs(leftHeight - rightHeight) <= 1;

    const isLeftBalanced = this.isBalanced(node.left);
    const isRightBalanced = this.isBalanced(node.right);

    return isCurrentNodeBalanced && isLeftBalanced && isRightBalanced;
  }

  rebalance() {
    const values = this.inOrder((node) => console.log(node.data));

    this.root = this.buildTree(values);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}



