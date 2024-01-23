//@ts-check
//@ts-ignore
// implement linked_list
// with Methods: 

// define Node
class Node {
    // constructor of a new Node
    constructor(value) {
        // value
        this.value = value;
        // point to next node
        this.next = null;
    }
}

// define linked_list
class Linked_list {
    constructor(data) {
        this.head = null;
        this.last = null;
        this.length = 0;
        // create from an arr data
        if (data instanceof Array) {
            // Todo: add last
        }
    }

    
}