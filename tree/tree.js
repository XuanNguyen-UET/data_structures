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

  // Methods: Logic of Insert a value into tree
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

  // Methods: Insert a value into tree
  insert(key) {
    this.root = this._insert(this.root, key);
  }
}

export {node, BinaryTree} 