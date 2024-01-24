//@ts-check
/* Binary Search Tree!!
 *
 * Nodes that will go on the Binary Tree.
 * They consist of the data in them, the node to the left, the node
 * to the right, and the parent from which they came from.
 *
 * A binary tree is a data structure in which an element
 * has two successors(children). The left child is usually
 * smaller than the parent, and the right child is usually
 * bigger.
 * In many methods, we use recursion to implement tree
 */

// implement tree node
class node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// implement a binary tree
class BinaryTree {
  // create binary tree from an array
  constructor(data) {
    // set the tree's root
    this.root = null;

    if (data instanceof Array) {
      data.forEach((key) => {
        this.insert(key);
      });
    }
  }

  // Method: Insert a value into tree LOGIC
  _insert(root, key) {
    // if the tree is empty
    if (root === null) {
      return new node(key);
    }
    // add key recursively
    // add to the left child if key < root
    if (key < root.key) {
      root.left = this._insert(root.left, key);
    } else if (key > root.key) {
      // add to the right child if key > root
      root.right = this._insert(root.right, key);
    }
    // do nothing when key = root
    return root;
  }

  // Method: Insert a value into tree
  // File Test uses this
  insert(key) {
    this.root = this._insert(this.root, key);
  }

  // Method: Search a value in the tree LOGIC
  // Time Complexity: O(log(n))
  _search(root, value) {
    // if the tree is empty or only has one value
    // if the value = root => 2 cases return root
    if (root === null || root.key === value) {
      return root;
    }

    // if value < root, find in the left subtree
    // if value > root, find in the left subtree
    if (value < root.key) {
      return this._search(root.left, value);
    } else {
      return this._search(root.right, value);
    }
  }

  // Method: Search a value in the tree
  // File Test uses this
  search(key) {
    return this._search(this.root, key);
  }

  // Method: delete a node in the tree
  remove(value) {
    return this._remove(this.root, value);
  }

  // Method: delete a node in the tree LOGIC
  // Required: findMinNode
  _remove(root, key) {
    // if the tree is empty
    if (root === null) {
      return root;
    }

    // if the value < root, find in the left subtree
    if (key < root.key) {
      root.left = this._remove(root.left, key);
    } else if (key > root.key) {
      // if the value > root, find in the right subtree
      root.right = this._remove(root.right, key);
    } else {
      // if the value = root, delete this node
      // case 1: no child => delete the node
      if (root.left === null && root.right === null) {
        root = null;
      } else if (root.left === null) {
        // case 2: one child => replace the node with its child
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      } else {
        // case 3: two children
        // => replaced by the min value in the right subtree
        let minNode = this._findMinNode(root.right);
        root.key = minNode.key;
        root.right = this._remove(root.right, minNode.key);
      }
    }
    return root;
  }

  // Find min node in the tree
  _findMinNode(root) {
    // if the root has no left child => the root is the min node
    if (root.left === null) {
      return root;
    } else {
      // if the root has left child => find in the left subtree
      return this._findMinNode(root.left);
    }
  }

  // Method: find the height of the tree
  height() {
    return this._height(this.root);
  }

  // Method: find the height of the tree LOGIC
  _height(root) {
    // if tree is empty
    if (root === null) {
      return 0
    }
    // find the height of left and right subtree
    const leftHeight = this._height(root.left)
    const rightHeight = this._height(root.right)
    // root's height = the taller subtree + 1
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

export { node, BinaryTree };
