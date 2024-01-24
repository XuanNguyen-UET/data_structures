//@ts-check
// check tree
import { node, BinaryTree } from "./tree.js"

const arr = [3, 4, 1, 0, 6, 5, 2]

const btree = new BinaryTree(arr)
console.log(btree);
/**
 * The output should return:
 *          3 <- root
 *         /\
 *        1 4 
 *       /\  \
 *      0 2  6
 *          /
 *         5 <- leaf  
 */
console.log(btree.height());