//@ts-ignore
// implement linked_list
// with Methods:

// define Node
export class node {
  // constructor of a new Node
  constructor(value) {
    // value
    this.value = value;
    // point to next node
    this.next = null;
  }
}

// define linked_list
export class Linked_list {
  constructor(data) {
    this.head = null;
    this.last = null;
    this.length = 0;
    // create from an arr data
    if (data instanceof Array) {
      // iterate over the arr
      for (const ele of data) {
        this.addLast(ele);
      }
    }
  }

  // return the size of linked_list
  size() {
    return this.length;
  }

  // return headNode
  getHead() {
    return this.head?.value ?? null;
  }

  // return the tailNode
  getLast() {
    return this.last?.value ?? null;
  }

  // return if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Method: addLast
  addLast(element) {
    // if current linked_list is empty
    if (this.head === null) {
      //Todo: addHead
      this.addHead(element);
    } else {
      // add to the tail
      // create a Node with value of element
      const added_node = new node(element);
      // set the tail's point to the added_node
      // @ts-ignore
      this.last.next = added_node;
      // set the added_node as the tail
      this.last = added_node;
      // increase the size off the linked_list
      this.length++;
      return this.size();
    }
  }

  // Method: addHead
  addHead(element) {
    // create a Node with value of element
    const added_node = new node(element);
    // if current linked_list is empty
    if (this.head === null) {
      this.last = added_node;
    }
    // add to the head
    // move the current headNode to the head's next
    added_node.next = this.head;
    // set the head to added_node
    this.head = added_node;
    // increase the size of linked_list
    this.length++;
    return this.size();
  }

  // Method: removeLast
  removeLast() {
    // if linked_list is null -> return null
    if (this.isEmpty()) {
      return null;
    }
    // if the size is 1
    if (this.size() === 1) {
      //Todo: removeHead
      this.removeFirst();
    } else {
      const removed_node = this.last;
      // iterate over the linked list until meet the last node
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      // after while loop, current is the element before lastNode
      // set the current as the lastNode
      current.next = null;
      current.last = current;
      // decrease the size
      this.length--;
      return removed_node?.value;
    }
  }

  // Method: removeFirst
  removeFirst() {
    // if linked_list is null -> return null
    if (this.isEmpty()) {
      return null;
    } else {
      const removed_node = this.head;
      // set the secondNode as the firstNode
      this.head = this.head.next;
      // decrease the size
      this.length--;
      return removed_node?.value;
    }
  }

  // Method: Inverse the linkedList
  // example 1->2->3 into 3->2->1
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let nextTmp = curr.next;
      // set the current point to the prev element
      curr.next = prev;
      prev = curr;
      // increase the iterator
      curr = nextTmp;
    }
    this.head = prev;
  }
  // Method: print the linked_list
  print() {
    // itirate over a linked list use a while loop
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
      // move the current to the next node
      cur = cur.next;
    }
  }

  // Method: clear the linked_list
  clear() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }
}
