//@ts-check
// check tree
import { node, BinaryTree } from "./tree.js"

const arr = [3, 4, 1, 0, 6, 5, 2]

const btree = new BinaryTree(arr)
console.log(btree);
console.log(btree.height());