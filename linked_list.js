//@ts-check
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

  //initiateNode_Index
  initiateNodeAndIndex() {
    return {
      currentHead: this.head,
      currentIndex: 0,
    };
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

  // print the linked_list
  print() {
    // itirate over a linked list use a while loop
    let current = this.head;
    while (current) {
      console.log(current.value);
      // move the current to the next node
      current = current.next;
    }
  }
}

