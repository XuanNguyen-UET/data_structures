import { node, Linked_list } from "./linked_list.js";

function skip() {
  console.log("<----some_methods---->");
}

const arr = [1, 2, 3, 4, 6];
const linked_list_arr = new Linked_list(arr);

linked_list_arr.print();

linked_list_arr.removeFirst();
skip();
linked_list_arr.removeLast();
skip();
linked_list_arr.reverse();
skip();
linked_list_arr.print();
skip()
const arr_ = linked_list_arr.toArray();
console.log(arr_);
skip();
linked_list_arr.clear();
